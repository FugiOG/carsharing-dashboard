import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import CheckRole from './CheckRole'

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin },
}) => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>(currentUser)

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])

	const { logout } = useActions()

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && user) {
			logout()
			setUser(null)
		}
	}, [pathname])

	return !isOnlyAdmin ? (
		<>{children}</>
	) : (
		<CheckRole Component={{ isOnlyAdmin }}>{children}</CheckRole>
	)
}

export default AuthProvider
