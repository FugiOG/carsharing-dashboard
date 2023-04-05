import { IMenu } from './menu/menu.interface'

export const MenuData: IMenu = {
	title: 'Main',
	items: [
		{ icon: 'MdOutlineSpaceDashboard', link: '/', title: 'Dashboard' },
		{ icon: 'MdOutlineDirectionsCar', link: '/cars', title: 'Car list' },
		{ icon: 'MdPeopleOutline', link: '/users', title: 'User list' },
		{ icon: 'MdOutlineCarRental', link: '/rents', title: 'Rent list' },
	],
}
