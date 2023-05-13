import RentList from '@/components/screens/rents/RentList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const RentsPage: NextPageAuth = () => {
	return <RentList />
}

RentsPage.isOnlyAdmin = true
export default RentsPage
