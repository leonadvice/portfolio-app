const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.use(express.static('./public'));

app.listen(PORT, () => {
  `The portfolio-app is starting on port ${PORT}`;
});
