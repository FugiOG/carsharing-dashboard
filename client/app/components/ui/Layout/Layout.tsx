import { FC, PropsWithChildren } from 'react'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div>
				<Header />
				<div style={{ display: 'flex', height: '100vh' }}>
					<Sidebar />
					<main
						style={{
							padding: '16px',
							marginTop: '76px',
							marginLeft: '236px',
							width: '100%',
							zIndex: 0,
						}}
					>
						{children}
					</main>
				</div>
			</div>
		</>
	)
}

export default Layout
