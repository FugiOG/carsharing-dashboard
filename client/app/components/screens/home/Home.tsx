import { FC } from 'react'

import Layout from '@/components/ui/Layout/Layout'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ cars }) => {
	return (
		<Layout title="Dashboard">
			<h1>Overview</h1>
			{/* {cars.length ? cars.map()} */}
		</Layout>
	)
}

export default Home
