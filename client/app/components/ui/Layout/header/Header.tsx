import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import { useAuth } from '@/hooks/useAuth'

import UserAvatar from '../../user-avatar/UserAvatar'
import Sidebar from '../sidebar/Sidebar'

import styles from './Header.module.scss'
import Logo from './Logo'
import AuthForm from './auth-form/AuthForm'

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
				{user ? (
					<UserAvatar
						title="dashboard"
						link="/dashboard"
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
