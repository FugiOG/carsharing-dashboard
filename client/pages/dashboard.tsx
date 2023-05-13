import Dashboard from '@/components/screens/Dashboard/Dashboard'

import { NextPageAuth } from '@/shared/interfaces/auth.interface'

const DashboardPage: NextPageAuth = () => {
	return <Dashboard />
}

DashboardPage.isOnlyAdmin = true

export default DashboardPage
