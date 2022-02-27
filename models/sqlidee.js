var connection  = require('../models/configmysql');

    
function  listerTousIdee(res) {


    let sql = "SELECT * FROM  idee";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

        
          res.send(result)
         
    });


 }
 function visioncheck(res) {


  let sql = "update idee set vision  = 1 ";
  let query = connection.query(sql, (err, result) => {

      if (err) throw err;
      {
        }

      
        res.send(result)
       
  });


}
 


 function ajouterUneIdee( idc,text , res) {
  var id = idc.toString() ;
  
     let  sql = "INSERT INTO idee (idc, texta ,vision, datep) VALUES ( ?,?,0,now()); "  ;
    
     let query = connection.query(sql, [id , text] , (err, result) => {
       

      
      if (err) throw err;
      
         
        res.send('data')
          
          
    
    });
     
  
       }

       function vision( res) {
        
           let  sql = "select * from idee where vision = 0 "  ;
          
           let query = connection.query(sql , (err, result) => {
             
      
            
            if (err) throw err;
                     
            
              res.send(result)
                
                
          
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
      
 module.exports = {
   
  listerTousIdee :  listerTousIdee ,
 ajouterUneIdee : ajouterUneIdee ,
 vision:vision ,
 visioncheck:visioncheck
}  ;
