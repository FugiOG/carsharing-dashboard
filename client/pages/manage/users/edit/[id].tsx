import UserEdit from '@/components/screens/admin/user/UserEdit'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
