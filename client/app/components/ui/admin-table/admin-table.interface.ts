export interface ITableItem {
	id: string | number
	editUrl: string
	items: string[]
}

export interface IAdminTableItem {
	tableItem: ITableItem
	removeHandler: () => void
}
