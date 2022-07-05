const EventEmitter = require('events')

class MyEmitter extends MyEmitter {}

const myEmitter = new MyEmitter()
//jab session event fire hoil tevhch myemitter madhla code run hoil
myEmitter.on('Session', () => {
  console.log('Your session is out')
  setTimeout(() => {
    console.log('Please login again your session is out')
  }, 3000)
})
console.log('The script is running')
myEmitter.emit('Session')
console.log('The script is still running')
