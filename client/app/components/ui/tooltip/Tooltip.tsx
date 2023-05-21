import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC, PropsWithChildren, ReactNode, useState } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

import styles from './Tooltip.module.scss'

type DirectionType = 'left' | 'top' | 'right' | 'bottom'

const Tooltip: FC<
	PropsWithChildren<{
		delay?: number
		direction: DirectionType
		content: ReactNode | string
	}>
> = ({ content, direction, delay, children }) => {
	let timeout: NodeJS.Timeout | undefined
	const [active, setActive] = useState(false)

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true)
		}, delay || 200)
	}

	const hideTip = () => {
		clearInterval(timeout)
		setActive(false)
	}
	return (
		<div
			className={styles.wrapper}
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{children}
			{active && (
				<motion.div
					{...FADE_IN(0.3)}
					className={cn(styles.tooltip, styles[direction])}
				>
					{content}
				</motion.div>
			)}
		</div>
	)
}

export default Tooltip
