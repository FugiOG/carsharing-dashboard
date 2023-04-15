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

	async getById(id: string) {
		return axios.get<IRent>(`/rent/${id}`)
	},

	async create() {
		return axios.post<string>('/rent')
	},

	async updateRent(id: string, body: RentDto) {
		return axios.put<IRent>(`rent/${id}`, body)
	},

	async delete(id: string) {
		return axios.delete(`rent/${id}`)
	},
}
