import { FC } from 'react'

import Layout from '@/components/ui/Layout/Layout'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ cars }) => {
	return (
		<>
			<Meta title="Dashboard" />
			<h1>Overview</h1>
			{/* {cars.length ? cars.map()} */}
		</>
	)
}

export default Home
