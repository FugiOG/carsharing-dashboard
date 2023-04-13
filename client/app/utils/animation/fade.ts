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
		// maxHeight: '100px',
		// translateY: '100px',
		// translateX: 0,
		marginLeft: 0,
		// width: '100%',
		// zIndex: 30,
		// height: '500px',
		// opacity: 1,
		// height: 0,
		// overflow: 'hidden',
		transition: { type: 'keyframes', duration: 0.2 },
	},
	closed: {
		// maxHeight: 0,
		// opacity: 0,
		// width: '10px',
		// translateX: '-233px',
		marginLeft: '-232px',
		// zIndex: 40,
		// height: 0,
		// height: '100%',
		// overflow: 'hidden',
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
