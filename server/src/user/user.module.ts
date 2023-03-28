import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserModel } from './user.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtStrategy } from './strategies/auth.strategy'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJWTConfig } from 'src/config/jwt.config'

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig,
		}),
		SequelizeModule.forFeature([UserModel]),
	],
	controllers: [UserController],
	providers: [UserService, JwtStrategy],
})
export class UserModule {}
