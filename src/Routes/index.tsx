import { Route, Routes } from 'react-router-dom'
import Account from '../pages/Account'
import { useContext } from 'react'
import { MainRoutes } from './main.routes'
import { AuthRoutes } from './auth.routes'
import { AppContext } from '../components/AppContext'

export const AppRoutes = () => {
	const { isLoggedIn, user } = useContext(AppContext)

	return isLoggedIn ? <MainRoutes /> : <AuthRoutes />
}
