import { animate } from 'framer-motion'
import { motion } from 'framer-motion'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

import { FADE_IN } from '@/utils/animation/fade'

interface IAnimatedCounter {
	to: number
}
const AnimatedCounter: FC<IAnimatedCounter> = ({ to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)
	const [inViewRef, inView] = useInView()

	const from = to * 0.7

	useEffect(() => {
		if (!inView) return
		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 1.5,
			onUpdate(value) {
				if (node)
					node.textContent = Number(value.toFixed(1)).toLocaleString('ru-RU')
			},
		})
		return () => controls.stop()
	}, [from, to, inView])
	const setRefs = useCallback(
		(node: HTMLSpanElement) => {
			if (nodeRef) {
				// @ts-ignore
				nodeRef.current = node
			}
			inViewRef(node)
		},
		[inViewRef]
	)
	return <motion.span {...FADE_IN()} ref={setRefs} />
}

export default AnimatedCounter
