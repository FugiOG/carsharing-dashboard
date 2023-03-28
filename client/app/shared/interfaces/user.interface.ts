import { IRent } from './rent.interface'

export interface IUser {
	id: number
	name: string
	email: string
	avatarPath: string
	rents?: IRent[]
}
