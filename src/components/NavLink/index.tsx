import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button, ChakraComponent, Flex, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface NavLinkProps {
	title: string
	nav: string
	rightIcon?: any
	leftIcon?: any
}

export const NavLink = ({ title, rightIcon, leftIcon, nav }: NavLinkProps) => {
	return (
		<Link to={nav}>
			<Flex gap={2} align={'center'} mt={8}>
				{leftIcon && <Icon as={leftIcon} color={'white'} />}
				<Text fontSize={'xl'} color={'white'}>
					{title}
				</Text>
				{rightIcon && <Icon as={rightIcon} color={'white'} />}
			</Flex>
		</Link>
	)
}
