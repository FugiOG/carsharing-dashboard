import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage'

const getInitialValue = () => {
	let value: string | null = null

	if (typeof window !== 'undefined') {
		const theme = `${window?.localStorage?.getItem('theme')}`
		if (['light', 'dark'].includes(theme)) value = theme
		else {
			const userMedia = window.matchMedia('(prefers-color-scheme: light)')
			if (userMedia.matches) value = 'light'
			else value = 'dark'
		}
	}

	return {
		themeValue: value,
	}
}

const initialState: { themeValue: string | null } | null = getInitialValue()

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<string>) => {
			state.themeValue = action.payload
		},
	},
})

export const { setTheme } = themeSlice.actions
export const { reducer } = themeSlice
