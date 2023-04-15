import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

import { CarService } from '@/services/car.service'

import { getKeys } from '@/utils/object/getKeys'

import { ICarEditInput } from './car-edit.interface'

export const useCarEdit = (setValue: UseFormSetValue<ICarEditInput>) => {
	const { push, query } = useRouter()

	const carId = String(query.id)

	const { isLoading } = useQuery(
		['car', carId],
		() => CarService.getById(carId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					setValue(key as any, data[key])
				})
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['Update car'],
		(data: ICarEditInput) => CarService.updateCar(carId, data),
		{
			onSuccess: () => {
				push('/manage/cars')
			},
		}
	)
	const onSubmit: SubmitHandler<ICarEditInput> = async (data) => {
		data.fullPrice = +data.fullPrice
		data.rentalPrice = +data.rentalPrice
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
