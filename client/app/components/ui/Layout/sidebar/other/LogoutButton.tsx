import { FC } from 'react'
import { MouseEvent } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

import styles from '../menu/Menu.module.scss'

const LogoutButton: FC = () => {
	const { user } = useAuth()
	const { logout } = useActions()

	const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={styles.item}>
			<a onClick={handleLogout}>
				<div>
					<MaterialIcon name="MdLogout" />
					<span>Logout</span>
				</div>
			</a>
		</li>
	)
}

export default LogoutButton
