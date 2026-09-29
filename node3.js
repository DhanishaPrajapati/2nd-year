const EventEmitter = require('events');      //predefine module
const dp = new EventEmitter();

dp.on('greet',(name)=> {           //predefined methods
    console.log(`Hello ${name}`)

})
dp.on('exit',(num)=> {             //predefined methods
    console.log(`thankyou for visit ${num}`)
})

dp.emit('greet', 'dp')
dp.emit('exit', 100)22