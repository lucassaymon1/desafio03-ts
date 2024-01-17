import { Box, Text } from '@chakra-ui/react'

type AccountCardProps = {
	mainContent: string
	content: string
}

export const AccountCard = ({ mainContent, content }: AccountCardProps) => {
	return (
		<Box bgColor={'white'} borderRadius={'12px'} p={8} minHeight={'120px'}>
			<Text fontSize={'2xl'} fontWeight={'bold'}>
				{mainContent}
			</Text>
			<Text fontSize={'xl'}>{content}</Text>
		</Box>
	)
}
