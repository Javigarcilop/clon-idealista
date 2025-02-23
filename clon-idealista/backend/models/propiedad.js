const db = require('../config/db');

// Obtener todas las propiedades
exports.getAllPropiedades = (callback) => {
  db.query('SELECT * FROM propiedades', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Agregar una nueva propiedad
exports.addPropiedad = (data, callback) => {
  const query = 'INSERT INTO propiedades SET ?';
  db.query(query, data, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};
