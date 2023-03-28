import {
	Injectable,
	BadRequestException,
	UnauthorizedException,
	NotFoundException,
} from '@nestjs/common'
import { UserModel } from 'src/user/user.model'
import { AuthDto } from './dto/auth.dto'
import { hash, genSalt, compare } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/sequelize'
import { faker } from '@faker-js/faker'
import { WhereOptions } from 'sequelize'
import { Op } from 'sequelize'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: typeof UserModel,
		private readonly jwtService: JwtService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueTokenPair(String(user.id)),
		}
	}

	async register(dto: AuthDto) {
		const oldUser = await this.userModel.findOne({
			where: { email: dto.email },
		})
		if (oldUser) {
			throw new BadRequestException('User with this email already register')
		}
		const salt = await genSalt(10)
		const user = await this.userModel.create({
			email: dto.email,
			password: await hash(dto.password, salt),
			avatarPath: faker.image.avatar(),
			name: faker.name.firstName(),
		})

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueTokenPair(String(user.id)),
		}
	}

	async validateUser(dto: AuthDto) {
		const user = await this.userModel.findOne({
			where: { email: dto.email },
			attributes: ['id', 'email', 'password', 'avatarPath', 'name', 'city'],
		})
		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await compare(dto.password, user.password)
		if (!isValidPassword) throw new UnauthorizedException('Invalid password')

		return user
	}

	async issueTokenPair(userId: string) {
		const data = { id: userId }
		return await this.jwtService.signAsync(data, {
			expiresIn: '1d',
		})
	}

	returnUserFields(user: UserModel) {
		return {
			id: user.id,
			email: user.email,
			avatarPath: user.avatarPath,
			name: user.name,
			city: user.city,
		}
	}

	async byId(id: string) {
		const user = await this.userModel.findOne({
			where: { id },
			include: [{ all: true }],
		})
		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async getAll(searchTerm?: string) {
		let options: WhereOptions<UserModel> = {}

		if (searchTerm) {
			options = {
				[Op.or]: [{ email: { like: `%${searchTerm}%` } }],
			}
		}

		return this.userModel.findAll({
			where: { ...options },
			order: [['createdAt', 'DESC']],
			include: [{ all: true }],
		})
	}

	async update(id: string, dto: UserDto) {
		const user = await this.byId(id)
		return user.update({
			...user,
			...dto,
		})
	}
}
