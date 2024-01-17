import { Button, ButtonProps } from '@chakra-ui/react'

interface AppButtonProps extends ButtonProps {
	title: string
}

export const AppButton = ({ title, onClick, ...rest }: AppButtonProps) => {
	return (
		<Button
			px="16px"
			py="12px"
			bgColor={'#f44336'}
			borderRadius={'12px'}
			textColor={'white'}
			fontWeight={'bold'}
			onClick={onClick}
			_hover={{ bgColor: '#de372b' }}
			{...rest}
		>
			{title}
		</Button>
	)
}
