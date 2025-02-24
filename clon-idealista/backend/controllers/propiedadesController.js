const Propiedad = require('../models/propiedad');

exports.getPropiedades = (req, res) => {
  if (!Propiedad || !Propiedad.getAllPropiedades) {
    console.error("❌ Error: El modelo Propiedad no tiene la función getAllPropiedades.");
    return res.status(500).json({ message: "Error en el servidor" });
  }

  Propiedad.getAllPropiedades((err, propiedades) => {
    if (err) {
      console.error("❌ Error al obtener propiedades:", err);
      res.status(500).json({ message: 'Error al obtener propiedades' });
    } else {
      res.json(propiedades);
    }
  });
};

exports.addPropiedad = (req, res) => {
  const nuevaPropiedad = req.body;

  if (!Propiedad || !Propiedad.addPropiedad) {
    console.error("❌ Error: El modelo Propiedad no tiene la función addPropiedad.");
    return res.status(500).json({ message: "Error en el servidor" });
  }

  Propiedad.addPropiedad(nuevaPropiedad, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error al agregar propiedad' });
    } else {
      res.status(201).json({ message: 'Propiedad agregada correctamente', id: result.insertId });
    }
  });
};


