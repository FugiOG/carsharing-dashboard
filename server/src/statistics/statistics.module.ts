import { Module } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { StatisticsController } from './statistics.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RentModel } from 'src/rent/rent.model'
import { CarModel } from 'src/car/car.model'
import { UserModel } from 'src/user/user.model'
import { RentModule } from 'src/rent/rent.module'

@Module({
	imports: [
		SequelizeModule.forFeature([RentModel, CarModel, UserModel]),
		RentModule,
	],
	controllers: [StatisticsController],
	providers: [StatisticsService],
})
export class StatisticsModule {}
