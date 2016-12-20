import settings from './settings';

import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import compress from 'compression';
import services from './services';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/feathers_local");

const app = feathers();

app.use(compress())
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }));

app.configure(hooks())
.configure(rest())
.configure(socketio())
.configure(settings)
.configure(services);

app.get("/", function(req, res){
  res.write("asdasd");
  return res.end();
});

app.listen(3090, function(){
  console.log("application running in port ", 3090);
});
