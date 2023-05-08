import { Module } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { StatisticsController } from './statistics.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RentModel } from 'src/rent/rent.model'
import { CarModel } from 'src/car/car.model'
import { UserModel } from 'src/user/user.model'

@Module({
	imports: [SequelizeModule.forFeature([RentModel, CarModel, UserModel])],
	controllers: [StatisticsController],
	providers: [StatisticsService],
})
export class StatisticsModule {}
