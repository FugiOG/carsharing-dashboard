import cn from 'classnames'
import Image from 'next/image'
import { CSSProperties, FC, MouseEvent, useRef } from 'react'
import { FieldError } from 'react-hook-form'

import SkeletonLoader from '../../SkeletonLoader'
import MaterialIcon from '../../icons/MaterialIcon'
import { useUpload } from '../useUpload'

import styles from './UploadAvatar.module.scss'

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
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
	style,
}) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { isLoading, uploadFile } = useUpload(onChange, folder)
	const handlePick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		inputRef.current?.click()
	}
	return (
		<div className={styles.uploadField} style={style}>
			<div className={styles.uploadFlex}>
				<input
					type="file"
					accept=".jpg,.jpeg,.png"
					onChange={uploadFile}
					className={styles.hidden}
					ref={inputRef}
				/>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader
								count={1}
								style={{
									width: '3.5rem',
									height: '3.5rem',
								}}
								borderRadius={50}
							/>
						) : (
							value && (
								<button
									onClick={(e) => {
										console.log('ffffff')
										handlePick(e)
									}}
								>
									<div className={styles.plus}>
										<MaterialIcon name="MdOutlineCloudUpload" />
									</div>
									<Image
										alt=""
										src={value}
										fill
										unoptimized
										draggable={false}
									/>
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
