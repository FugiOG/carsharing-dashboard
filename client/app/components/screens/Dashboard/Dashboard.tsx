import { FC } from 'react'

import Layout from '@/components/ui/Layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import MainStatistic from './MainStatistic/MainStatistic'
import MiddleStatistics from './MiddleStatistics/MiddleStatistics'
import { IDashboard } from './dashboard.interface'

const Dashboard: FC<IDashboard> = ({ cars }) => {
	return (
		<>
			<Meta title="Dashboard" />
			<Heading title="Dashboard" />
			<MainStatistic />
			<MiddleStatistics />
			{/* {cars.length ? cars.map()} */}
		</>
	)
}

export default Dashboard
