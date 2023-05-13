import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import MainStatistic from './MainStatistic/MainStatistic'
import MiddleStatistics from './MiddleStatistics/MiddleStatistics'

const Dashboard: FC = () => {
	return (
		<>
			<Meta title="Dashboard" />
			<Heading title="Dashboard" />
			<div style={{ marginTop: '20px' }}>
				<MainStatistic />
				<MiddleStatistics />
			</div>
		</>
	)
}

export default Dashboard
