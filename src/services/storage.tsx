export interface GitBankProps {
	login: boolean
	email: string
	name: string
	balance: number
}

export const gitBank = {
	login: false,
	email: '',
	name: '',
	balance: 0
}

export const getLocalStorage = (): string | null => {
	return localStorage.getItem('gitbank')
}

export const createLocalStorage = (): void => {
	localStorage.setItem('gitbank', JSON.stringify(gitBank))
}

export const changeLocalStorage = (value: GitBankProps): void => {
	localStorage.setItem('gitbank', JSON.stringify(value))
}
