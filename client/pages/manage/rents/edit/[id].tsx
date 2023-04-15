import RentEdit from '@/components/screens/admin/rent/RentEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const RentEditPage: NextPageAuth = () => {
	return <RentEdit />
}

RentEditPage.isOnlyAdmin = false

export default RentEditPage
