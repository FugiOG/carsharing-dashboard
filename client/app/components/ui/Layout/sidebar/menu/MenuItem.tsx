import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<IMenuItem> = ({ icon, link, title }) => {
	return (
		<li className={styles.item}>
			<Link href={link}>
				<div>
					<MaterialIcon name={icon} />
					<span>{title}</span>
				</div>
			</Link>
		</li>
	)
}

export default MenuItem
