let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let views =  require('ejs')
let app = express()




app.listen(5000, ()=>{
    console.log('server is running on port 5000')
})

