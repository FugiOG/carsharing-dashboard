import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import UploadField from '@/components/ui/upload-field/UploadField'

// import formStyles from '@/ui/form-elements/admin-form.module.scss'
import Meta from '@/utils/meta/Meta'

import { validEmail } from '../../auth/auth.constants'

import { Cities } from './Cities'
import styles from './UserEdit.module.scss'
import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})
const UserEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IUserEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useUserEdit(setValue)
	return (
		<>
			<Meta title="Edit User" />
			<Heading title="Edit User" />

			<div className={styles['form-wrapper']}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
							<div className={styles.fields}>
								<label>
									<span>Email</span>
									<Field
										{...register('email', {
											required: 'Email is required!',
											pattern: {
												value: validEmail,
												message: 'Please enter a valid email addres',
											},
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
							<div className={styles.controllers}>
								<div className={styles.city}>
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
								<Controller
									control={control}
									name="isAdmin"
									render={({ field }) => (
										<button
											onClick={(e) => {
												e.preventDefault()
												field.onChange(!field.value)
											}}
											className={styles.adminBtn}
										>
											{field.value ? 'Make it regular user' : 'Make it admin'}
										</button>
									)}
								/>
							</div>
							<Controller
								control={control}
								name="avatarPath"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<UploadField
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

							<Button className={styles.updateBtn}>Update</Button>
						</>
					)}
				</form>
			</div>
		</>
	)
}

export default UserEdit
