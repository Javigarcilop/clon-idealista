const db = require('../config/db'); // Asegúrate de que el archivo de configuración de la base de datos esté correcto

// Función para obtener todas las propiedades
exports.getAllPropiedades = (callback) => {
  const query = 'SELECT * FROM propiedades';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Función para agregar una nueva propiedad
exports.addPropiedad = (nuevaPropiedad, callback) => {
  const query = 'INSERT INTO propiedades (usuario_id, titulo, descripcion, precio, direccion, ciudad, provincia, codigo_postal, pais, tipo, superficie, habitaciones, baños, garaje, piscina, ascensor, amueblado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const { usuario_id, titulo, descripcion, precio, direccion, ciudad, provincia, codigo_postal, pais, tipo, superficie, habitaciones, baños, garaje, piscina, ascensor, amueblado } = nuevaPropiedad;

  db.query(query, [usuario_id, titulo, descripcion, precio, direccion, ciudad, provincia, codigo_postal, pais, tipo, superficie, habitaciones, baños, garaje, piscina, ascensor, amueblado], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

