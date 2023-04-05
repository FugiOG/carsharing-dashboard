import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RentDto } from './rent.dto'
import { RentModel } from './rent.model'
import { WhereOptions } from 'sequelize'
import { Op } from 'sequelize'

@Injectable()
export class RentService {
	constructor(
		@InjectModel(RentModel) private readonly rentModel: typeof RentModel
	) {}

	async getAll(searchTerm?: string) {
		let options: WhereOptions<RentModel> = {}

		if (searchTerm) {
			options = {
				[Op.or]: [{ id: { like: `%${searchTerm}%` } }],
			}
		}

		return this.rentModel.findAll({
			where: { ...options },
			order: [['createdAt', 'DESC']],
			include: [{ all: true }],
		})
	}

	async create(dto: RentDto) {
		return this.rentModel.create({
			...dto,
		})
	}

	async delete(id: string) {
		return this.rentModel.destroy({ where: { id } })
	}
}
