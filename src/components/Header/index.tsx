import { useContext } from 'react'
import { Container } from './styles'
import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage, gitBank } from '../../services/storage'
import { AppContext } from '../AppContext'

export const Header = () => {
	// const context = useContext(AppContext)
	// console.log('contexto carregado no header', context)

	const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
	const navigate = useNavigate()

	const logout = () => {
		setIsLoggedIn(false)
		changeLocalStorage(gitBank)
		navigate('/')
	}

	return (
		<Flex bg={'black'} p={4} px={16}>
			<Box>
				<Center>
					<Text fontSize="7xl" textColor={'white'}>
						GitBank
					</Text>
				</Center>
			</Box>
			{isLoggedIn && (
				<>
					<Spacer />
					<Center>
						<Button onClick={logout}>Sair</Button>
					</Center>
				</>
			)}
		</Flex>
	)
}
