import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'

import { IProfileInput } from '@/shared/interfaces/user.interface'

import { UserService } from '@/services/user.service'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { updateUserData } = useActions()
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
			setValue('name', data.name)
			setValue('avatarPath', data.avatarPath)
			setValue('city', data.city)
		},
	})

	const { mutateAsync } = useMutation(
		['Update profile'],
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess() {
				updateUserData()
			},
		}
	)
	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
