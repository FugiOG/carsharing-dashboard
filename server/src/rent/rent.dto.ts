import { IsDate, IsNumber, IsString } from 'class-validator'

export class RentDto {
	@IsNumber()
	issueDate: number

	@IsNumber()
	returnDate: number

	@IsNumber()
	rating: number

	@IsNumber()
	cost: number

	@IsNumber()
	carId: number

	@IsNumber()
	userId: number
}
