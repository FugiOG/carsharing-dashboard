import { FC } from 'react'

import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteAsync } = useUsers()
	return (
		<>
			<Meta title="users" />
			<Heading title="Users" />

			<AdminHeader heandleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['User id', 'Email', 'Name', 'Is admin']}
				removeHandler={deleteAsync}
				tableItems={data || []}
			/>
		</>
	)
}

export default UserList
