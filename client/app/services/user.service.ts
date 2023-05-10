import axios from 'api/interceptor'
import Cookies from 'js-cookie'

import {
	IAuthResponse,
	IProfileInput,
	IUser,
	UserDto,
} from '@/shared/interfaces/user.interface'

import { saveToStorage } from './auth/auth.helper'

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

	async getProfileAndUpdateStorage() {
		const response = await axios.get<IUser>('/user/profile')
		const accessToken = Cookies.get('accessToken') || ''
		saveToStorage({ user: response.data, accessToken })
		return response.data
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

	async updateProfile(data: IProfileInput) {
		return axios.put<string>('user/profile', data)
	},

	async updateUser(id: string, data: UserDto) {
		return axios.put<IUser>(`user/${id}`, data)
	},
}
