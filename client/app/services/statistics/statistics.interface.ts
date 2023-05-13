import { IStatisticItem } from '@/components/ui/statistic-item/statistic-item.interface'

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

export interface IUserStatistic {
	stat: IStatisticItem[]
	rentsByMonth: {
		[key: string]: IRent[]
	}
}
