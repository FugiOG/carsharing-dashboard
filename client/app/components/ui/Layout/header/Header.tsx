import { FC } from 'react'

import Sidebar from '../sidebar/Sidebar'

import styles from './Header.module.scss'
import Logo from './Logo'
import AuthForm from './auth-form/AuthForm'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<AuthForm />
		</header>
	)
}

export default Header
