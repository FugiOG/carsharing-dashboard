import { IRent } from '@/shared/interfaces/rent.interface'

export type KeysInStat =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12'

export interface IMiddleStatistics {
	income: number
	rentsByMonth: {
		(key: KeysInStat): IRent[]
	}
}
