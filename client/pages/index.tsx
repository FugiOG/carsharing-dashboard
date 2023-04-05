import { GetStaticProps, NextPage } from 'next'
import { Montserrat } from 'next/font/google'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import Layout from '@/components/ui/Layout/Layout'

import { CarService } from '@/services/car.service'

import styles from '@/styles/Home.module.css'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
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
