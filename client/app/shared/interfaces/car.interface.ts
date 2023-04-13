import { IRent } from './rent.interface'

export interface ICar {
	id: string
	brand: string
	fullPrice: number
	rentalPrice: number
	imagePath: string
	rents?: IRent[]
}

export interface CarDto
	extends Pick<ICar, 'brand' | 'fullPrice' | 'rentalPrice' | 'imagePath'> {}
