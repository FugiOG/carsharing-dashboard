import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = (rest) => {
	return (
		<SkeletonTheme baseColor="#CCCDCE" highlightColor="#E7DFEA">
			<p>
				<Skeleton {...rest} />
			</p>
		</SkeletonTheme>
	)
}

export default SkeletonLoader
