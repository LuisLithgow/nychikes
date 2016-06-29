'use strict'

const express   = require('express');
const app       = express();
const path      = require('path');
const logger    = require('morgan');
const bodyParser= require('body-parser');
const PORT = process.env.PORT || process.argv[2] || 3000 ;

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');
// const hikeRoute = require('./routes/hike');
const session   = require('express-session');
const methodOverride = require('method-override');

app.use(session({
  saveUninitialized:true,
  resave: true,
  secret: 'I have a secret',
  cookie: {maxAge: 60000}
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}) );

app.use(express.static(path.join(__dirname, 'public')));
app.use('bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use(methodOverride('_method'));

// Setting up the routes
app.use('/', homeRoute);
// app.get('/',function(req,res){
//   res.render('index')
// })
// app.use('/user', userRoute);
// app.use('/hike', hikeRoute);





app.listen(PORT, function() {
  console.log('Server started in ' ,__dirname);
  console.log("All systems go on ", PORT);
})








