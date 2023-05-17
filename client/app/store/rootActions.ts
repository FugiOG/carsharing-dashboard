import { setTheme } from './theme/theme.slice'
import * as userActions from './user/user.actions'

export const allActions = {
	...userActions,
	setTheme,
}
