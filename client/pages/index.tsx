import UserStatistic from '@/components/screens/user-statistic/UserStatistic'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const HomePage: NextPageAuth = () => {
	return <UserStatistic />
}

HomePage.isOnlyUser = true

export default HomePage
