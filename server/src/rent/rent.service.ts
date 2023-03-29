import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RentDto } from './rent.dto'
import { RentModel } from './rent.model'

@Injectable()
export class RentService {
	constructor(
		@InjectModel(RentModel) private readonly rentModel: typeof RentModel
	) {}

	async create(dto: RentDto) {
		return this.rentModel.create({
			...dto,
		})
	}

	async delete(id: string) {
		return this.rentModel.destroy({ where: { id } })
	}
}
