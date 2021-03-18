function saveOrphanage(db, orphanege) {
  return db.run(`
  INSERT INTO orphaneges (
  lat,
 lng,
 whatsapp,
 about,
 instructions,
 images,
 name,
 horario_de_abertura,
 fim_de_semana
  ) VALUES (
    "${orphanege.lat}",
 
    "${orphanege.lng}",
 
   "${orphanege.whatsapp}",
    
     "${orphanege.about}", 
    
    "${orphanege.instructions}",
    
    "${orphanege.images}",
    
    "${orphanege.name}",

    "${orphanege.horario_de_abertura}",

     "${orphanege.fim_de_semana}"

    
  )
`)
}

module.exports = saveOrphanage;
