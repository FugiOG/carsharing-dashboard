import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<IMenuItem> = ({ icon, link, title }) => {
	const { asPath } = useRouter()
	return (
		<li className={cn(styles.item, { [styles.active]: asPath === link })}>
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
