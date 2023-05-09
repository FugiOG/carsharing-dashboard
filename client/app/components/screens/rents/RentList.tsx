import { FC } from 'react'

import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useRents } from './useRents'

const RentList: FC = () => {
	const {
		handleSearch,
		searchTerm,
		isLoading,
		data,
		deleteAsync,
		createAsync,
	} = useRents()
	return (
		<>
			<Meta title="Rents" />
			<Heading title="Rents" />

			<AdminHeader
				heandleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				headerItems={[
					'Rent id',
					'Car',
					'User email',
					'Cost',
					'Rating',
					'Return date',
				]}
				removeHandler={deleteAsync}
				tableItems={data || []}
			/>
		</>
	)
}

export default RentList
