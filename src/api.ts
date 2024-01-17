const account = {
  id: '1',
  name: "Lucas Saymon",
  email: "lucas@email.com",
  password: "123456",
  balance: 2000.5
}

// simula uma promise

export const api = new Promise((resolve) => {
  setTimeout(() => {
    // resolve() é um indicador que a função assíncrona foi resolvida com sucesso e pode retornar algo.
    // no caso, o resolve() é chamado para a resolução da Promise logo após os 3s da função setTimeOut.
    resolve(account)
  }, 3000)
})