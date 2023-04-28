import { Module } from '@nestjs/common'
import { RentService } from './rent.service'
import { RentController } from './rent.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RentModel } from './rent.model'

@Module({
	imports: [SequelizeModule.forFeature([RentModel])],
	controllers: [RentController],
	providers: [RentService],
	exports: [RentService],
})
export class RentModule {}
