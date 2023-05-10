import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IUser } from '@/shared/interfaces/user.interface'

import { UserService } from '@/services/user.service'

import { getKeys } from '@/utils/object/getKeys'

import { IUserEditInput } from './user-edit.interface'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { push, query } = useRouter()

	const { updateUserData } = useActions()
	const UserId = String(query.id)
	const { user } = useAuth()

	const { isLoading } = useQuery(
		['User', UserId],
		() => UserService.getById(UserId),
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
		['Update user'],
		(data: IUserEditInput) => UserService.updateUser(UserId, data),
		{
			onSuccess: (data) => {
				push('/manage/users')
				if (user?.id === data.data.id) {
					updateUserData()
				}
			},
		}
	)
	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
