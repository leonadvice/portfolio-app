const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.port || 3000;

app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`The portfolio-app is starting on port ${PORT}`);
});
