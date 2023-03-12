//server con express

const app = require('./src/app');
const {db} = require('./src/db');
const PORT = 3001;

db.sync({alter:true})
.then(()=>{
  app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
  });
})
.catch(error => {
  console.log(error.message);
})



//aqui creamos el server con nodejs puro
/*const http = require('http');
const controllerCharById = require('../controllers/getCharById');
const controllerCharDetails = require('../controllers/getCharDetail')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
   // app.use(function(req, res, next) {
    //  res.header("Access-Control-Allow-Origin", "*");
     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     // next();
  //});
  const id =  req.url.split("/").at(-1); 

    if(req.url.includes('onsearch')){          
      return controllerCharById(res, id)    //return para salir de la ejecucion 
    }

    if(req.url.includes('chardetails')){
      return controllerCharDetails(res, id)
    }

    res.writeHead(404, {"Content-type": "plain/text"})
    res.end("Error en url")
    
}).listen(3001, ()=>{console.log("server levantado....")});*/