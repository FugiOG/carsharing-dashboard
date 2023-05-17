import cn from 'classnames'
import React, { FC, HTMLAttributes, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './Theme.module.scss'

const Theme: FC<HTMLAttributes<HTMLInputElement>> = ({
	className,
	...rest
}) => {
	const { themeValue } = useTypedSelector((state) => state.theme)
	const { setTheme } = useActions()

	useEffect(() => {
		document.documentElement.dataset.theme = themeValue || ''
	}, [themeValue])

	const handleChange = () => {
		const next = themeValue === 'dark' ? 'light' : 'dark'
		setTheme(next)
	}

	return (
		<input
			type="checkbox"
			checked={themeValue === 'light'}
			onChange={handleChange}
			className={cn(
				className,
				styles.themeSwitcher,
				themeValue === 'dark' ? styles.dark : styles.light
			)}
			{...rest}
		/>
	)
}

export default Theme
