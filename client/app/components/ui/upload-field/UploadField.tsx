import cn from 'classnames'
import Image from 'next/image'
import { CSSProperties, FC } from 'react'
import { FieldError } from 'react-hook-form'

import SkeletonLoader from '../SkeletonLoader'

import styles from './UploadField.module.scss'
import { useUpload } from './useUpload'

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

const UploadField: FC<IUploadField> = ({
	folder,
	value,
	onChange,
	error,
	isNoImage = false,
	placeholder,
	style,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)
	return (
		<div className={styles.uploadField} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image alt="" src={value} layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
