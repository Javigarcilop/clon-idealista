const Propiedad = require('../models/propiedad');

// Obtener todas las propiedades
exports.getPropiedades = (req, res) => {
  Propiedad.getAllPropiedades((err, propiedades) => {
    if (err) {
      res.status(500).send({ message: 'Error al obtener propiedades' });
    } else {
      res.json(propiedades);
    }
  });
};

// Agregar una nueva propiedad
exports.addPropiedad = (req, res) => {
  const nuevaPropiedad = req.body;
  Propiedad.addPropiedad(nuevaPropiedad, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error al agregar propiedad' });
    } else {
      res.status(201).send({ message: 'Propiedad agregada correctamente', id: result.insertId });
    }
  });
};
