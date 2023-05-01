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
		<div>
			<SubHeading title="Main Statistic" />
			{isLoading ? (
				<SkeletonLoader count={1} />
			) : data?.length ? (
				<div className={styles.wrapper}>
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
				<div>Stat not found</div>
			)}
		</div>
	)
}

export default MainStatistic
