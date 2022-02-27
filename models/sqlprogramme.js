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
        
           
          res.send( 'data')
            
            
      
      });
       
    
         }
        
         function  ajouterProgramme(objet , objectif , avantage , remerciment , date , lieu , res){
            //   var pprix = prix.toString() ;
            
                 let  sql = "INSERT INTO programme (objet, objectif , avantage , remerciment  , etdate ,lieu, datep) VALUES ( ?,?,?,?,?,?,now()); "  ;
                
            let query = connection.query(sql, [ objet , objectif , avantage ,remerciment, date , lieu ] , (err, result) => {
                   
            
                  
                  if (err) throw err;
                  
          
           
              listerTousProgramme(res)   
                      
                
                });
                 
              
                   }

                   
                   function supprimerUneProgramme( id , res) {
  
       

                    let sql = "delete  FROM  programme    where programme.id = " + id + ";";
                    let query = connection.query(sql, (err, result) => {
                
                        if (err) throw err;
                        {
                          }
                          
                          listerTousProgramme(res)
                    });
                  
              
                  }
function listerTousProgramme(res) {


    let sql = "SELECT * FROM  programme";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

              res.send(result)
         
    });


 }

 module.exports = {
   
    listerTousProgramme : listerTousProgramme ,
    ajouterProgramme : ajouterProgramme ,
    supprimerUneProgramme : supprimerUneProgramme
  
}  ;
