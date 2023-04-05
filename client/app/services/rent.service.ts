import axios from 'api/interceptor'

import { IRent, RentDto } from '@/shared/interfaces/rent.interface'

export const RentService = {
	async getAll(searchTerm?: string) {
		return axios.get<IRent[]>('/rent', {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async create(data: RentDto) {
		return axios.post<string>('/rent', data)
	},

	async delete(id: string) {
		return axios.delete(`rent/${id}`)
	},
}
