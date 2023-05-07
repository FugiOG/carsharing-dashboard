import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

import styles from './Heading.module.scss'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<motion.h1 {...FADE_IN(0.5, 0.7)} className={cn(styles.heading, className)}>
			{title}
		</motion.h1>
	)
}

export default Heading
