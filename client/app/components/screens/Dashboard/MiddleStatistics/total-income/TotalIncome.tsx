import { FC } from 'react'

import MaterialIcon from '@/components/ui/icons/MaterialIcon'

import styles from './TotalIncome.module.scss'

const TotalIncome: FC<{ totalIncome: number }> = ({ totalIncome }) => {
	return (
		<div className={styles.income}>
			<div className={styles.icon}>
				<MaterialIcon name="MdQueryStats" />
			</div>
			<div className={styles.name}>Total income</div>
			<div className={styles.total}>{totalIncome}</div>
		</div>
	)
}

export default TotalIncome
