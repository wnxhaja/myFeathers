const serveStatic = require('feathers').static;
import settings from './settings';

import feathers from 'feathers';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import socketio from 'feathers-socketio';
import compress from 'compression';
import services from './services';
import bodyParser from 'body-parser';
import primus from 'feathers-primus';

import reactHtml from '../public/index.js'

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/feathers_local");

const app = feathers();

app.use(compress())
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(serveStatic('build/public'))
.use(serveStatic('build/client'));

app.configure(hooks())
.configure(rest())
.configure(socketio())
.configure(settings)
.configure(services);


app.get("/", function(req, res){
  res.write(reactHtml());
  return res.end();
});

app.listen(3090, function(){
  console.log("application running in port ", 3090);
});
