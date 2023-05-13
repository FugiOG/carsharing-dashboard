import axios from 'api/interceptor'

import { IStatisticItem } from '@/components/ui/statistic-item/statistic-item.interface'

import { IUser, UserDto } from '@/shared/interfaces/user.interface'

import { IMiddleStatistics, IUserStatistic } from './statistics.interface'

export const StatisticsService = {
	async getMain() {
		return axios
			.get<IStatisticItem[]>('/statistics/main')
			.then((data) => data.data)
	},
	async getMiddle() {
		return axios
			.get<IMiddleStatistics>('/statistics/middle')
			.then((data) => data.data)
	},
	async getUser() {
		return axios
			.get<IUserStatistic>('/statistics/user')
			.then((data) => data.data)
	},
}
