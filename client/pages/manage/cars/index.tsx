import { NextPage } from 'next'

import CarList from '@/components/screens/cars/CarList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const CarsPage: NextPageAuth = () => {
	return <CarList />
}

CarsPage.isOnlyAdmin = false
export default CarsPage
