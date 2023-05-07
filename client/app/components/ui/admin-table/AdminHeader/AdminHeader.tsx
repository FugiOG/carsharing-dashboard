import { motion } from 'framer-motion'
import { ChangeEvent, FC } from 'react'

import { FADE_IN } from '@/utils/animation/fade'

import SearchField from '../../search-field/SearchField'

import AdminCreateButton from './AdminCreateButton'
import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	heandleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	heandleSearch,
	searchTerm,
	onClick,
}) => {
	return (
		<motion.div {...FADE_IN(0.5, 1)} className={styles.header}>
			<SearchField handleSearch={heandleSearch} searchTerm={searchTerm} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</motion.div>
	)
}

export default AdminHeader
