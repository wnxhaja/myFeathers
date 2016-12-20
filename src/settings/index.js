// import mongoose from 'mongoose';
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/feathers_local");
export default function () {

  const app = this;

  switch (process.env.SETTINGS) {
    default:
      // LOCAL ENVIRONMENT
      app.set('port',3090)
      // mongoose.connect("mongodb://localhost:27017/feathers_local");
      break;
    case 'dev':
      // DEV ENVIRONMENT

      break;
    case 'prod':
      // PROD ENVIRONMENT

      break;
  }

}
