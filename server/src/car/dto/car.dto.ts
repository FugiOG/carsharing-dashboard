import { IsNumber, IsString } from 'class-validator'

export class CarDto {
	@IsString()
	brand?: string

	@IsString()
	model?: string

	@IsNumber()
	fullPrice: number

	@IsNumber()
	rentalPrice: number

	imagePath?: string
}
