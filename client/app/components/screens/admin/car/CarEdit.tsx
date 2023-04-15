import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import UploadField from '@/components/ui/upload-field/UploadField'

// import formStyles from '@/ui/form-elements/admin-form.module.scss'
import Meta from '@/utils/meta/Meta'

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

			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<label>
								Brand
								<Field
									{...register('brand', {
										required: 'Brand is required!',
									})}
									placeholder="Brand"
									error={errors.brand}
									style={{ width: '31%' }}
								/>
							</label>
							<label>
								Full price
								<Field
									{...register('fullPrice', {
										required: 'Full price is required!',
									})}
									placeholder="Full price"
									error={errors.fullPrice}
									style={{ width: '31%' }}
								/>
							</label>

							{/* <SlugField
								register={register}
								error={errors.slug}
								generate={() => {
                                    setValue('slug', generateSlug(getValues('name')))
								}}
							/> */}
						</div>
						<div>
							<label>
								Rental price
								<Field
									{...register('rentalPrice', {
										required: 'Rental price is required!',
									})}
									placeholder="Rental price"
									error={errors.rentalPrice}
									style={{ width: '31%' }}
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
									/>
								)}
								rules={{
									required: 'Image is required!',
								}}
							/>
						</div>

						{/* <Controller
							control={control}
							name="photo"
							defaultValue=""
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									placeholder="Photo"
									folder="actors"
								/>
							)}
							rules={{
								required: 'Photo is required!',
							}}
						/> */}
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	)
}

export default CarEdit
