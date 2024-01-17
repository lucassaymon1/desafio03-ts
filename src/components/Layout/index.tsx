import { Box, Flex } from '@chakra-ui/react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = ({ children }: any) => {
	return (
		<>
			<Header />
			<Box bgColor={'#db3c30'} minHeight={'100vh'}>
				{children}
			</Box>
			<Footer />
		</>
	)
}
