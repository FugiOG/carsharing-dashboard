import { IMenu } from './menu/menu.interface'

export const MenuData: IMenu = {
	title: 'Main',
	items: [
		{
			icon: 'MdOutlineTimeline',
			link: '/',
			title: 'User stat',
		},
		{
			icon: 'MdOutlineSpaceDashboard',
			link: '/dashboard',
			title: 'Dashboard',
			isAdmin: true,
		},
		{
			icon: 'MdOutlineDirectionsCar',
			link: '/manage/cars',
			title: 'Car list',
			isAdmin: true,
		},
		{
			icon: 'MdPeopleOutline',
			link: '/manage/users',
			title: 'User list',
			isAdmin: true,
		},
		{
			icon: 'MdOutlineCarRental',
			link: '/manage/rents',
			title: 'Rent list',
			isAdmin: true,
		},
	],
}
