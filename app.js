// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});
// Define el controlador para el endpoint GET
app.get('/saludo', (req, res) => {
  res.send('Hola Mundo');
});

// Configura el servidor para escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
