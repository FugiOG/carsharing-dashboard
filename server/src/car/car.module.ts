import { Module } from '@nestjs/common'
import { CarService } from './car.service'
import { CarController } from './car.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CarModel } from './car.model'

@Module({
	imports: [SequelizeModule.forFeature([CarModel])],
	controllers: [CarController],
	providers: [CarService],
})
export class CarModule {}
