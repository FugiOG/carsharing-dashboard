import { FC } from 'react'

import Layout from '@/components/ui/Layout/Layout'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-table/AdminTable'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useCars } from './useCars'

const CarList: FC = () => {
	const {
		handleSearch,
		searchTerm,
		isLoading,
		data,
		deleteAsync,
		createAsync,
	} = useCars()
	return (
		<>
			<Meta title="Cars" />
			<Heading title="Cars" />

			<AdminHeader
				heandleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				headerItems={['Brand', 'Full price', 'Rental price']}
				removeHandler={deleteAsync}
				tableItems={data || []}
			/>
		</>
	)
}

export default CarList
