const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29,
    },
    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    },
    
}

app.get('/',(request,response) => {
    response.sendFile(__dirname + '/index.html') //tells our server to look in the current directory and find the index.html file.
})

app.get('/api/:name', (request, response) => {
    const rapperName = (request.params.name.toLowerCase())//important that all the data in the api is found by lowercase and that what the user inputs is lowercase so that it is found
    if(rappers[rapperName]){ //we use brackets cause it plays better with spaces, this if statement says if there is a rapperName in the rapper object, then respons with that rappers data
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})


app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})