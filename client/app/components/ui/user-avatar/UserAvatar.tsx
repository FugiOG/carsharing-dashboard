import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ avatarPath: string; link: string; title: string }> = ({
	avatarPath,
	link,
	title,
}) => {
	return (
		<Link href={link} title={title} style={{ height: '40px' }}>
			<div className={styles.avatar}>
				<Image src={avatarPath} fill alt="" draggable={false} unoptimized />
			</div>
		</Link>
	)
}

export default UserAvatar
