import axios from 'axios'
import Cookies from 'js-cookie'

export const API_URL = `${process.env.APP_URL}/api`
export const APP_SERVER_URL = `${process.env.APP_SERVER_URL}`
const IS_PRODUCTION = process.env.APP_ENV === 'production'
export const getContentType = () => {
	return {
		'Content-Type': 'application/json',
	}
}

export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})

const instance = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

export default instance
