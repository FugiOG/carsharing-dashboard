import { IRent } from './rent.interface'

export interface IUser {
	id: number
	name: string
	email: string
	avatarPath: string
	city: string
	isAdmin: boolean
	rents?: IRent[]
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

export interface UserDto
	extends Pick<IUser, 'name' | 'email' | 'avatarPath' | 'city' | 'isAdmin'> {
	password?: string
}

// export interface IUserState {
// 	email: string
// 	isAdmin: boolean
// }

export interface IInitialState {
	user: IUser | null
	isLoading: boolean
}

export interface IToken {
	accessToken: string
}

// export interface IAuthResponse extends IToken {
// 	user: IUser
// }
export interface IEmailPassword {
	email: string
	password: string
}
