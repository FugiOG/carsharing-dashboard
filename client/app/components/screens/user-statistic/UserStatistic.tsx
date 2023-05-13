import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'

import { StatisticsService } from '@/services/statistics/statistics.service'

import Meta from '@/utils/meta/Meta'

import styles from './UserStatistic.module.scss'

const UserStatistic: FC = () => {
	const { data, isLoading } = useQuery(
		['get main statistics'],
		() => StatisticsService.getUser(),
		{}
	)
	return (
		<>
			<Meta title="User stat" />
			<Heading title="User statistic" />
			<div className={styles.wrapper}>
				{isLoading ? (
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<SkeletonLoader
							count={1}
							height={130}
							width={260}
							inline
							style={{ margin: '20px' }}
						/>
						<SkeletonLoader
							count={1}
							height={130}
							width={260}
							inline
							style={{ margin: '20px' }}
						/>
					</div>
				) : data?.stat?.length ? (
					<div className={styles.items}>
						{data.stat.map((item) => (
							<StatisticItem
								key={item.id}
								id={item.id}
								icon={item.icon}
								name={item.name}
								value={item.value}
							/>
						))}
					</div>
				) : (
					<div>Stat not found</div>
				)}
			</div>
		</>
	)
}

export default UserStatistic
