const mysql = require('mysql');

// Crear la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'idealista_clone'
});

// Establecer la conexión
db.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión: ' + err.stack);
    return;
  }
  console.log('✅ Conexión exitosa a la base de datos');
});

module.exports = db;
