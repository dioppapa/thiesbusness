var connection  = require('../models/configmysql');


function supprimerUneAnnonce( id  , res) {
  
        
  let  sql = "delete FROM annonce where annonce.id =  ?" ;

  var i = id.toString();
   let query = connection.query(sql, [i], (err, result) => {

       if (err) throw err;
       {
         
      }
      listerTousAnnonce(res)

   });
}
function ajouterUneAnnonce( idc,texta,image, theme , title , res) {
    var id = idc.toString() ;
    
       let  sql = "INSERT INTO annonce (idc,texta,image, theme , title , datep) VALUES ( ?,?,?,?,?,now()); "  ;
      
       let query = connection.query(sql, [id ,texta,image, theme, title ] , (err, result) => {
         
  
        
        if (err) throw err;
        
           
          res.send( 'data')
            
            
      
      });
       
    
         }
         function chercherannonce( n , res) {
          let sql = "" ;
         
          sql = "select * from  annonce where idc = ? or texta like ? or theme =  ? or title like  ? limit 10"   
          var nom = "%" + n + "%"
     
          let query = connection.query(sql, [n , nom , n, nom] ,(err, result) => {
  
              if (err) throw err;
                 {
          
                  }
  
                  res.send(result)
      
          });
  
        }
function listerTousAnnonce(res) {


    let sql = "SELECT * FROM  annonce";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

        
          res.send(result)
         
    });


 }

 function listerTousAnnRand(res) {


  let sql = "SELECT * FROM  annonce order by rand()";
  let query = connection.query(sql, (err, result) => {

      if (err) throw err;
      {
        }

       
        res.send(result)
       
  });


}

function listerTousAnnRecent(res) {


  let sql = "SELECT * FROM  annonce order by datep";
  let query = connection.query(sql, (err, result) => {

      if (err) throw err;
      {
        }

       
        res.send(result)
       
  });


}

 module.exports = {
   
  listerTousAnnonce : listerTousAnnonce ,
  listerTousAnnRand:listerTousAnnRand,
  ajouterUneAnnonce : ajouterUneAnnonce ,
  chercherannonce:chercherannonce,
  listerTousAnnRecent:listerTousAnnRecent,
  supprimerUneAnnonce:supprimerUneAnnonce
       
 
}  ;
