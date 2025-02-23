const Usuario = require('../models/usuario');

// Obtener todos los usuarios
exports.getUsuarios = (req, res) => {
  Usuario.getAllUsuarios((err, usuarios) => {
    if (err) {
      res.status(500).send({ message: 'Error al obtener usuarios' });
    } else {
      res.json(usuarios);
    }
  });
};

// Agregar un nuevo usuario
exports.addUsuario = (req, res) => {
  const nuevoUsuario = req.body;
  Usuario.addUsuario(nuevoUsuario, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error al agregar usuario' });
    } else {
      res.status(201).send({ message: 'Usuario agregado correctamente', id: result.insertId });
    }
  });
};
