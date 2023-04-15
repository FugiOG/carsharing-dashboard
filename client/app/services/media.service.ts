import axios from 'api/interceptor'

export const MediaService = {
	async upload(file: FormData, folder?: string) {
		return axios.post<{ url: string; name: string }>('/media', file, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
