export const stringToDate = (dateString: string): string => {
	const parts = dateString.split('-')
	const year = +parts[0]
	const month = +parts[1] - 1 // месяцы в JavaScript начинаются с 0 (январь), поэтому вычитаем 1
	const day = +parts[2]
	return new Date(year, month, day).toISOString()
}
