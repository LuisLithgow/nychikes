'use strict'
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const hikeDb     = require('../models/hike');
const hikeRouter = express.Router();

const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended: false});

hikeRouter.get('/', hikeDb.searchTrails, (req,res)=> {
  console.log(res.filteredTrails);
  res.json(res.filteredTrails);
  // res.render('index', {trails:res.filteredTrails})
  // res.render('report_new', {lines:res.lines})

})




module.exports = hikeRouter;
