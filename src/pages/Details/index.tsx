import { Center, Flex, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { AccountCard } from '../../components/AccountCard'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../api'
import { getLocalStorage } from '../../services/storage'
import { AppContext } from '../../components/AppContext'
import { NavLink } from '../../components/NavLink'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

export const Details = () => {
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')

	const { user, isLoggedIn } = useContext(AppContext)
	const navigate = useNavigate()

	!isLoggedIn && navigate('/')
	return (
		<Center>
			<Flex flexDir={'column'} gap={6}>
				<Text fontSize={'4xl'} fontWeight={'bold'} my={8}>
					{' '}
					Informações da conta
				</Text>
				<AccountCard content={user.email} mainContent="E-mail" />
				<AccountCard content={user.name} mainContent="Name" />
				<NavLink
					title="Acessar conta"
					nav={'/account/1'}
					rightIcon={ArrowForwardIcon}
				/>
			</Flex>
		</Center>
	)
}
