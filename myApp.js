const express = require('express');
const helmet = require('helmet'); // Importamos helmet
const app = express();

// --- CONFIGURACIÓN DE SEGURIDAD (Helmet) ---
// 1. Ocultar que usas Express
app.use(helmet.hidePoweredBy());

// 2. Mitigar Clickjacking (frameguard)
app.use(helmet.frameguard({ action: 'deny' }));
// ------------------------------------------

app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// ESTO ES VITAL: No agregues app.listen aquí. 
// El archivo server.js ya lo hace por ti.
module.exports = app;