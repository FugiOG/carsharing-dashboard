import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '@/components/ui/Layout/Layout'

import styles from '@/styles/Home.module.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] })

export default function Home() {
	return (
		<div className={montserrat.className}>
			<Layout title="Carsharing">Главная</Layout>
		</div>
	)
}
