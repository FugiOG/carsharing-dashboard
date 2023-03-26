import { ICar } from './car.interface'
import { IUser } from './user.interface'

export interface IRent {
	id: number
	user: IUser
	car: ICar
	issueDate: number
	returnDate: number
	cost: number
}
