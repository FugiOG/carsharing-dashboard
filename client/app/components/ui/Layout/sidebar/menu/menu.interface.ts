import { TypeMaterialIconName } from '@/shared/interfaces/icon.interface'

export interface IMenu {
	title: string
	items: IMenuItem[]
}

export interface IMenuItem {
	title: string
	icon: TypeMaterialIconName
	link: string
}
