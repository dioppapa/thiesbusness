var connection  = require('../models/configmysql');


function supprimerUneProduit( id  , res) {
  
        
    let  sql = "delete FROM boutique where id =  ?" ;
  
    var i = id.toString();
     let query = connection.query(sql, [i], (err, result) => {
 
         if (err) throw err;
         {
           
        }
             res.send('')
 
     });
  }



function ajouterUneMarchadise( idc,prix , name , res) {
    var id = idc.toString() ;
    var pprix = prix.toString() ;
  
       let  sql = "INSERT INTO boutique (idc, prix , image , datep) VALUES ( ?,?,?,now()); "  ;
      
       let query = connection.query(sql, [id ,pprix ,  name ] , (err, result) => {
         
  
        
        if (err) throw err;
        
           
        var a = result.insertId.toString()
        
        res.send(a)
            
            
      
      });
       
    
         }
    
function listerTousMarchadise(res) {


    let sql = "SELECT * FROM  boutique";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

        
          res.send(result)
         
    });


 }

 module.exports = {
   
    ajouterUneMarchadise : ajouterUneMarchadise ,
    listerTousMarchadise : listerTousMarchadise ,
    supprimerUneProduit : supprimerUneProduit ,
 
}  ;
