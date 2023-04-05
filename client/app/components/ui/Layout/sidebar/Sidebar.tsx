import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import {
	sidebarAnimation,
	sidebarButtonAnimation,
} from '@/utils/animation/fade'

import Logo from '../header/Logo'

import styles from './Sidebar.module.scss'
import { MenuData } from './menu.data'
import Menu from './menu/Menu'

const Sidebar: FC = () => {
	const [isShow, setIsShow] = useState(true)
	// if (!isShow) return null
	return (
		<div className={styles.wrapper}>
			<motion.div
				initial={true}
				animate={isShow ? 'open' : 'closed'}
				variants={sidebarAnimation}
			>
				<div className={styles.sidebar}>
					<div className={styles.logo}>
						<Logo />
					</div>
					<div className={styles['btn-wrapper']}>
						<motion.div
							initial={true}
							animate={isShow ? 'left' : 'right'}
							variants={sidebarButtonAnimation}
						>
							<button className={styles.btn} onClick={() => setIsShow(!isShow)}>
								<span>&lt;</span>
							</button>
						</motion.div>
					</div>

					<Menu items={MenuData.items} title={MenuData.title} />
				</div>
			</motion.div>
		</div>
	)
}

export default Sidebar
