const http = require('http');
const fs = require('fs');
const characters = require('../utils/data');
const PORT = 3001;

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');//cualquier front-end puede hacerle peticion

    if(req.url.includes(`rickandmorty/`)){
        let array = req.url.split('/');
        id = array[array.length-1];

        if(id<5){
            let aa=[]
            let char;// = characters.filter(ch => {ch.id === id})
            for(let i=0; i < characters.length; i++){
                if(characters[i].id == id){
                    char  = characters[i];
                }
              //  aa[i]=characters[i]; 
            }
    
    
             res.writeHead(200, {"Content-type":"application/json"})        
             res.end(JSON.stringify(char))         
              console.log("el id es ", id);
              console.log(typeof characters);
              console.log(Array.isArray(characters));
              console.log(char);
              console.log(characters.length);
              //console.log(aa[0].id == id);

        }else{
            res.writeHead(404, {"Content-type" : "text/plain"});
            res.end("NOT FOUNDeeeddd!!!"); 
        }
       

    }else{
        res.writeHead(404, {"Content-type" : "text/plain"});
        res.end("NOT FOUND!!!"); 
	}
   
}).listen(PORT, 'localhost');