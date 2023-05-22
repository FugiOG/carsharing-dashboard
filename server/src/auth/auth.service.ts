import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { UserModel } from 'src/user/user.model'
import { AuthDto } from './dto/auth.dto'
import { hash, genSalt, compare } from 'bcryptjs'
import { faker } from '@faker-js/faker'
import { JwtService } from '@nestjs/jwt'
import { FileResponse } from './types/file.inteface'
import { path } from 'app-root-path'
import { writeFile } from 'fs-extra'

@Injectable()
export class AuthService {
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

	async saveFiles(file: any): Promise<FileResponse> {
		const uploadFolder = `${path}/uploads/images`
		await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)
		const res: FileResponse = {
			url: `/uploads/${file.originalname}`,
			name: file.originalname,
		}
		return res
	}

	async validateUser(dto: AuthDto) {
		const user = await this.userModel.findOne({
			where: { email: dto.email },
			attributes: [
				'id',
				'email',
				'password',
				'avatarPath',
				'name',
				'isAdmin',
				'city',
			],
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
			isAdmin: user.isAdmin,
		}
	}
}
