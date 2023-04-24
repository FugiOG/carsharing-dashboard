import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { RentService } from '@/services/rent.service'

export const useRents = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSeacrh = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['rent list', debouncedSeacrh],
		() => RentService.getAll(debouncedSeacrh),
		{
			select: ({ data }) =>
				data.map(
					(rent): ITableItem => ({
						id: rent.id,
						editUrl: `/manage/rents/edit/${rent.id}`,
						items: [
							String(rent.id),
							`${rent.car?.brand} | id: ${rent.carId}`,
							rent.user?.email,
							rent.cost?.toLocaleString('ru-RU', {
								style: 'currency',
								currency: 'RUB',
							}),
							`${rent?.rating}`,
							String(rent?.returnDate),
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
		['create rent'],
		() => RentService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/manage/rents/edit/${id}`)
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		['delete rent'],
		(rentId: string) => RentService.delete(rentId),
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
