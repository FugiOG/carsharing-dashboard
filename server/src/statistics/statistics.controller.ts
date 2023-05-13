import { Controller, Get, HttpCode } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from 'src/user/decorations/user.decorator'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Get('/main')
	@Auth('admin')
	@HttpCode(200)
	async getMainStatistic() {
		return this.statisticsService.getMainStatistic()
	}
	@Get('/middle')
	@Auth('admin')
	@HttpCode(200)
	async getMiddleStatistic() {
		return this.statisticsService.getMiddleStatistic()
	}

	@Get('/user')
	@Auth()
	@HttpCode(200)
	async getUserStatistic(@User('id') id: string) {
		return this.statisticsService.getUserStatistic(id)
	}
}
