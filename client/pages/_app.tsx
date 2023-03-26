import type { AppProps } from 'next/app'
import AuthProvider from 'providers/auth-provider/AuthProvider'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}
