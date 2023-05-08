'use client'

import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin },
}) => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>(currentUser)

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])
	const router = useRouter()

	const Children = () => <>{children}</>
	if (user?.isAdmin) return <Children />

	const isUser = user && !user.isAdmin

	if (isOnlyAdmin && isUser) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	if (isUser) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
