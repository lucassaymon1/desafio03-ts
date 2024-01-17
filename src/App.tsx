import { Box, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import { Layout } from './components/Layout'
import { Details } from './pages/Details'
import { createContext, useContext, useState } from 'react'
import { AppRoutes } from './Routes'
import {
	changeLocalStorage,
	createLocalStorage,
	getLocalStorage
} from './services/storage'
import { AppContextProvider } from './components/AppContext'

function App() {
	!getLocalStorage() && createLocalStorage()

	return (
		<BrowserRouter>
			<AppContextProvider>
				<ChakraProvider>
					<Layout>
						<AppRoutes />
					</Layout>
				</ChakraProvider>
			</AppContextProvider>
		</BrowserRouter>
	)
}

export default App
