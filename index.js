var express = require('express');
var bodyParser=require('body-parser');
var cors=require("cors");
var app = express();

const router=require('./router/signup_route');
const router1= require('./router/train_route');
const router2 = require('./router/reserved_router');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

router(app);
router1(app);
router2(app);

app.listen(3050,()=>{
    console.log('server running 3050');  
});


