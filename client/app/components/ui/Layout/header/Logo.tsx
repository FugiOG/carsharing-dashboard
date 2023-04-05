import { FC } from 'react'

import styles from './Header.module.scss'

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<span>Car</span>sharing
		</div>
	)
}

export default Logo
