import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'

import { IProfileInput } from '@/shared/interfaces/user.interface'

import { UserService } from '@/services/user.service'

import { errorToast, successToast } from '@/utils/toast/toasts'

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
			onError: (error) => {
				errorToast(error)
			},
			onSuccess() {
				updateUserData()
				successToast('Profile successfully updated')
			},
		}
	)
	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
