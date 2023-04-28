import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize/dist'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { getSequelizeConfig } from './config/db.config'
import { UserModule } from './user/user.module'
import { CarModule } from './car/car.module'
import { RentModule } from './rent/rent.module'
import { AuthModule } from './auth/auth.module'
import { MediaModule } from './media/media.module'
import { StatisticsModule } from './statistics/statistics.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getSequelizeConfig,
		}),
		UserModule,
		CarModule,
		RentModule,
		AuthModule,
		MediaModule,
		StatisticsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
