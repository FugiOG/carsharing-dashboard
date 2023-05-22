import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { FC } from 'react'
import { MdCarRental } from 'react-icons/md'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SubHeading from '@/components/ui/heading/SubHeading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'

import { StatisticsService } from '@/services/statistics/statistics.service'

import styles from './MainStatistic.module.scss'

const MainStatistic: FC = () => {
	const { data, isLoading } = useQuery(
		['get main statistics'],
		() => StatisticsService.getMain(),
		{}
	)

	return (
		<div className={styles.wrapper}>
			<SubHeading title="Main Statistic" />
			{isLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<SkeletonLoader
						count={4}
						height={130}
						width={260}
						inline
						style={{ margin: '20px' }}
					/>
				</div>
			) : data?.length ? (
				<div className={styles.items}>
					{data.map((item) => (
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
				<div className={styles.statErr}>Stat not found</div>
			)}
		</div>
	)
}

export default MainStatistic
