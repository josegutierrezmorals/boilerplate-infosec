const express = require('express');
const helmet = require('helmet');
const app = express();

/**
 * CONFIGURACIÓN DE SEGURIDAD (Helmet)
 * Estos middlewares deben ir antes de cualquier ruta
 */

// 1. Ocultar la cabecera X-Powered-By
app.use(helmet.hidePoweredBy());

// 2. Prevenir Clickjacking con Frameguard
app.use(helmet.frameguard({ action: 'deny' }));

/**
 * RUTAS Y ARCHIVOS ESTÁTICOS
 */
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Exportamos la configuración para que server.js la use
module.exports = app;