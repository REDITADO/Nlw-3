
const Banco = require('sqlite-async')

function execute(db){
  return  db.exec(`
    CREATE TABLE IF NOT EXISTS orphaneges (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        whatsapp TEXT,
        images  TEXT,
        about TEXT,
        instructions TEXT,
        horario_de_abertura TEXT,
        fim_de_semana TEXT
        
    );
    DELETE FROM orphaneges 
    `)
   
 
}

module.exports = Banco.open(__dirname + '/database.sqlite').then(execute);