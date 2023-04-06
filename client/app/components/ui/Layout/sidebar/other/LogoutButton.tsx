import { FC } from 'react'
import { MouseEvent } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import { AuthService } from '@/services/auth/auth.service'

import styles from '../menu/Menu.module.scss'

const LogoutButton: FC = () => {
	const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		await AuthService.logout()
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
