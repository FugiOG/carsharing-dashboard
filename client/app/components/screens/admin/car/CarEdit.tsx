import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import UploadField from '@/components/ui/upload-field/UploadField'

// import formStyles from '@/ui/form-elements/admin-form.module.scss'
import Meta from '@/utils/meta/Meta'

import styles from './CarEdit.module.scss'
import { ICarEditInput } from './car-edit.interface'
import { useCarEdit } from './useCarEdit'

const CarEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<ICarEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useCarEdit(setValue)
	return (
		<>
			<Meta title="Edit car" />
			<Heading title="Edit car" />

			<div className={styles['form-wrapper']}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
							<div className={styles.fields}>
								<label>
									<span>Brand</span>
									<Field
										{...register('brand', {
											required: 'Brand is required!',
										})}
										placeholder="Brand"
										error={errors.brand}
									/>
								</label>
								<label>
									<span>Model</span>
									<Field
										{...register('model', {
											required: 'Model is required!',
										})}
										placeholder="Model"
										error={errors.model}
									/>
								</label>
								<label>
									<span>Full price</span>
									<Field
										{...register('fullPrice', {
											required: 'Full price is required!',
										})}
										placeholder="Full price"
										error={errors.fullPrice}
									/>
								</label>

								<label>
									<span>Rental price</span>
									<Field
										{...register('rentalPrice', {
											required: 'Rental price is required!',
										})}
										placeholder="Rental price"
										error={errors.rentalPrice}
									/>
								</label>
								<Controller
									control={control}
									name="imagePath"
									defaultValue=""
									render={({
										field: { onChange, value },
										fieldState: { error },
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error}
											placeholder="Image"
											folder="cars"
											style={{ marginTop: '40px' }}
										/>
									)}
									rules={{
										required: 'Image is required!',
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

export default CarEdit
