import feathers from 'feathers';
import compress from 'compression';

const port = 3090;

const app = feathers();
const server = app.listen(port);

server.on('listening', () =>
  console.log(`listening to port ${port}`)
);
