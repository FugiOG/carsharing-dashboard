import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

import { MediaService } from '@/services/media.service'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUpload: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync } = useMutation(
		['upload file'],
		(data: FormData) => MediaService.upload(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data.url)
			},
		}
	)
	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			if (e.target.value === '') return
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return
			const formData = new FormData()
			formData.append('media', files[0])

			await mutateAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
