import Profile from '@/components/screens/profile/Profile'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyAdmin = false

export default ProfilePage
