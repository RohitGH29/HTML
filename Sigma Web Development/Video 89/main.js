const express = require('express')
const blog = require('./routes/blog')




const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("Hey it's a get request")
    res.send('Hello World!')  //it's sent text message to browser
})
app.post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('Hello World! post')
})
app.put('/', (req, res) => {
    console.log("Hey it's a put request")
    res.send('Hello World! put')
})
app.delete('/', (req, res) => {
    console.log("Hey it's a delete request")
    res.send('Hello World! delete')
})
app.get('/index', (req, res) => {
    console.log("Hey it's a html index")
    res.sendFile('templates/index.html', { root: __dirname })  // it's pass the file (html file)
})
app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, name: ["harry", "rohit"] })  // it's pass json file to browser
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})