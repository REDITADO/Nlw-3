
const banco = require('./database/db')
const saveOrphanage = require('./database/saveOrphanege')
const saveOf = require('./database/saveOrphanege')

module.exports = {
    index(request, response){
        
        return response.render('index')
    },
    async orphanate(request,response){
        try {
          const db= await banco
            const orphaneges =  await db.all("SELECT * FROM orphaneges")
           return response.render('orphanate',{orphaneges})
            
        } catch (error) {
        return response.send("erro no banco")
        console.log(error)
        }
        
    },
    async orphanege (request,response){
        const id = request.query.id
        try {
            const db = await banco;
            const results = await db.all(`SELECT * FROM orphaneges WHERE id ="${id}"`)
            const orphanege = results[0]

            orphanege.firstImage = orphanege.images.split(",")

         orphanege.open =  orphanege.fim_de_semana == "0"? false:true

            orphanege.images = orphanege.images.split(",")
            return response.render('orphanege', {orphanege} )
        } catch (error) {
            response.send('erroooooo')
        console.log(error)
        }
    },
    criarOrfanato (request,response){
        return response.render('criar-orfanato')
    },
    async saveOrphanege(req,res){
       const field = req.body

      if(Object.values(field).includes('')){

         return res.send("escolha um ponto no mapa")

      }
      const db = await banco
     try {
         
        await saveOrphanage(db, {
            lat:field.lat, 
            lng:field.lng,
            name :field.name,
            whatsapp:field.whatsapp,
            images:field.images.toString(), 
            about:field.about,
            instructions:field.instructions,
            horario_de_abertura:field.horario_de_abertura,
            fim_de_semana:field.fim_de_semana
    
          })
          return res.redirect('/orphanate')
     } catch (error) {
         console.log(error)
         return res.send("erro no banco de dados! tente novamene mais tarde")
     }
    }
}
