export default function () {

  const app = this;

  switch (process.env.SETTINGS) {
    default:
      // LOCAL ENVIRONMENT

      app.set('port',3090)
      break;
    case 'dev':
      // DEV ENVIRONMENT

      break;
    case 'prod':
      // PROD ENVIRONMENT

      break;
  }

}
