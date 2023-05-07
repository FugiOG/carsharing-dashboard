import { motion } from 'framer-motion'
import { FC } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

import SkeletonLoader from '../SkeletonLoader'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'

export interface IAdminTable {
	tableItems: ITableItem[]
	headerItems: string[]
	isLoading: boolean
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<motion.div {...FADE_IN(0.5, 1, 0.3)}>
			<AdminTableHeader tabelItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader
					count={1}
					height={48}
					className="mt-4"
					style={{ marginTop: '20px' }}
				/>
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem.id}
						removeHandler={() => removeHandler(tableItem.id as string)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</motion.div>
	)
}

export default AdminTable
