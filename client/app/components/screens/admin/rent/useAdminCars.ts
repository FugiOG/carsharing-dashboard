import { useQuery } from '@tanstack/react-query'

import { IOption } from '@/components/ui/select/select.interface'

import { CarService } from '@/services/car.service'

export const useAdminCars = () => {
	const carData = useQuery(['List of cars'], () => CarService.getAll(), {
		select: ({ data }) =>
			data.map(
				(car): IOption => ({
					value: car.id,
					label: `${car.brand} ${car.model} | ${car.id}`,
				})
			),
	})

	return carData
}
