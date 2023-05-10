import { FC, PropsWithChildren } from 'react'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import styles from './Layout.module.scss'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div>
				<Header />
				<div style={{ display: 'flex', height: '100vh' }}>
					<Sidebar />
					<main className={styles['scrollable-container']}>{children}</main>
				</div>
			</div>
		</>
	)
}

export default Layout
