import { IsDate, IsNumber, IsString } from 'class-validator'

export class RentDto {
	@IsString()
	issueDate: string

	@IsString()
	returnDate: string

	@IsNumber()
	rating: number

	@IsNumber()
	cost: number

	@IsNumber()
	carId: number

	@IsNumber()
	userId: number
}
