import { Injectable, NotFoundException } from '@nestjs/common'
import { UserModel } from 'src/user/user.model'
import { InjectModel } from '@nestjs/sequelize'
import { WhereOptions } from 'sequelize'
import { Op } from 'sequelize'
import { UserDto } from './dto/user.dto'

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

	async delete(id: string) {
		return this.userModel.destroy({ where: { id } })
	}
}
