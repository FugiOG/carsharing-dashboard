import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import AuthProvider from 'providers/auth-provider/AuthProvider'
import { Fragment } from 'react'

import '@/styles/globals.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={montserrat.className}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</QueryClientProvider>
		</main>
	)
}
