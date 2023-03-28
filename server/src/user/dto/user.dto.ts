import { IsNumber, IsString } from 'class-validator'

export class UserDto {
	@IsString()
	name: string

	@IsString()
	email: string

	@IsString()
	city: string

	@IsString()
	password: string

	@IsString()
	avatarPath: string
}
