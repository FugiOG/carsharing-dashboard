import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useTypedSelector } from '@/hooks/useTypedSelector'

const SkeletonLoader: FC<SkeletonProps> = (rest) => {
	const { themeValue } = useTypedSelector((state) => state.theme)
	return (
		<SkeletonTheme
			baseColor={themeValue === 'dark' ? '#5B5C5C' : '#CCCDCE'}
			highlightColor={themeValue === 'dark' ? '#9E98A0' : '#E7DFEA'}
		>
			<p>
				<Skeleton borderRadius={20} {...rest} />
			</p>
		</SkeletonTheme>
	)
}

export default SkeletonLoader
