import { createSlice } from '@reduxjs/toolkit'

import { IInitialState } from '@/shared/interfaces/user.interface'

import { getStoreLocal } from '@/utils/local-storage'

import { login, logout, register, updateUserData } from './user.actions'

const initialState: IInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(updateUserData.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateUserData.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
			.addCase(updateUserData.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
	},
})

export const { reducer } = userSlice
