import { TypeMaterialIconName } from '@/shared/interfaces/icon.interface'

export interface IStatisticItem {
	id: number
	icon: TypeMaterialIconName
	name: string
	value: number
	isCurrency?: boolean
}
