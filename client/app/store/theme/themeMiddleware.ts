import { Middleware } from '@reduxjs/toolkit'

export const themeMiddleware: Middleware = (store) => (next) => (action) => {
	if (action.type === 'theme/setTheme') {
		localStorage.setItem('theme', action.payload)
	}
	return next(action)
}
