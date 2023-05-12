import { errorCatch } from 'api/api.helpers'
import { toast } from 'react-toastify'

import ToastMsg from './ToastMsg'

export const errorToast = (error: any) => {
	const message = errorCatch(error)
	toast.error(ToastMsg(message, 'Error request'), {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: 'light',
	})
	throw message
}
export const successToast = (msg: string) =>
	toast.success(ToastMsg(msg, 'Successful request'), {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		theme: 'light',
	})
