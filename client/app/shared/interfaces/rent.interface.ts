import { ICar } from './car.interface'
import { IUser } from './user.interface'

export interface IRent {
	id: number
	userId: number
	carId: number
	user: IUser
	car: ICar
	rating: number
	issueDate: Date
	returnDate: Date
	cost: number
}

export interface RentDto
	extends Pick<
		IRent,
		'issueDate' | 'returnDate' | 'rating' | 'cost' | 'userId' | 'carId'
	> {}
