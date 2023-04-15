import { NextPageAuth } from '@/shared/interfaces/auth.interface'
import RentList from '@/components/screens/rents/RentList'

const RentsPage: NextPageAuth = () => {
	return <RentList />
}

RentsPage.isOnlyAdmin = false
export default RentsPage
