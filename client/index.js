import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';



var socket = io('http://localhost:3090');
// Set up Feathers client side
var app = feathers();
// Register hooks module
app.configure(hooks());
// Register socket.io
app.configure(socketio(socket));

app.service('cruds').find({}).then(function(cruds){
  console.log('My cruds!', cruds);
});

import routes from './routes';

ReactDOM.render(
  routes,
  document.getElementById('root')
)
