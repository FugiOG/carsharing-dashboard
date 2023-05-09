import { useMutation, useQuery } from '@tanstack/react-query'
import moment from 'moment'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'

import { RentService } from '@/services/rent.service'

import { stringToDate } from '@/utils/date/StringToDate'
import { getKeys } from '@/utils/object/getKeys'

import { IRentEditInput } from './rent-edit.interface'

export const useRentEdit = (setValue: UseFormSetValue<IRentEditInput>) => {
	const { push, query } = useRouter()

	const rentId = String(query.id)

	const { isLoading } = useQuery(
		['rent', rentId],
		() => RentService.getById(rentId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => {
					if (key === 'issueDate' || key === 'returnDate') {
						if (data[key] === null) {
							if (key === 'issueDate') {
								setValue(key as any, moment().format('YYYY-MM-DD'))
							} else {
								setValue(
									key as any,
									moment().add(1, 'day').format('YYYY-MM-DD')
								)
							}
						} else {
							setValue(key as any, moment.unix(data[key]).format('YYYY-MM-DD'))
						}
					} else {
						setValue(key as any, data[key])
					}
				})
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['Update rent'],
		(data: IRentEditInput) => RentService.updateRent(rentId, data),
		{
			onSuccess: () => {
				push('/manage/rents')
			},
		}
	)
	const onSubmit: SubmitHandler<IRentEditInput> = async (data) => {
		data.cost = +data.cost
		data.rating = +data.rating
		data.userId = +data.userId
		data.carId = +data.carId
		data.issueDate = moment(data.issueDate, 'YYYY-MM-DD').unix()
		data.returnDate = moment(data.returnDate, 'YYYY-MM-DD').unix()
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
