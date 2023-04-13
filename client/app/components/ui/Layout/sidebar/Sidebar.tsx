import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FC, memo, useEffect, useState } from 'react'

import {
	sidebarAnimation,
	sidebarButtonAnimation,
} from '@/utils/animation/fade'

import MaterialIcon from '../../icons/MaterialIcon'
import Logo from '../header/Logo'

import styles from './Sidebar.module.scss'
import { MenuData } from './menu.data'
import Menu from './menu/Menu'

const DynamicOtherMenu = dynamic(() => import('./other/OtherMenu'), {
	ssr: false,
})

const Sidebar: FC = () => {
	const [isShow, setIsShow] = useState(true)
	useEffect(() => {
		console.log('isShow')
		return () => console.log('unmount')
	}, [isShow])
	// if (!isShow) return null
	return (
		<motion.div
			initial={true}
			animate={isShow ? 'open' : 'closed'}
			variants={sidebarAnimation}
		>
			<div className={styles.wrapper}>
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
								<MaterialIcon name="MdKeyboardArrowLeft" />
							</button>
						</motion.div>
					</div>

					<Menu items={MenuData.items} title={MenuData.title} />
					<DynamicOtherMenu />
				</div>
			</div>
		</motion.div>
	)
}

export default Sidebar
