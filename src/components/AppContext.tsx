import { createContext, useEffect, useState } from 'react'
import {
	changeLocalStorage,
	getLocalStorage,
	gitBank
} from '../services/storage'
import { GitBankProps } from '../services/storage'

interface AppContextProps {
	user: GitBankProps
	isLoggedIn: boolean
	setIsLoggedIn: (isLoggedIn: boolean) => void
}
// AppContext pode ser usado como um hook que vai conter o valor armazenado do contexto para qualquer parte englobada da aplicação.
export const AppContext = createContext({} as AppContextProps)

// AppContext.Provider é a tag criada que irá englobar os componentes que receberão os dados. Semelhante a como funciona o BrowserRouter e o ChakraProvider
export const AppContextProvider = ({ children }: any) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
	const [user, setUser] = useState<GitBankProps>(gitBank)

	useEffect(() => {
		const storage = getLocalStorage()
		if (storage) {
			const storedUser = JSON.parse(storage)
			setUser(storedUser)
			setIsLoggedIn(storedUser.login)
			console.log(user, isLoggedIn)
		}
	}, [])

	return (
		<AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
			{children}
		</AppContext.Provider>
	)
}
