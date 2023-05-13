import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { IRent } from '@/shared/interfaces/rent.interface'

import { KeysInStat } from '@/services/statistics/statistics.interface'

import styles from './RentsChart.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title)
export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
			},
			ticks: {
				font: {
					size: 18,
				},
			},
			border: {
				display: false,
			},
		},
		y: {
			grid: {
				display: false,
			},
			ticks: {
				display: false,
			},
			border: {
				display: false,
			},
		},
	},
	borderRadius: 16,
	borderSkipped: false,
	barThickness: 44,
	plugins: {
		title: {
			display: true,
			text: 'Rents by month',
			color: '#404040',
			padding: {
				bottom: 20,
			},
			font: {
				size: 26,
				weight: 700,
			},
		},
		tooltip: {
			bodyColor: '#222',
			backgroundColor: '#fff',
			titleColor: '#222',
			titleFont: {
				size: 18,
				weight: '600',
			},
			bodyFont: {
				size: 16,
				weight: '500',
			},
			titleAlign: 'center',
			padding: 12,
			yAlign: 'bottom',
			displayColors: false,
			callbacks: {
				label: function (context: any) {
					return context.parsed.y.toLocaleString('ru-RU')
				},
			},
		},
	},
}

const RentsChart: FC<{ rents: { [key: string]: IRent[] } }> = ({ rents }) => {
	return (
		<div className={styles.chart}>
			<Bar
				options={options as any}
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
								// console.log(value)
								const opacity = +value / maxNum
								return `rgba(94,107,232, ${opacity})` // Используйте нужный вам цвет и прозрачность
							},
							// backgroundColor: 'rgba(94,107,232, 0.7)',
						},
					],
				}}
			/>
		</div>
	)
}

export default RentsChart
