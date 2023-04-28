import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

import { IContext, TypeUserState } from './auth.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

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

	// useEffect(() => {
	// 	const accessToken = Cookies.get('accessToken')

	// 	if (accessToken) {
	// 		const user = JSON.parse(localStorage.getItem('user') || '')

	// 		setUser(user)
	// 	}
	// }, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !user) {
			logout()
			setUser(null)
		}
	}, [pathname])

	return !isOnlyAdmin ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
