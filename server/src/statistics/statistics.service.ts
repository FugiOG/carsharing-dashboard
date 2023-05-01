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
		@InjectModel(UserModel) private readonly userModel: typeof UserModel,
		private readonly rentService: RentService
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
				name: 'Количество аренд',
				value: countRents,
				icon: 'MdCarRental',
			},
			{
				id: 2,
				name: 'Количество пользователей',
				value: countUsers,
				icon: 'MdSupervisorAccount',
			},
			{
				id: 3,
				name: 'Количество автомобилей',
				value: countCars,
				icon: 'MdOutlineDirectionsCar',
			},
			{
				id: 4,
				name: 'Средний рейтинг',
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
		const rents = await this.rentService.getAll()
		rents.forEach((rent) => {
			const returnMonth = moment.unix(rent.returnDate).month() + 1
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
