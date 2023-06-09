import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class UserDto {
	@IsString()
	name: string

	@IsString()
	email: string

	@IsString()
	city?: string

	password?: string

	@IsString()
	avatarPath?: string

	isAdmin?: boolean
}
