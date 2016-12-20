module.exports = function(){
  return(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Feathers Example</title>
    </head>
    <body>
      <h1>Welcome to Feathers</h1>
      <div id="root"></div>
      <script src="/bundle.js"></script>
    </body>
    </html>
`)
}


{/*<script type="text/javascript">
  // Set up socket.io
  var socket = io('http://localhost:3090');
  // Set up Feathers client side
  var app = feathers();
  // Register hooks module
  app.configure(feathers.hooks());
  // Register socket.io
  app.configure(feathers.socketio(socket));
  // Set up authentication with a store to cache your auth token
  app.configure(feathers.authentication({ storage: window.localStorage }));

  app.service('cruds').find({}).then(function(cruds){
    console.log('My cruds!', cruds);
  });

</script>*/}
