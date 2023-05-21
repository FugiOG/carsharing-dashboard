import {
	BarElement,
	CategoryScale,
	ChartData,
	Chart as ChartJS,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { FC, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

import { useTypedSelector } from '@/hooks/useTypedSelector'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title)

const Chart: FC<{ data: ChartData<'bar', any[], string> }> = ({ data }) => {
	const { themeValue } = useTypedSelector((state) => state.theme)
	const options = {
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
					color: themeValue === 'dark' ? '#fff' : '#6E6E70',
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
				color: themeValue === 'dark' ? '#fff' : '#404040',
				padding: {
					bottom: 20,
				},
				font: {
					size: 26,
					weight: 700,
				},
			},
			tooltip: {
				bodyColor: themeValue === 'dark' ? '#fff' : '#222',
				backgroundColor: themeValue === 'dark' ? '#515151' : '#fff',
				titleColor: themeValue === 'dark' ? '#fff' : '#222',
				titleFont: {
					size: 18,
					weight: '600',
				},
				bodyFont: {
					size: 16,
					weight: '500',
				},
				titleAlign: 'center',
				bodyAlign: 'center',
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

	return <Bar options={options as any} data={data} />
}

export default Chart
