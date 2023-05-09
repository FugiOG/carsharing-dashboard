import { FC } from 'react'

import AnimatedCounter from '@/components/ui/AnimatedCounter'
import MaterialIcon from '@/components/ui/icons/MaterialIcon'
import ProgressBar from '@/components/ui/progress-bar/ProgressBar'

import styles from './TotalIncome.module.scss'

const TotalIncome: FC<{ totalIncome: number }> = ({ totalIncome }) => {
	return (
		<div className={styles.income}>
			<ProgressBar percent={Math.round((totalIncome * 100) / 500000)} />
			<div className={styles.info}>
				<div className={styles.icon}>
					<MaterialIcon name="MdQueryStats" />
				</div>
				<div className={styles.name}>Total income</div>
				<div className={styles.total}>
					₽ <AnimatedCounter to={totalIncome} />
				</div>
			</div>
		</div>
	)
}

export default TotalIncome
