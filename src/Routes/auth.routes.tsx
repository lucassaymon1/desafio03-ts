import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Text } from '@chakra-ui/react'

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={Home} />
			<Route path="*" Component={Home} />
		</Routes>
	)
}
