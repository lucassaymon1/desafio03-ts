import { Box, Center, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import { AccountCard } from '../../components/AccountCard'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../api'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../components/AppContext'
import { NavLink } from '../../components/NavLink'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Account = () => {
	interface UserDataProps {
		id: string
		name: string
		email: string
		password: string
		balance: number
	}

	const [userData, setUserData] = useState<UserDataProps>()
	const { id } = useParams()
	const navigate = useNavigate()

	const { isLoggedIn } = useContext(AppContext)

	!isLoggedIn && navigate('/')

	useEffect(() => {
		const getData = async () => {
			const data: any = await api
			setUserData(data)
		}
		getData()
	}, [])

	if (userData && id !== userData.id) {
		navigate('/')
	}

	const actualDate = new Date()

	return (
		<Center display={'flex'} flexDir={'column'}>
			{userData === null || userData === undefined ? (
				<Spinner size={'xl'} mt={16} />
			) : (
				<>
					<SimpleGrid
						columns={2}
						spacing={8}
						paddingTop={16}
						alignItems={'center'}
					>
						<>
							<AccountCard
								mainContent={`Bem vindo, ${userData.name}`}
								content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
							/>
							<AccountCard
								mainContent="Saldo"
								content={`R$ ${userData.balance.toFixed(2)}`}
							/>
						</>
					</SimpleGrid>

					<NavLink
						title="informações do usuário"
						nav={'/details/1'}
						rightIcon={ArrowForwardIcon}
					/>
				</>
			)}
		</Center>
	)
}

export default Account
