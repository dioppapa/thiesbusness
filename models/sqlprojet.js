var connection  = require('../models/configmysql');
var fs = require('fs') ;

function supprimerUnProjet( id  , res) {
  
        
    let  sql = "delete FROM projet where projet.id =  ?" ;
  
    var i = id.toString();
     let query = connection.query(sql, [i], (err, result) => {
 
         if (err) throw err;
         {
           
        }
             listerTousProjets(res)
 
     });
  }

  
  function chercherprojet( n , res) {
    let sql = "" ;
   
    sql = "select * from  projet where description like ? or typep like ? or dateetlieu like ? limit 10"   
    var nom = "%" + n + "%"

    let query = connection.query(sql, [nom , nom , nom] ,(err, result) => {

        if (err) throw err;
           {
    
            }

            res.send(result)

    });

  }

function ajouterUneProjet( type, des , date , lieu , image , res) {
  //   var pprix = prix.toString() ;
  
       let  sql = "INSERT INTO projet (image, description , typep , datei  , lieu , datep) VALUES ( ?,?,?,?,?,now()); "  ;
      
       let query = connection.query(sql, [ image , des , type , date , lieu ] , (err, result) => {
         
  
        
        if (err) throw err;
        

        var id = result.insertId
           
    var    tabimage = textImgToTab(image)

     saveImageProjet( tabimage,id )

    const aa = './public/image/temporel/'  ;
    
    deleteTemporelFile(aa)
 
    listerTousProjets(res)   
            
      
      });
       
    
         }
         function textImgToTab(imgg){

          var tabi = []
        
          for(var a = 0 ;a < 5 ; a++){
            var b  =  imgg.indexOf(',')
        
            var im = imgg.substring(0,b )
          
            tabi.push(im)
        
            imgg = imgg.substring(b + 1 )
          }
           
          return tabi 
        }
         function saveImageProjet(tabimg , id) {
          const aa = './public/image/temporel/'  ;
          
             const bb = './public/image/projet/dc'+ id + '/' ;
             if (!fs.existsSync(bb)){
              fs.mkdirSync(bb);
          }
            
          for( var a = 0 ; a < 5 ; a++){
            var data =  fs.readFileSync(aa + tabimg[a] )
       
            
            
            fs.writeFileSync( bb + tabimg[a] , data)
       
             
           }
               
             
         
         }

         function deleteTemporelFile(aa) {
          
          var a = fs.readdirSync(aa)
       
          for( var j = 0 ; j < a.length + 1; j ++){
             fs.unlink(aa + a[j] , function() {
                    
            })
           }
            
         }
    
function listerTousProjets(res) {


    let sql = "SELECT * FROM  projet";
    let query = connection.query(sql, (err, result) => {

        if (err) throw err;
        {
          }

         
          res.send(result)
         
    });


 }

 module.exports = {
   
    listerTousProjets : listerTousProjets ,
    chercherprojet:chercherprojet ,
    ajouterUneProjet:ajouterUneProjet ,
    supprimerUnProjet: supprimerUnProjet

}  ;
