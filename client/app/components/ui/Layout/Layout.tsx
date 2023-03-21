import { FC, PropsWithChildren } from 'react'

import Meta from '@/utils/meta/Meta'
import { IMeta } from '@/utils/meta/meta.interface'

import Header from './header/Header'

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}

export default Layout
