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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)
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

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => 200),
			backgroundColor: 'rgba(94,107,232, 0.7)',
		},
	],
}
const RentsChart: FC<{ rents: { (key: KeysInStat): IRent[] } }> = ({
	rents,
}) => {
	return (
		<div className={styles.chart}>
			{/* @ts-ignore */}
			<Bar options={options} data={data} />
		</div>
	)
}

export default RentsChart
