import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReducer'
import { themeMiddleware } from './theme/themeMiddleware'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(themeMiddleware),
})

export type TaypeRootState = ReturnType<typeof store.getState>
