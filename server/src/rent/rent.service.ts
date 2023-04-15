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

	async byId(id: string) {
		const rent = await this.rentModel.findOne({
			where: { id },
			include: [{ all: true }],
		})
		if (!rent) throw new NotFoundException('Rent not found')
		return rent
	}

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

	async create() {
		const rent = await this.rentModel.create()
		return rent.id
	}

	async update(id: string, dto: RentDto) {
		const rent = await this.byId(id)

		return rent.update({
			...rent,
			...dto,
		})
	}

	async delete(id: string) {
		return this.rentModel.destroy({ where: { id } })
	}
}
