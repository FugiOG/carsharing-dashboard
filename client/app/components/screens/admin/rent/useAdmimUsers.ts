import { useQuery } from '@tanstack/react-query'

import { IOption } from '@/components/ui/select/select.interface'

import { UserService } from '@/services/user.service'

export const useAdminUsers = () => {
	const userData = useQuery(['List of users'], () => UserService.getAll(), {
		select: ({ data }) =>
			data.map(
				(user): IOption => ({
					value: user.id,
					label: user.email,
				})
			),
	})

	return userData
}
