import { FC, memo, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import styles from '../menu/Menu.module.scss'
import MenuItem from '../menu/MenuItem'

import LogoutButton from './LogoutButton'

const OtherMenu: FC = () => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>(currentUser)

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])

	return (
		<div className={styles.menu}>
			<div className={styles.heading}>Other</div>
			<ul className={styles.list}>
				{user ? (
					<>
						<MenuItem icon="MdSettings" link="/profile" title="Profile" />
						<LogoutButton />
					</>
				) : (
					<MenuItem icon="MdLogin" link="/auth" title="Login" />
				)}
			</ul>
		</div>
	)
}

export default OtherMenu
