import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<IMenu> = ({ items, title }) => {
	const { user: currentUser } = useAuth()
	const [user, setUser] = useState<any>(currentUser)

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])

	return user ? (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.list}>
				{items.map((item) => {
					if (item.isAdmin && !user.isAdmin) return null
					return <MenuItem key={item.link} {...item} />
				})}
			</ul>
		</div>
	) : (
		<div className={styles.authMsg}>Plz autorize!</div>
	)
}

export default Menu
