const http = require('http');
const controllerCharById = require('../controllers/getCharById');
const controllerCharDetails = require('../controllers/getCharDetail')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
   // app.use(function(req, res, next) {
    //  res.header("Access-Control-Allow-Origin", "*");
     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     // next();
  //});

    if(req.url.includes('onsearch')){
       const id =  req.url.split("/").at(-1);     
      controllerCharById(res, id)    
    }

    if(req.url.includes('chardetails')){
      const id = req.url.split('/').at(-1)
      controllerCharDetails(res, id)
    }
}).listen(3001, ()=>{console.log("server levantado....")});