import { FC } from 'react'

import styles from './NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>404 - Page not found</div>
		</div>
	)
}

export default NotFoundPage
