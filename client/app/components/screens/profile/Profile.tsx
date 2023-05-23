import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import UploadField from '@/components/ui/upload-field/UploadField'
import UploadAvatar from '@/components/ui/upload-field/upload-avatar/UploadAvatar'

import { IProfileInput } from '@/shared/interfaces/user.interface'

import { FADE_IN } from '@/utils/animation/fade'
import Meta from '@/utils/meta/Meta'

import { Cities } from '../admin/user/Cities'
import { validEmail } from '../auth/auth.constants'

import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})
const Profile: FC = () => {
	const {
		handleSubmit,
		register,
		formState,
		setValue,
		formState: { errors },
		control,
		reset,
	} = useForm<IProfileInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useProfile(setValue)
	useEffect(() => {
		console.log('form mount')
		return () => console.log('form UNmount')
	}, [])
	return (
		<>
			<Meta title="Edit profile" />
			<div className={styles['form-wrapper']}>
				{isLoading ? (
					<SkeletonLoader count={1} />
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
									<span>Name</span>
									<Field
										{...register('name', {
											required: 'Name is required!',
										})}
										placeholder="Name"
										className={styles.updInput}
										error={errors.name}
									/>
								</label>
								<label>
									<span>Email</span>
									<Field
										{...register('email', {
											required: 'Email is required',
											pattern: {
												value: validEmail,
												message: 'Please enter a valid email addres',
											},
										})}
										placeholder="Email"
										className={styles.updInput}
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
										className={styles.updInput}
										error={errors.password}
									/>
								</label>
							</div>
							<div className={styles.select}>
								<Controller
									control={control}
									name="city"
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											field={field}
											options={Cities || []}
											error={error}
											placeholder="City"
										/>
									)}
									rules={{
										required: 'Please select at least one city!',
									}}
								/>
							</div>

							<Button className={styles.updateBtn}>Update</Button>
						</>
					</form>
				)}
			</div>
		</>
	)
}

export default Profile
