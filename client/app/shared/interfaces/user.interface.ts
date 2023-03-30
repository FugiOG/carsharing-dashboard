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
