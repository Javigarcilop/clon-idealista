const db = require('../config/db');

// Obtener todos los usuarios
exports.getAllUsuarios = (callback) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Agregar un nuevo usuario
exports.addUsuario = (data, callback) => {
  const query = 'INSERT INTO usuarios SET ?';
  db.query(query, data, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

