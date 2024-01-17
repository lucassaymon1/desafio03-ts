import { Alert, Flex, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import { useContext } from 'react'
import { login } from '../../services/login'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	return (
		<Flex minHeight="100vh" align="center" justify="center">
			<Flex padding="25px" align="center" maxW="1248px" gap="84px">
				<Card />
				<Text maxW="540px" color="white">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor veniam
					excepturi sunt atque quas accusantium facere nobis at voluptatem omnis
					porro nesciunt incidunt quod, quasi rerum quia perspiciatis corporis
					consectetur.
				</Text>
			</Flex>
		</Flex>
	)
}

export default Home
