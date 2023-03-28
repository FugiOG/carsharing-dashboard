import { MotionProps, Variants } from 'framer-motion'

export const FADE_IN: MotionProps = {
	initial: { opacity: 0 },
	whileInView: { opacity: 1 },
	viewport: { once: true },
	transition: { duration: 1.4 },
}

export const menuAnimation: Variants = {
	open: {
		// maxHeight: '100px',
		// translateY: '100px',
		// height: '500px',
		opacity: 1,
		// height: 0,
		// overflow: 'hidden',
		transition: { type: 'keyframes', duration: 0.2 },
	},
	closed: {
		// maxHeight: 0,
		opacity: 0,
		// height: 0,
		// height: '100%',
		// overflow: 'hidden',
		transition: { type: 'keyframes', duration: 0.2 },
	},
}
