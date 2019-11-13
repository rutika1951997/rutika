const express = require('express')

const serverroute = express()

serverroute.get('/', (request, response) => {
    response.send('welcome to my application')
})

serverroute.post('/', (request, response) => {
    response.send('welcome to my application')
})

serverroute.listen(4000, () => {
    console.log(`Server started on port 4000`);
});

module.exports= serverroute;