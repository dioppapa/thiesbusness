var connection  = require('../models/configmysql');

    
function listerTousVente(res) {


    let sql = "SELECT * FROM  vente";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

           res.send(result)
         
    });


 }
 

 function chercherProduit( n , res) {
    let sql = "" ;

   
   
    sql = "select * from  vente where  prix = ? or categorie like ? limit 10"   
    var nom = "%" + n + "%"

    let query = connection.query(sql, [ n , nom ] ,(err, result) => {

        if (err) throw err;
           {
    
            }
            
            res.send(result)

    });

 
  }

  function ajouterUneMarchadise( idc,prix , name, categorie , res) {
    var id = idc.toString() ;
    var pprix = prix.toString() ;
    var categorie = categorie.toString() ;
  
       let  sql = "INSERT INTO vente (idc,categorie, image , prix  , datep) VALUES ( ?,?,?,?,now()); "  ;
      
       let query = connection.query(sql, [id ,categorie,name,pprix  ] , (err, result) => {
         
  
        
        if (err) throw err;
        
           
        var a = result.insertId.toString()
        
        res.send(a)
            
            
      
      });
       
    
         }
    

 module.exports = {
   
    listerTousVente : listerTousVente ,
    chercherProduit:chercherProduit ,
    ajouterUneMarchadise : ajouterUneMarchadise
}  ;
