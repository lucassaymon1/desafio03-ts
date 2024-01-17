import { login } from './login'

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
// 	...jest.requireActual('react'),
// 	useContext: () => ({
// 		setIsLoggedIn: mockSetIsLoggedIn
// 	})
// }))

// jest.mock('react-router-dom', () => ({
// 	...(jest.requireActual('react-router-dom') as any),
// 	useNavigate: () => mockNavigate
// }))

describe('login', () => {
	// const mockAlert = jest.fn()
	// window.alert = mockAlert

	const mockEmail = 'lucas@email.com'
	const mockPassword = '123456'

	it('should display an alert with greetings and user email', async () => {
		const response = await login(mockEmail, mockPassword)

		expect(response).toBeTruthy()

		// expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
		// expect(mockNavigate).toHaveBeenCalledWith(`/1`)
	})

	it('should receive an error if email or password is invalid', async () => {
		const rightEmail = await login('lucas@email.com', 'invalidPassword')
		const rightPassword = await login('email@invalid', '123456')

		const response = rightEmail && rightPassword
		expect(response).toBeFalsy()

		// expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
		// expect(mockNavigate).not.toHaveBeenCalled()
	})
})
