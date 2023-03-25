import { ICar } from './car.interface'
import { IUser } from './user.interface'

export interface IRentalList {
	id: number
	user: IUser
	car: ICar
	issueDate: number
	returnDate: number
	cost: number
}
