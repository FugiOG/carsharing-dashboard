import { IRent } from './rent.interface'

export interface ICar {
	id: number
	brand: string
	fullPrice: number
	rentalPrice: number
	imagePath: string
	rents?: IRent[]
}
