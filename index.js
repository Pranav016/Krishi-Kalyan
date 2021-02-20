require('db/mongoose')
const express = require('express')
const app = express()
const kishanRouter = require('router/kishan')
const signupRouter = require('router/signup')
const loginRouter = require('router/login')
const updateRouter = require('router/update')
const productsRouter = require('router/products')
const homeRouter = require('router/home')
const logoutRouter=require('router/logout')
const customerRouter = require('router/customer')
const bodyParser=require('body-parser')
const cookieParser = require('cookie-parser')
// const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())/*This is used to automatically parse json data */
app.use(cookieParser())
app.use(homeRouter)
app.use(kishanRouter)
app.use(customerRouter)
app.use(signupRouter)
app.use(loginRouter)
app.use(updateRouter)
app.use(logoutRouter)
app.use(productsRouter)
app.use(express.static(__dirname + '/public'));
app.listen('3000', () => {
    console.log('Server running at port 3000')
})
