import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from '@nestjs/sequelize'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserModel } from 'src/user/user.model'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		@InjectModel(UserModel) private readonly userModel: typeof UserModel
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: configService.get('JWT_SECRET'),
		})
	}

	async validate({ id }: Pick<UserModel, 'id'>) {
		return await this.userModel.findByPk(id)
	}
}
