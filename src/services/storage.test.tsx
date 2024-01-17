import {
	changeLocalStorage,
	createLocalStorage,
	getLocalStorage
} from './storage'

const gitBank = {
	login: false,
	email: '',
	name: '',
	balance: 0
}
describe('localStorage', () => {
	const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

	it('should return localStorage prototype object', () => {
		const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
		getLocalStorage()
		expect(mockGetItem).toHaveBeenCalledWith('gitbank')
	})

	it('should create an object in localStorage', () => {
		createLocalStorage()
		expect(mockSetItem).toHaveBeenCalledWith('gitbank', JSON.stringify(gitBank))
	})

	it('should update the value on localStorage', () => {
		changeLocalStorage(gitBank)
		expect(mockSetItem).toHaveBeenCalledWith('gitbank', JSON.stringify(gitBank))
	})
})
