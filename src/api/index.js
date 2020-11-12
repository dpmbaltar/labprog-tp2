const express = require('express')
const bodyParser = require('body-parser');
const app = express();
//const https = require('https');
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000

const key = '16a17a5b219940e093e213034201211'

app.get('/', (req, res) => {
    const { params } = req
    let data = ''

    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Neuquen`)
        .then(r => r.json())
        .then((json) => {
            console.log(json)
            res.send(json)
        })
    
    /*https.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Neuquen`, (resp) => {
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            let obj = JSON.parse(data);

            console.log(data);
            console.log(obj.explanation);
          res.send(obj)
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });*/
  })

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
