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
			<Image
				className={styles.avatar}
				src={avatarPath}
				width={40}
				height={40}
				alt=""
				draggable={false}
			/>
		</Link>
	)
}

export default UserAvatar
