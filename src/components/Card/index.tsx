import { Box, Center, Flex, Input } from '@chakra-ui/react'

import { login } from '../../services/login'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

import {
	GitBankProps,
	changeLocalStorage,
	gitBank
} from '../../services/storage'
import { AppContext } from '../AppContext'
import { AppButton } from '../AppButton'

export const Card = () => {
	interface userDataProps {
		id: string
		name: string
	}

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [userData, setUserData] = useState<userDataProps>()
	const [isLoaded, setIsLoaded] = useState<boolean>(false)
	const navigate = useNavigate()
	const { setIsLoggedIn } = useContext(AppContext)

	const validateUser = async (email: string, password: string) => {
		const loggedIn = await login(email, password)

		if (!loggedIn) {
			return alert('Invalid email or password.')
		}
		alert(`Welcome, ${email}`)
		setIsLoggedIn(true)
		getData()
	}

	const getData = async () => {
		try {
			const data: any = await api

			if (data) {
				changeLocalStorage({
					login: true,
					email: data.email,
					name: data.name,
					balance: data.balance
				})
			}
			navigate('/account/1')
		} catch (error) {
			console.error('Não foi possível realizar o login')
		}
	}

	useEffect(() => {
		const getUser = async () => {
			const response: any = await api
			setUserData({
				id: response.id,
				name: response.name
			})
		}
		getUser()
	}, [])

	useEffect(() => {
		if (userData !== null && userData !== undefined) {
			setIsLoaded(true)
			setTimeout(() => {
				setIsLoaded(false)
			}, 1000)
		}
	}, [userData])

	return (
		<Box
			backgroundColor="#FFFFFF"
			borderRadius="25px"
			padding="24px"
			width="524px"
			height="fit-content"
		>
			<Center fontSize="32px" mb="20px">
				{userData === null || userData === undefined ? (
					<h1>Carregando...</h1>
				) : (
					<>
						{isLoaded ? (
							<h1 className="loading">Informações carregadas.</h1>
						) : (
							<h1 className="loading">Faça login, {userData.name}</h1>
						)}
					</>
				)}
			</Center>
			<Flex gap="12px" flexDir="column" mb="16px">
				<Input
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Senha"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Flex>
			<Center>
				<AppButton
					onClick={() => validateUser(email, password)}
					title={'Entrar'}
				/>
			</Center>
		</Box>
	)
}
