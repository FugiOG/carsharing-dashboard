import { Injectable, NotFoundException } from '@nestjs/common'
import { UserModel } from 'src/user/user.model'
import { InjectModel } from '@nestjs/sequelize'
import { WhereOptions } from 'sequelize'
import { Op } from 'sequelize'
import { UserDto } from './dto/user.dto'
import { hash, genSalt } from 'bcryptjs'
@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: typeof UserModel
	) {}

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
				email: { [Op.like]: `%${searchTerm}%` },
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
		const dynamParam: any = {}
		const isSameUser = await this.userModel.findOne({
			where: { email: dto.email },
		})
		if (isSameUser && String(id) === isSameUser.id) {
			return new NotFoundException('Email busy')
		}
		if (dto.password) {
			const salt = await genSalt(10)
			dynamParam.password = await hash(dto.password, salt)
		} else {
			dynamParam.password = undefined
		}
		dynamParam.email = dto.email
		if (dto.isAdmin || dto.isAdmin === false) {
			dynamParam.isAdmin = dto.isAdmin
		}
		return user.update({
			...user,
			...dto,
			...dynamParam,
		})
	}

	async delete(id: string) {
		return this.userModel.destroy({ where: { id } })
	}
}
