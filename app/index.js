import settings from './settings';

import feathers from 'feathers';
import compress from 'compression';

const app = feathers();

app.use(compress)
.configure(settings);

const server = app.listen(app.get('port'));

server.on('listening', () =>
  console.log(`listening to port ${app.get('port')}`)
);
