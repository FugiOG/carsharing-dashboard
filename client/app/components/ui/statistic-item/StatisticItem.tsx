import cn from 'classnames'
import { FC } from 'react'

import MaterialIcon from '../icons/MaterialIcon'

import styles from './StatisticItem.module.scss'
import { IStatisticItem } from './statistic-item.interface'

const StatisticItem: FC<IStatisticItem> = (item) => {
	return (
		<div className={cn(styles.item, styles[`color_${item.id}`])}>
			<div className={styles.icon}>
				<MaterialIcon name={item.icon} />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>{item.value.toLocaleString('ru-RU')}</div>
		</div>
	)
}

export default StatisticItem
