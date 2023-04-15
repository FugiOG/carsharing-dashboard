import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'
import UploadField from '@/components/ui/upload-field/UploadField'

import Meta from '@/utils/meta/Meta'

import { IRentEditInput } from './rent-edit.interface'
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

	const { isLoading, onSubmit } = useRentEdit(setValue)
	return (
		<>
			<Meta title="Edit rent" />
			<Heading title="Edit rent" />

			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<label>
								Cost
								<Field
									{...register('cost', {
										required: 'Cost is required!',
									})}
									placeholder="Cost"
									error={errors.cost}
									style={{ width: '31%' }}
								/>
							</label>
							<label>
								Issue date
								<Field
									{...register('issueDate', {
										required: 'Issue date is required!',
									})}
									placeholder="Issue date"
									error={errors.issueDate}
									style={{ width: '31%' }}
									type="date"
								/>
							</label>

							<label>
								Return date
								<Field
									{...register('returnDate', {
										required: 'Return date is required!',
									})}
									placeholder="Return date"
									error={errors.returnDate}
									style={{ width: '31%' }}
									type="date"
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
								Rating
								<Field
									{...register('rating', {
										required: 'Rating is required!',
									})}
									placeholder="Rating"
									error={errors.rating}
									style={{ width: '31%' }}
									type="number"
									min={1}
									max={5}
									defaultValue={5}
								/>
							</label>
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
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	)
}

export default RentEdit
