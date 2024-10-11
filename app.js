const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para manejar JSON en las solicitudes

app.get('/', (req, res) => {
  res.send('Backend');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});