import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { Provider } from 'react-redux'

import Layout from '@/components/ui/Layout/Layout'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import { store } from '@/store/store'

import AuthProvider from './auth-provider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<AuthProvider Component={Component}>{children}</AuthProvider>
				</Layout>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
