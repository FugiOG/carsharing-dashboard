import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import * as moment from 'moment'
import { col, fn } from 'sequelize'
import { CarModel } from 'src/car/car.model'
import { RentModel } from 'src/rent/rent.model'
import { RentService } from 'src/rent/rent.service'
import { UserModel } from 'src/user/user.model'
import { IStatisticItem } from './statistics.interface'

@Injectable()
export class StatisticsService {
	constructor(
		@InjectModel(RentModel) private readonly rentModel: typeof RentModel,
		@InjectModel(CarModel) private readonly carModel: typeof CarModel,
		@InjectModel(UserModel) private readonly userModel: typeof UserModel
	) {}

	async getMainStatistic(): Promise<IStatisticItem[]> {
		const countRents = await this.rentModel.count()
		const countUsers = await this.userModel.count()
		const countCars = await this.carModel.count()

		const averageRating = await this.rentModel
			.findAll({
				attributes: [[fn('avg', col('rating')), 'rating']],
			})
			.then((data) => +Number(data[0].rating as any).toFixed(1))

		return [
			{
				id: 1,
				name: 'Number of rentals',
				value: countRents,
				icon: 'MdCarRental',
			},
			{
				id: 2,
				name: 'Number of users',
				value: countUsers,
				icon: 'MdSupervisorAccount',
			},
			{
				id: 3,
				name: 'Number of cars',
				value: countCars,
				icon: 'MdOutlineDirectionsCar',
			},
			{
				id: 4,
				name: 'Average rating',
				value: averageRating,
				icon: 'MdStarOutline',
			},
		]
	}

	async getMiddleStatistic() {
		const income = await this.rentModel
			.findAll({
				attributes: [[fn('sum', col('cost')), 'cost']],
			})
			.then((data) => Number(data[0].cost as any))

		const rentsByMonth = {}
		const rents = await this.rentModel.findAll({
			order: [['returnDate', 'ASC']],
			include: [{ all: true }],
		})
		rents.forEach((rent) => {
			const returnMonth = moment.unix(rent.returnDate).format('MMM')
			if (!rentsByMonth[returnMonth]) {
				rentsByMonth[returnMonth] = []
			}
			rentsByMonth[returnMonth].push(rent)
		})
		return {
			income,
			rentsByMonth,
		}
	}
}
