import { ChangeEvent, FC } from 'react'

import MaterialIcon from '../icons/MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search"
				type="text"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
