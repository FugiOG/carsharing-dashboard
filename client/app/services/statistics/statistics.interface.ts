import { IRent } from '@/shared/interfaces/rent.interface'

export type KeysInStat =
	| 'Jan'
	| 'Feb'
	| 'Mar'
	| 'Apr'
	| 'May'
	| 'Jun'
	| 'Jul'
	| 'Aug'
	| 'Sep'
	| 'Oct'
	| 'Nov'
	| 'Dec'

export interface IMiddleStatistics {
	income: number
	rentsByMonth: {
		[key: string]: IRent[]
	}
}
