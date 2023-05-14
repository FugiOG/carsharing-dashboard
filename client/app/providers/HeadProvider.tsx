import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import React, { FC, PropsWithChildren } from 'react'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={'#6068ec'}
				startPosition={0.3}
				height={5}
				stopDelayMs={200}
				options={{ showSpinner: false }}
			/>
			{children}
		</>
	)
}

export default HeadProvider
