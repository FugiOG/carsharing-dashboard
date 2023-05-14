import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from '@/components/ui/Layout/Layout'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import { store } from '@/store/store'

import HeadProvider from './HeadProvider'
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
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Layout>
						<AuthProvider Component={Component}>{children}</AuthProvider>
					</Layout>
					<ToastContainer
						position="top-right"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
