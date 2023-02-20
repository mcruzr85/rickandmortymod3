const axios = require('axios');

const getCharDetails = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then(res => res.data)
  .then(data => {
    let details = {
        id: data.id,
        name: data.name,
        species : data.species,
        gender: data.gender,
        image: data.image,
        status: data.status,
        origin: data.origin
    }
   res.writeHead(200, {"Content-type": "application/json"})
   res.end(JSON.stringify(details))

  })
  .catch(error => {
    res.writeHead(500, {"Content-type":"text/plain"})
    res.send(error.message)
  })
}

module.exports = getCharDetails;
