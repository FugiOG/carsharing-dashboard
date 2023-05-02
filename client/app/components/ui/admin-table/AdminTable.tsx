import { FC } from 'react'
import { TRUE } from 'sass'

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
		<div>
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
		</div>
	)
}

export default AdminTable
