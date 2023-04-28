import { GetStaticProps, NextPage } from 'next'

import Dashboard from '@/components/screens/Dashboard/Dashboard'
import { IDashboard } from '@/components/screens/Dashboard/dashboard.interface'

import { CarService } from '@/services/car.service'

const HomePage: NextPage<IDashboard> = (props) => {
	return <Dashboard {...props} />
}

export const getStaticProps: GetStaticProps<IDashboard> = async () => {
	try {
		const { data: cars } = await CarService.getAll()
		return {
			props: {
				cars,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				cars: [],
			},
		}
	}
}

export default HomePage
