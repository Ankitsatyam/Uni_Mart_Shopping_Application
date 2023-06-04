const express = require('express')
const cors = require('cors')

const app = express()

let corsOptions = {
    Credential:true,
    origin:true
}

app.use(cors(corsOptions))
app.options('*',cors(corsOptions))

app.use("/login",(req,res)=>{
    const authticationObject = {
        username:"Ankit",
        password:"Ankit@123"
    }
    res.send(authticationObject)
})

app.listen(8000)