import { FC } from 'react'

import Chart from '@/components/ui/Chart'

import { IRent } from '@/shared/interfaces/rent.interface'

import styles from './RentsChart.module.scss'

const RentsChart: FC<{ rents: { [key: string]: IRent[] } }> = ({ rents }) => {
	return (
		<div className={styles.chart}>
			<Chart
				data={{
					labels: Object.keys(rents),
					datasets: [
						{
							label: 'Dataset 1',
							data: Object.keys(rents).map(
								(label: string) => rents[label].length
							),
							backgroundColor: function (context) {
								const value = context.dataset.data[context.dataIndex] || 0
								const maxNum = Math.max.apply(
									null,
									Object.values(context.dataset.data) as number[]
								)
								const opacity = +value / maxNum
								return `rgba(94,107,232, ${opacity})`
							},
						},
					],
				}}
			/>
		</div>
	)
}

export default RentsChart
