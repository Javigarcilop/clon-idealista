const express = require('express');
const router = express.Router();
const propiedadesController = require('../controllers/propiedadesController');
const usuariosController = require('../controllers/usuariosController');

// Verificar que los controladores están correctamente importados
if (!propiedadesController || !usuariosController) {
    console.error("❌ Error: No se han podido importar los controladores.");
}

// Rutas para propiedades
router.get('/propiedades', propiedadesController.getPropiedades);
router.post('/propiedades', propiedadesController.addPropiedad);

// Rutas para usuarios
router.get('/usuarios', usuariosController.getUsuarios);
router.post('/usuarios', usuariosController.addUsuario);

module.exports = router;
