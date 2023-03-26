import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize/dist'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { getSequelizeConfig } from './config/db.config'
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { RentModule } from './rent/rent.module';

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
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
