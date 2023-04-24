import cn from 'classnames'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#E7E9EA"
			highlightColor="#CECFD0"
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader
