import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.list}>
				{items.map((item) => {
					return <MenuItem key={item.link} {...item} />
				})}
			</ul>
		</div>
	)
}

export default Menu
