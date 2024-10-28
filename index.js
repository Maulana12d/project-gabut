// app.js
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./routes/routes');

require('./utils/db')
const Contact = require('./model/user')

app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.json()); // To parse JSON request bodies

app.get('/', (req,res)=> {
  res.render('index',{
    layout: "layouts/main-layouts", title: "halam siji ", namahalaman:"umah"
  } )
})

app.get('/abaout', (req,res)=> {
  res.render('abaout', {
layout: "layouts/main-layouts" , title: "halaman", Nama:"Firman malana"
  })
})

app.get('/users', (req,res)=> {
  const user = Contact.find() 
  res.render('user', {
layout: "layouts/main-layouts" , title: "halaman", Nama:"Firman malana", user
  })
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
