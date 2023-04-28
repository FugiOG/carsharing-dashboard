import { Controller, Get, HttpCode } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Get('/main')
	@Auth()
	@HttpCode(200)
	async getMainStatistic() {
		return this.statisticsService.getMainStatistic()
	}
	@Get('/middle')
	@Auth()
	@HttpCode(200)
	async getMiddleStatistic() {
		return this.statisticsService.getMiddleStatistic()
	}
}
