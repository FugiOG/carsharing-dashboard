import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { CarService } from '@/services/car.service'

export const useCars = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSeacrh = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['car list', debouncedSeacrh],
		() => CarService.getAll(debouncedSeacrh),
		{
			select: ({ data }) =>
				data.map(
					(car): ITableItem => ({
						id: car.id,
						editUrl: `/manage/cars/edit/${car.id}`,
						items: [
							car.brand,
							car.fullPrice.toLocaleString('ru-RU', {
								style: 'currency',
								currency: 'RUB',
							}),
							car.rentalPrice.toLocaleString('ru-RU', {
								style: 'currency',
								currency: 'RUB',
							}),
						],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		['create car'],
		() => CarService.createCar(),
		{
			onSuccess: ({ data: id }) => {
				push(`/manage/actor/edit/${id}`)
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete car'],
		(carId: string) => CarService.deleteCar(carId),
		{
			onSuccess: () => {
				queryData.refetch()
			},
		}
	)
	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
