if ( process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(express.static('public'))
app.use(expressLayouts)
app.use('/',indexRouter)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
  useUnifiedTopology : true,
  useNewUrlParser: true,
})

const db = mongoose.connection
db.on('error',error =>  console.log(error))
db.once('open',() => console.log('Connect to DB'))


app.listen(3000,()=>{
  console.log("Eeeeeeuyy")
});

