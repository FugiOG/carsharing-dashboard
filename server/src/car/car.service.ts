import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { WhereOptions, Op } from 'sequelize'
import { RentModel } from 'src/rent/rent.model'
import { UserModel } from 'src/user/user.model'
import { CarModel } from './car.model'
import { CarDto } from './dto/car.dto'

@Injectable()
export class CarService {
	constructor(
		@InjectModel(CarModel) private readonly carModel: typeof CarModel
	) {}

	async byId(id: string) {
		const car = await this.carModel.findOne({
			where: { id },
			include: [{ model: RentModel, include: [UserModel] }],
		})
		if (!car) throw new NotFoundException('Car not found')
		return car
	}

	async getAll(searchTerm?: string) {
		let options: WhereOptions<CarModel> = {}

		if (searchTerm) {
			options = {
				[Op.or]: [{ brand: { like: `%${searchTerm}%` } }],
			}
		}

		return this.carModel.findAll({
			where: { ...options },
			order: [['createdAt', 'DESC']],
			include: [{ all: true }],
		})
	}
	async create() {
		const car = await this.carModel.create()
		return car.id
	}

	async update(id: string, dto: CarDto) {
		const car = await this.byId(id)
		return car.update({
			...car,
			...dto,
		})
	}

	async delete(id: string) {
		return this.carModel.destroy({ where: { id } })
	}
}
