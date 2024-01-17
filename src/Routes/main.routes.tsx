import { Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import { Details } from '../pages/Details'
import { Text } from '@chakra-ui/react'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/account/:id" Component={Account} />
			<Route path="/details/:id" Component={Details} />
			<Route
				path="/details/:id"
				element={<Text fontSize={'4xl'}>Página não encontrada</Text>}
			/>
		</Routes>
	)
}
