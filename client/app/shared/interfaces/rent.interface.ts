import { ICar } from './car.interface'
import { IUser } from './user.interface'

export interface IRent {
	id: number
	user: IUser
	car: ICar
	rating: number
	issueDate: Date
	returnDate: Date
	cost: number
}
