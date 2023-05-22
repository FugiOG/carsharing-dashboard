import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'

import { StatisticsService } from '@/services/statistics/statistics.service'

import Meta from '@/utils/meta/Meta'

import RentsChart from '../Dashboard/MiddleStatistics/rents-chart/RentsChart'

import styles from './UserStatistic.module.scss'

const UserStatistic: FC = () => {
	const { data, isLoading } = useQuery(
		['get user statistics'],
		() => StatisticsService.getUser(),
		{}
	)
	return (
		<>
			<Meta title="User stat" />
			<Heading title="User statistic" />
			<div className={styles.wrapper}>
				{isLoading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<SkeletonLoader
							count={2}
							height={130}
							width={260}
							style={{ margin: '10px 20px' }}
						/>
						<SkeletonLoader
							count={1}
							height={407}
							width={688}
							style={{ margin: '10px' }}
						/>
					</div>
				) : data?.stat?.length ? (
					<div className={styles.items}>
						<div className={styles.numStat}>
							{data.stat.map((item) => {
								const isCurrency = item.id === 2
								return (
									<StatisticItem
										key={item.id}
										id={item.id}
										icon={item.icon}
										name={item.name}
										value={item.value}
										isCurrency={isCurrency}
									/>
								)
							})}
						</div>
						<RentsChart rents={data.rentsByMonth} />
					</div>
				) : (
					<div className={styles.statErr}>Stat not found</div>
				)}
			</div>
		</>
	)
}

export default UserStatistic
