import { IRentalList } from './rentalList.interface'

export interface ICar {
	id: number
	brand: string
	fullPrice: number
	rentalPrice: number
	imagePath: string
	rentalList?: IRentalList[]
}
