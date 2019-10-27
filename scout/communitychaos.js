// import env variables
require('dotenv').config({ path: 'variables.env' });

// START SERVER
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`)
);
