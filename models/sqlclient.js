
   var connection  = require('../models/configmysql');
   var fs = require('fs') ;
    
   function listerTousLesClients(res) {
   
   
    fa( function(result){
  
      res.send(result)
      
   });
  
  
    }
  
    function validerlesClient(res , pseudo , passe  , req) {
   
      fa( function(result){
    
     
    var verifie =  verifierClient(pseudo , passe , result , res , req)
  
        if( verifie!= null){
   
            var a = { "success":"success", "user":verifie}

          
              res.send( a)
            }
           
             else{
              var a = { "success":"failed", "user":verifie}
              
               res.send(a)
              }
            
  
    });
        
      }
     
  
      function verifierClient(pseudo , passe , data , res) {
        var a = 0
        var l = data.length
           var verifie 
  
            while (a < l) {
            
               if( data[a].prenom.localeCompare(pseudo) == 0 && data[a].pass.localeCompare(passe) == 0 ) {
                verifie =  data[a]
                break; 
              } else {
                a++
                }
        
              }
              return verifie 
             
            
  
    
        
      }
  
    
  
   
  
            function chercherUnClientsb( n , res) {
              let sql = "" ;
             
              sql = "select * from  client where id =  ? or tel like ? limit 10"   
              var nom = "%" + n + "%"
         
              let query = connection.query(sql, [n , nom] ,(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
  
            function chercherUnClientsc( n , res) {
              let sql = "" ;
             
              sql = "select * from client  where nom like ? or prenom like ?   or email like ?  limit 10;"
           
  
                var nom = "%" + n + "%"
              let query = connection.query(sql,[nom  , nom , nom],(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
            function chercherUnClientsd( n , res) {
              let sql = "" ;
             
              sql = "select * from  client where  adresse  like ? ;"
           
  
                var nom = "%" + n + "%"
              let query = connection.query(sql,[nom , nom, nom,nom , nom , nom],(err, result) => {
  
                  if (err) throw err;
                     {
              
                      }
  
                      res.send(result)
          
              });
  
            }
  
  
    function chercherUnClients( name , id) {
      let sql = "" ;
  var n = name.toString();
      if(id==1)
  sql = "SELECT * FROM client where id =  ?"  
  else if ( id== 2)
  
  sql = "SELECT * FROM client where nom like '%?%' "
  else if ( id== 3)
  sql = "SELECT * FROM client where prenom like '%?%' "
  else if ( id== 4)
  sql = "SELECT * FROM client where pseudo like '%?%' "
  else if ( id== 5)
  sql = "SELECT * FROM client where tel = ?"  
  else if ( id== 6)
  sql = "SELECT * FROM client where adresse like '%?%' "
  else if ( id== 7)
  sql = "SELECT * FROM client where email like '%?%' "
  else if ( id== 8)
  sql = "SELECT * FROM client where pass like '%?%' "
      
      let query = connection.query(sql,[n] ,(err, result) => {
  
          
              
              return result ;
              
      });
    }
      
  
      function supprimerUnClient( id , res) {
  
       

        let sql = "delete FROM  client   where client.id = " + id + ";";
        let query = connection.query(sql, (err, result) => {
    
            if (err) throw err;
            {
              }
              
           listerTousLesClients(res)    
        });
      
  
      }
  

   
      function ajouterUnClient( nom,prenom,tel,pass ,name , res) {
  var t = tel.toString() ;
  
     let  sql = "INSERT INTO client (nom,prenom,tel,pass, img , datei) VALUES ( ?,?,?,?,?,now()); "  ;
    
     let query = connection.query(sql, [nom ,prenom,t,pass, name ] , (err, result) => {
       

      
      if (err) throw err;
      
       var data = {}
  
       var us = {}
  
      us.name = nom
      us.prenom = prenom
      us.id = result.insertId
  

    
      data.client = true
    data.connected = true
    data.user = us

   
        res.send( data)
          
          
    
    });
     
  
       }
      
       function deleteTemporelFile(aa) {
          
          var a = fs.readdirSync(aa)
       
          for( var j = 0 ; j < a.length + 1; j ++){
             fs.unlink(aa + a[j] , function() {
                    
            })
           }
            
         }

       function ajouterService(cli , nombcom, nomlivr ){
        var clia = cli.toString() ;
        var nombcoma = nombcom.toString() ;
        var nomlivra = nomlivr.toString() ;
        
           let  sql = "INSERT INTO clientservice (cli , nombcom, nomlivr , dateinscrip) VALUES ( ?,?,?,now()); "  ;
          
           let query = connection.query(sql, [ clia,nombcoma,nomlivra ] , (err, result) => {
             
            if (err) throw err;
            
            
          
               
                
          
          });
           
        
             }
        
  
       function modifierUnClient( nom,prenom,tel,passe,img,pass , id ) {
        let  sql = "UPDATE client SET nom= ?, prenom=?, pseudo=? , tel=? , adresse=?, email=?, pass=? date_inscription = ? WHERE id=?;";
        var t = tel.toString() ;
  
         let query = connection.query(sql,[nom ,prenom,pseudo,t,adresse,email,pass , date,id]  , (err, result) => {
       
       if (err) throw err;
       {
         
         console.log("cherching")
           
     
           return result ;
           
           }
     
     });
     
          }

          function modifierUnClienta( nom,prenom , img , id , res) {
            let  sql = "UPDATE client SET nom= ?, prenom=?  , img = ? WHERE id=?;";
            var idc = id.toString() ;
      
             let query = connection.query(sql,[nom ,prenom,img ,idc]  , (err, result) => {
           
           if (err) throw err;
           {
             
            res.send('')
         
              // return result ;
               
               }
         
         });
         
              }
  
          module.exports = {
         
          ajouterUnClient : ajouterUnClient ,
          modifierUnClienta :  modifierUnClienta ,
           supprimerUnClient : supprimerUnClient ,
           listerTousLesClients : listerTousLesClients ,
           chercherUnClientsb : chercherUnClientsb ,
           chercherUnClientsc:chercherUnClientsc,
           chercherUnClientsd:chercherUnClientsd,
           validerlesClient : validerlesClient ,
          }  ;
  
  
          function fa(callback){
        
            let sql = "SELECT * FROM  client";
            let query = connection.query(sql, (err, result) => {
        
                if (err) throw err;
                {
                  }
                  return callback(result);
            });
          }
  
            function fb(callback){
        
              let  sql = "SELECT  COUNT(*) as t FROM ecommerce.commande " ;
                
              let query = connection.query(sql,[id]  , (err, result) => {
                    
                if (err) throw err;
                  {
                 
                  }
                   console.log(result)
                  res.send(result)
              
              });
      
            
           
      }
      
     