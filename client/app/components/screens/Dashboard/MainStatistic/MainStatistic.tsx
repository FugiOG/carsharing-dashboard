import Head from 'next/head'
import { FC } from 'react'
import { MdCarRental } from 'react-icons/md'

import SubHeading from '@/components/ui/heading/SubHeading'
import StatisticItem from '@/components/ui/statistic-item/StatisticItem'

const MainStatistic: FC = () => {
	return (
		<div>
			<SubHeading title="Main Statistic" />
			<StatisticItem icon={MdCarRental} name="Number of rents" value={150} />
		</div>
	)
}

export default MainStatistic
