const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'idealista-clone'  
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error("❌ Error de conexión a la base de datos:", err);
    } else {
        console.log("✅ Conexión exitosa a la base de datos");
    }
});

module.exports = db;

