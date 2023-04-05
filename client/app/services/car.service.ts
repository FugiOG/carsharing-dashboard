import { API_URL } from 'api/interceptor'
import axios from 'api/interceptor'

import { CarDto, ICar } from '@/shared/interfaces/car.interface'

export const CarService = {
	async getAll(searchTerm?: string) {
		return axios.get<ICar[]>(`/car`, {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(id: string) {
		return axios.get<ICar>(`/car/${id}`)
	},

	async createCar() {
		return axios.post<string>('/car')
	},

	async updateCar(id: string, body: CarDto) {
		return axios.put<ICar>(`car/${id}`, body)
	},

	async deleteCar(id: string) {
		return axios.delete(`/car/${id}`)
	},
}
