//const fetch = require("fetch");
const axios = require("axios");

const getCharById = (res, id) => {
   //console.log(`llego del server estoy en el controler antes de axios , id es ${id}`)
axios(`https://rickandmortyapi.com/api/character/${id}`)

.then(res =>  res.data )
.then(data => { 
    let character = {        
        id: data.id,
        name: data.name,
        species : data.species,
        gender: data.gender,
        image: data.image 
     }    
     res.writeHead(200, {"Content-type":"application/json"})
     res.end(JSON.stringify(character))
})
.catch(error => {
    res.writeHead(500, {"Content-Type": "text/plain"})
    res.end(error.message)
 })
};

module.exports = getCharById;