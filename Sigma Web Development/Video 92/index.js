const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');  // set ejs templates

app.get('/', (req, res) => {
  let siteName="Adidas"
  let searchText="Search now"
  let arr=[1,2,3]
  res.render("index",{siteName:siteName,searchText:searchText,arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle="Adidas why"
  let blogContent="This is good brand"
  res.render("blogspot",{blogTitle:blogTitle,blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})