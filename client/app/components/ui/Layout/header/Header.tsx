import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import { useAuth } from '@/hooks/useAuth'

import UserAvatar from '../../user-avatar/UserAvatar'

import styles from './Header.module.scss'
import Logo from './Logo'

const DynamicTheme = dynamic(() => import('../../theme/Theme'), {
	ssr: false,
})
const Header: FC = () => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>()
	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.wrapper}>
				<DynamicTheme style={{ marginTop: '6px' }} />
				{user ? (
					<UserAvatar
						title="dashboard"
						link="/profile"
						avatarPath={user.avatarPath || ''}
					/>
				) : (
					<Link href="/auth" className={styles.button}>
						<FaRegUserCircle />
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
