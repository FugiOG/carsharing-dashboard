import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '../../icons/MaterialIcon'

import styles from './AdminActions.module.scss'
import Tooltip from '../../tooltip/Tooltip'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()
	return (
		<div className={styles.actions}>
			<Tooltip direction='top' content='Edit'>
				<button onClick={() => push(editUrl)}>
					<MaterialIcon name="MdEdit" />
				</button>
			</Tooltip>
			<Tooltip direction='top' content='Delete'>
				<button onClick={removeHandler}>
					<MaterialIcon name="MdClose" />
				</button>
			</Tooltip>
		</div>
	)
}

export default AdminActions
