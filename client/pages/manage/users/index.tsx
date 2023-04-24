import UserList from '@/components/screens/users/UserList'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const UsersPage: NextPageAuth = () => {
	return <UserList />
}

UsersPage.isOnlyAdmin = false
export default UsersPage
