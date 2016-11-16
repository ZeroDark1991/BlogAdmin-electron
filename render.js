const config = require('./config')
const agent = config.agent
const host = 'http://127.0.0.1:3000'

agent.post(`${host}/api/u/signup`, {
    nickName: 'ZeroDark',
    passWord: '123123FFFfff'
})
.then(res => {
	console.log(res)
})