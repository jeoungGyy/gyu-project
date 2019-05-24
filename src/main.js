import express from 'express';
import bodyParser from 'body-parser';

// LOAD API FROM ROUTES
import api from './routes';

const app = express();

let port = 8080;

// SETUP MIDDLEWARE
app.use(bodyParser.json());

// SERVE STATIC FILES - REACT PROJECT
app.use('/', express.static(__dirname + '/../../build'));
app.use('/api', api);

// TO BE IMPLEMENTED

app.listen(port, () => {
  console.log('Express is listening on port', port);
});
