import { IMenu } from './menu/menu.interface'

export const MenuData: IMenu = {
	title: 'Main',
	items: [
		{ icon: 'MdOutlineSpaceDashboard', link: '/', title: 'Dashboard' },
		{ icon: 'MdOutlineDirectionsCar', link: '/manage/cars', title: 'Car list' },
		{ icon: 'MdPeopleOutline', link: '/manage/users', title: 'User list' },
		{ icon: 'MdOutlineCarRental', link: '/manage/rents', title: 'Rent list' },
	],
}
