import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { ChangeEvent, use, useMemo, useState } from 'react'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { CarService } from '@/services/car.service'
import { UserService } from '@/services/user.service'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSeacrh = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSeacrh],
		() => UserService.getAll(debouncedSeacrh),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						id: user.id,
						editUrl: `/manage/users/edit/${user.id}`,
						items: [
							user.id,
							user.email,
							user.name,
							user.isAdmin ? 'true' : 'false',
						],
					})
				),
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: deleteAsync } = useMutation(
		['delete user'],
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
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
