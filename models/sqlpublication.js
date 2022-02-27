var connection  = require('../models/configmysql');

function supprimerUnePublication( id  , res) {
  
        
  let  sql = "delete FROM publication where publication.id =  ?" ;

  var i = id.toString();
   let query = connection.query(sql, [i], (err, result) => {

       if (err) throw err;
       {
         
      }
      listerTousPublication(res)

   });
}
function listerTousPublication(res) {


    let sql = "SELECT * FROM  publication";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

        
          res.send(result)
         
    });


 }


 function ajouterUnePublication( idc,categorie, titre, image  , res) {
  var id = idc.toString() ;
  
     let  sql = "INSERT INTO publication (idc,categorie, titre, image , datep) VALUES ( ?,?,?,?,now()); "  ;
    
     let query = connection.query(sql, [id , categorie, titre, image ] , (err, result) => {
       

      
      if (err) throw err;
      
         
        res.send( 'data')
          
          
    
    });
     
  
       }

       function cherpublicationa( n , res) {
        let sql = "" ;
       
        sql = "select * from  publication where idc = ? or categorie like ? or titre like ?"   
        var nom = "%" + n + "%"
   
        let query = connection.query(sql, [n , nom , nom] ,(err, result) => {

            if (err) throw err;
               {
        
                }

                res.send(result)
    
        });

      }
      function cherpublicationb( n , res) {
        let sql = "" ;
       
        sql = "select * from  publication where categorie =  ? "   
      
        let query = connection.query(sql, [n] ,(err, result) => {

            if (err) throw err;
               {
        
                }

                res.send(result)
    
        });

      }
      function listerTousPubRescent(res) {


        let sql = "SELECT * FROM  publication ORDER BY datep desc";
        let query = connection.query(sql, (err, result) => {
      
            if (err) throw err;
            {
              }
      
             
              res.send(result)
             
        });
      
      
      }
      function listerTousPubRand(res) {


        let sql = "SELECT * FROM  publication order by rand()";
        let query = connection.query(sql, (err, result) => {
      
            if (err) throw err;
            {
              }
      
             
              res.send(result)
             
        });
      
      
      }
 module.exports = {
   
  listerTousPublication : listerTousPublication ,
  ajouterUnePublication : ajouterUnePublication ,
  cherpublicationa:cherpublicationa ,
  cherpublicationb:cherpublicationb,
  listerTousPubRescent:listerTousPubRescent,
  listerTousPubRand:listerTousPubRand,
  supprimerUnePublication:supprimerUnePublication
}  ;
