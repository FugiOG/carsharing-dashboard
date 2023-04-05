import axios from 'api/interceptor'

import { IUser, UserDto } from '@/shared/interfaces/user.interface'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>('/user', {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getProfile() {
		return axios.get<IUser>('/user/profile')
	},

	async getById(id?: string) {
		return axios.get<IUser>(`/user/${id}`)
	},

	async deleteUser(id: string) {
		return axios.delete(`user/${id}`)
	},

	async updateProfile(data: UserDto) {
		return axios.put<string>('user/profile', data)
	},

	async updateUser(id: string, data: UserDto) {
		return axios.put<string>(`user/${id}`, data)
	},
}
