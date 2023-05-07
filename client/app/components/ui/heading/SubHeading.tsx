import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

import styles from './Heading.module.scss'

interface ISubHeading {
	title: string
	className?: string
}

const SubHeading: FC<ISubHeading> = ({ title, className }) => {
	return (
		<motion.h2
			{...FADE_IN(1.3, 0.7)}
			className={cn(styles.subHeading, className)}
		>
			{title}
		</motion.h2>
	)
}

export default SubHeading
