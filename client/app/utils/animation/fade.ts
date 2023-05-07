import { MotionProps, Variants } from 'framer-motion'

// export const FADE_IN: MotionProps = {
// 	initial: { opacity: 0 },
// 	whileInView: { opacity: 1 },
// 	viewport: { once: true },
// 	transition: { duration: 1 },
// }

export const FADE_IN = (
	duration: number = 1,
	opacity: number = 1,
	delay: number = 0
): MotionProps => ({
	initial: { opacity: 0 },
	whileInView: { opacity },
	viewport: { once: true },
	transition: { duration, delay },
})

export const menuAnimation: Variants = {
	open: {
		// maxHeight: '100px',
		translateX: 0,
		// height: '500px',
		opacity: 1,
		// height: 0,
		// overflow: 'hidden',
		transition: { type: 'keyframes', duration: 0.2 },
	},
	closed: {
		// maxHeight: 0,
		opacity: 0,
		translateX: '213px',
		// height: 0,
		// height: '100%',
		// overflow: 'hidden',
		transition: { type: 'keyframes', duration: 0.2 },
	},
}

export const sidebarAnimation: Variants = {
	open: {
		marginLeft: 0,
		transition: { type: 'keyframes', duration: 0.2 },
	},
	closed: {
		marginLeft: '-232px',

		transition: { type: 'keyframes', duration: 0.2 },
	},
}

export const sidebarButtonAnimation: Variants = {
	left: {
		transform: 'rotate(0) translate(0)',
		// transformOrigin: 'center',

		transition: { type: 'keyframes', duration: 0.2 },
	},
	right: {
		transform: 'rotate(180deg) translate(-50%)',
		// transformOrigin: 'center',
		transition: { type: 'keyframes', duration: 0.2 },
	},
}
