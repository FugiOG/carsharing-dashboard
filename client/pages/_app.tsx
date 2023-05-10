import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import MainProvider from 'providers/MainProvider'

import { TypeComponentAuthFields } from '@/shared/interfaces/auth.interface'

import '@/styles/globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<main className={montserrat.className}>
			<MainProvider Component={Component}>
				<Component {...pageProps} />
			</MainProvider>
		</main>
	)
}
