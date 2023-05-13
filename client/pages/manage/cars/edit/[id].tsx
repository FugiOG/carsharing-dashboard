import { FC } from 'react'

import CarEdit from '@/components/screens/admin/car/CarEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const CarEditPage: NextPageAuth = () => {
	return <CarEdit />
}

CarEditPage.isOnlyAdmin = true

export default CarEditPage
