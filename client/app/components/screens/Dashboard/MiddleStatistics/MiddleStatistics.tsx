import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SubHeading from '@/components/ui/heading/SubHeading'

import { StatisticsService } from '@/services/statistics/statistics.service'

import styles from './MiddleStatistics.module.scss'
import RentsChart from './rents-chart/RentsChart'
import TotalIncome from './total-income/TotalIncome'

const MiddleStatistics: FC = () => {
	const { data, isLoading } = useQuery(['get middle statistics'], () =>
		StatisticsService.getMiddle()
	)

	return (
		<div className={styles.wrapper}>
			<SubHeading title="Middle Statistic" />
			{isLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<SkeletonLoader
						count={1}
						height={276}
						width={260}
						style={{ margin: '20px' }}
					/>
					<SkeletonLoader
						count={1}
						height={276}
						width={688}
						style={{ margin: '20px' }}
					/>
				</div>
			) : data ? (
				<div className={styles.items}>
					<TotalIncome totalIncome={data.income} />
					<RentsChart rents={data.rentsByMonth} />
				</div>
			) : (
				<div className={styles.statErr}>Stat not found</div>
			)}
		</div>
	)
}

export default MiddleStatistics
