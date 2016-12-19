import settings from './settings';

import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import compress from 'compression';
import services from './services';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = feathers();

app.use(compress)
.options('*', cors())
.use(cors())
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.configure(hooks())
.configure(rest())
.configure(socketio())
.configure(settings)
.configure(services)

const server = app.listen(app.get('port'));

server.on('listening', () =>
  console.log(`listening to port ${app.get('port')}`)
);
