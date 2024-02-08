const express = require('express')
const app = express()
const port = 3000
const fs =require("fs")

// middleware 1
// app.use((req, res,next) =>{
//     console.log(`${Date.now()} is a ${req.method}`)
//     next()
//   })
app.use((req, res, next) => {
  console.log(req.headers)
  req.rohit="56";
    const now = new Date();
    const timeString = `${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`;
    fs.appendFileSync("rohit1.txt",`${timeString} is a ${req.method}\n\n`)
    console.log(`${timeString} is a ${req.method}`);
    next();
});


  //middleware 2
app.use((req, res,next) =>{
    console.log('m2')
    next()
  })
  


app.get('/', (req, res) => {
  res.send('Hello World!'+req.rohit)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})