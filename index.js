const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const API = express();

API.use(cors());
API.use(bodyParser.json());
API.use(bodyParser.urlencoded({extended: false}));


const path = require('path');

API.get("/",(req,res,next)=>{
    const filePath = path.join(__dirname, './dist/delphic-home-page/browser/index.html');
    res.sendFile(filePath);
})

API.listen(3000);
console.log("3000")