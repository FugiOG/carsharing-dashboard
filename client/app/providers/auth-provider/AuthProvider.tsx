import { FC, PropsWithChildren, createContext, useState } from 'react'

import { IContext, TypeUserState } from './auth.interface'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			children
		</AuthContext.Provider>
	)
}

export default AuthProvider
