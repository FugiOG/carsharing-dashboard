import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import UploadField from '@/components/ui/upload-field/UploadField'
import UploadAvatar from '@/components/ui/upload-field/upload-avatar/UploadAvatar'

import { IProfileInput } from '@/shared/interfaces/user.interface'

import Meta from '@/utils/meta/Meta'

import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const {
		handleSubmit,
		register,
		formState,
		setValue,
		formState: { errors },
		control,
	} = useForm<IProfileInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useProfile(setValue)
	return (
		<>
			<Meta title="Edit profile" />
			<div className={styles['form-wrapper']}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{isLoading ? (
						<SkeletonLoader count={1} />
					) : (
						<>
							<Controller
								control={control}
								name="avatarPath"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<UploadAvatar
										onChange={onChange}
										value={value}
										error={error}
										placeholder="Avatar"
										folder="UsersAvatar"
										style={{ marginTop: '40px' }}
									/>
								)}
								rules={{
									required: 'Image is required!',
								}}
							/>
							<div className={styles.fields}>
								<label>
									<span>Email</span>
									<Field
										{...register('email', {
											required: 'Email is required!',
										})}
										placeholder="Email"
										error={errors.email}
									/>
								</label>
								<label>
									<span>Password</span>
									<Field
										{...register('password', {
											minLength: {
												value: 6,
												message: 'Min length shoud more 6 symbols ',
											},
										})}
										placeholder="Password"
										error={errors.password}
									/>
								</label>
							</div>

							<Button className={styles.updateBtn}>Update</Button>
						</>
					)}
				</form>
			</div>
		</>
	)
}

export default Profile
