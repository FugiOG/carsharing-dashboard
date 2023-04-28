import moment from 'moment'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './RentEdit.module.scss'
import { IRentEditInput } from './rent-edit.interface'
import { useAdminUsers } from './useAdmimUsers'
import { useAdminCars } from './useAdminCars'
import { useRentEdit } from './useRentEdit'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const RentEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IRentEditInput>({
		mode: 'onChange',
	})

	const { data: cars, isLoading: isCarsLoading } = useAdminCars()
	const { data: users, isLoading: isUsersLoading } = useAdminUsers()

	const { isLoading, onSubmit } = useRentEdit(setValue)
	return (
		<>
			<Meta title="Edit rent" />
			<Heading title="Edit rent" />
			<div className={styles['form-wrapper']}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
							<div className={styles.fields}>
								<label>
									<span>Cost</span>
									<Field
										{...register('cost', {
											required: 'Cost is required!',
										})}
										placeholder="Cost"
										error={errors.cost}
									/>
								</label>
								<label>
									<span>Issue date</span>
									<Field
										{...register('issueDate', {
											required: 'Issue date is required!',
										})}
										placeholder="Issue date"
										error={errors.issueDate}
										type="date"
									/>
								</label>

								<label>
									<span>Return date</span>
									<Field
										{...register('returnDate', {
											required: 'Return date is required!',
										})}
										placeholder="Return date"
										error={errors.returnDate}
										type="date"
									/>
								</label>

								<label>
									<span>Rating</span>
									<Field
										{...register('rating', {
											required: 'Rating is required!',
										})}
										placeholder="Rating"
										error={errors.rating}
										type="number"
										step={0.1}
										min={1.0}
										max={5.0}
										defaultValue={5.0}
									/>
								</label>
							</div>
							<div className={styles.select}>
								<Controller
									control={control}
									name="carId"
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											field={field}
											options={cars || []}
											isLoading={isCarsLoading}
											error={error}
											placeholder="Car"
										/>
									)}
									rules={{
										required: 'Please select at least one car!',
									}}
								/>
								<Controller
									control={control}
									name="userId"
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											field={field}
											options={users || []}
											isLoading={isUsersLoading}
											error={error}
											placeholder="User"
										/>
									)}
									rules={{
										required: 'Please select at least one user!',
									}}
								/>
							</div>
							<Button className={styles.updateBtn}>Update</Button>
						</>
					)}
				</form>
			</div>
		</>
	)
}

export default RentEdit
