const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes'); // Rutas de la API

const app = express();
const port = 5000; // Puedes cambiar el puerto si es necesario

// Configuración de middleware
app.use(cors()); // Habilitar CORS para todas las peticiones
app.use(bodyParser.json()); // Para poder leer el cuerpo de las peticiones en formato JSON

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('🚀 Backend en funcionamiento');
});

// Usar las rutas definidas en apiRoutes
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
