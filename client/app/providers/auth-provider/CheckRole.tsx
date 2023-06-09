import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>(currentUser)

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])
	const router = useRouter()

	const Children = () => <>{children}</>
	if (!user) {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
	if (user?.isAdmin) return <Children />

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user && !user?.isAdmin

	if (isUser && isOnlyUser) return <Children />
	return null
}

export default CheckRole
