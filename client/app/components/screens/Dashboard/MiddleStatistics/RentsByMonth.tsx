import { FC } from 'react'

import { IRent } from '@/shared/interfaces/rent.interface'

import { KeysInStat } from '@/services/statistics/statistics.interface'

const RentsByMonth: FC<{ rents: { (key: KeysInStat): IRent[] } }> = ({
	rents,
}) => {
	return <div>RentsByMonth</div>
}

export default RentsByMonth
