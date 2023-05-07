import { MotionProps } from 'framer-motion'

export const useProgressAnimate = (percent: number) => {
	const variants: MotionProps = {
		initial: {
			rotate: '45deg',
		},
		whileInView: {
			rotate: `${45 + percent * 1.8}deg`,
			transition: { type: 'easyInOut', duration: 1.5 },
		},
		viewport: { once: true },
	}
	return { variants }
}
