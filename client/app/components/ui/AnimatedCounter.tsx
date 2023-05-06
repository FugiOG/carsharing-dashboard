import { animate } from 'framer-motion'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface IAnimatedCounter {
	from?: number
	to: number
}
const AnimatedCounter: FC<IAnimatedCounter> = ({ from = 0, to }) => {
	const nodeRef = useRef<HTMLSpanElement>(null)
	const [inViewRef, inView] = useInView()
	useEffect(() => {
		if (!inView) return
		const node = nodeRef.current

		const controls = animate(from, to, {
			duration: 2,
			onUpdate(value) {
				if (node) node.textContent = value.toLocaleString('ru-RU')
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
	return <span ref={setRefs} />
}

export default AnimatedCounter
