const express = require('express')

const server = express()
server.get('/',(req,res)=>{
    res.send('hello world')
})

server.listen(80,()=>{
    console.log('success');
})