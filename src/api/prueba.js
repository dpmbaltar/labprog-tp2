
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000

const casas = [
  {
    id: 2,
    direccion: {
      calle: 'Salta',
      numero: '1234'
    },
    ciudad: 'Neuquen',
    provincia: 'NQN',
    cantidadAmbientes: 3
  },
  {
    id: 4,
    direccion: {
      calle: 'Jujuy',
      numero: '5000'
    },
    ciudad: 'Plottier',
    provincia: 'NQN',
    cantidadAmbientes: 5
  }
];

app.post('/casa', (req, res) => {
  const { calle, numero, ciudad, provincia, cantidadAmbientes } = req.body;

  let nuevaCasa = {
    id: 999,
    direccion: {
      calle: req.calle,
      numero: req.numero
    },
    ciudad: req.ciudad,
    provincia: req.provincia,
    cantidadAmbientes: req.cantidadAmbientes
  };
  casas.push(nuevaCasa)

  res.send(nuevaCasa)
})

app.get('/casas/:id', (req, res) => {
  const { params } = req;

  let casa = casas.find(c => c.id == params.id);

  if (!casa) {
    //casa=falsy
  }

  res.send(casa)
})

app.put('/casa/:id', (req, res) => {
  const { params, body } = req;
  //params = req.params
  //body = req.body

  //renombra cantidadAmbientes a ca, e inicializa a 0
  const { calle, cantidadAmbientes:ca = 0 } = body;
  //calle = body.calle

  let casa = casas.find(c => c.id == params.id);

  if (!casa) {
    //casa=falsy
    return res.sendStatus(404)
  }

  casa.direccion.calle = calle;

  res.send(casa)
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

