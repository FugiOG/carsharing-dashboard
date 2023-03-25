import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'
import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(className, styles.button)} {...rest}>
			{children}
		</button>
	)
}

export default Button
