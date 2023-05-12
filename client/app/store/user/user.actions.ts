import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import {
	IAuthResponse,
	IEmailPassword,
	IUser,
} from '@/shared/interfaces/user.interface'

import { AuthService } from '@/services/auth/auth.service'
import { UserService } from '@/services/user.service'

import { errorToast, successToast } from '@/utils/toast/toasts'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			successToast('Register success')
			return response
		} catch (error) {
			errorToast(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			successToast('Login success')
			return response
		} catch (error) {
			errorToast(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const updateUserData = createAsyncThunk<IUser, void>(
	'user/update',
	async (_, thunkApi) => {
		try {
			const response = await UserService.getProfileAndUpdateStorage()
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error) as any
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})
