import cn from 'classnames'
import Image from 'next/image'
import { CSSProperties, FC, useRef } from 'react'
import { FieldError } from 'react-hook-form'

import SkeletonLoader from '../../SkeletonLoader'
import { useUpload } from '../useUpload'

import styles from './UploadAvatar.module.scss'

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
	const inputRef = useRef<HTMLInputElement>(null)
	const { isLoading, uploadFile } = useUpload(onChange, folder)
	const handlePick = () => {
		inputRef.current?.click()
	}
	return (
		<div className={styles.uploadField} style={style}>
			<div className={styles.uploadFlex}>
				<input
					type="file"
					onChange={uploadFile}
					className={styles.hidden}
					ref={inputRef}
				/>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader
								count={1}
								style={{ width: '100%', height: '100%' }}
							/>
						) : (
							value && (
								<button
									onClick={() => {
										console.log('ffffff')
										handlePick()
									}}
								>
									<Image alt="" src={value} fill unoptimized />
								</button>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
