const sqlidee = require('../models/sqlidee');
const sqlpublication = require('../models/sqlpublication');


 module.exports = function (app) {
 
 var sqlclient  = require('../models/sqlclient');
 var sqlpublic  = require('../models/sqlpublication');
 var sqlvente  = require('../models/sqlvente');
 var sqlannonce  = require('../models/sqlannonce');
 var sqlboutique  = require('../models/sqlboutique');
 var sqlprojet  = require('../models/sqlprojet');
 var sqlprogramme  = require('../models/sqlprogramme');
 var sqlidee  = require('../models/sqlidee');

 var sqlnew  = require('../models/sqlnew');

 
 var fs = require('fs') ;
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

 var multer = require('multer');


 app.post('/testpost', function (req, res) {
 
  console.log('on est la wayy  ajax')
 
 // console.log( req.body.param1)
 res.send('name')
 
  })

  app.get('/lister' , function ( req , res) {
            
    var p = req.query.p 

    
    
   
    var reg = /^[0-9]+$/

    var rega = /^[a-zA-Z]+$/
   
    if(reg.test(p))
    sqlclient.chercherUnClientsb(  p , res)
  
    else if(rega.test(p))
    sqlclient.chercherUnClientsc(  p , res)


  //  console.log(p)

   
 });

 
 app.get('/chercherpro' , function ( req , res) {
            
  var p = req.query.p 

console.log(p)
 sqlprojet.chercherprojet(p , res)
 
 //res.send('')

  
 
});


 app.get('/cherchera' , function ( req , res) {
            
  var p = req.query.p 


  sqlannonce.chercherannonce(p , res)


  
 
});

 app.get('/cherchp' , function ( req , res) {
            
  var p = req.query.p 

  sqlpublic.cherpublicationa(p , res)


  
 
});

app.post('/uploadnew', function (req, res) {
 
  var name = req.query.name
  
 

uploadImageTemporelnew(req , res  )
 res.send(name)
 
  })
  

 app.post('/uploadpro', function (req, res) {
 
  var name = req.query.name
  
  console.log(name )
 
uploadDonneTemporelPro(req , res  )

 res.send(name)
 
  })
 

app.post('/uploadbou', function (req, res) {
 
  var name = req.query.name
//  var id = req.query.id

uploadImageTemporelbou(req , res   , name)
 res.send(name)
 
  })


app.post('/uploada', function (req, res) {
 
  var name = req.query.name
  var id = req.query.id


 //deleteTemporelaFileUnique(name)
 uploadImageTemporelA(req , res , id  , name) 
  res.send(name)
 
  })


app.post('/uploadp', function (req, res) {
 
  var name = req.query.name
  var id = req.query.id

  uploadImagePublication(req , res , id , name)   
  
  res.send(name)
 
  })


app.post('/upload', function (req, res) {
 
  var name = req.query.name

  uploadDonneTemporel(req,res)
    
  console.log('on est la')
 // else {
 //    uploadImage(req , res)
 //    deleteTemporelFile()
 //  }
  
  res.send(name)
 
  })

  app.get('/updateapercu' , function ( req , res) {
          
    
    const aa = './public/image/temporel'  ;
    var a = fs.readdirSync( aa);



      res.send(a[0])
   
 });

app.get('/nettoitemporel' , function ( req , res) {

  deleteTemporelFile()
      

   });
   
   
function uploadImage(req , res) {
  var name = req.query.name
    var classe = req.query.classe
   
    
   
   
    var dir = './public/image/categorie/' + classe  ;

    var storage = multer.diskStorage({

 
      destination: function (req, file, callback) {
        
    
    
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
          }
          callback(null, dir);
      },
      filename: function (req, file, callback) {
    
       
        
          callback(null,  file.originalname) ;
         
      }
    });

    var upload = multer({
  
      storage: storage  ,
      
      fileFilter: function(req, file, callback) {
        
      
      callback(null, true) 
    }
    
    
    }).array('files', 1);
    
    
    
    upload(req, res, function () {


   
   
     
    })






    
    
  
}

function uploadImageTemporelnew(req , res   ) {
   
  var dir = './public/image/temporel'  ;

  
  var storage = multer.diskStorage({


    destination: function (req, file, callback) {
      
  
  
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
  
     
      
        callback(null,  file.originalname) ;
       
    }
  });

  var upload = multer({

    storage: storage  ,
    
    fileFilter: function(req, file, callback) {
      
    
    callback(null, true) 
  }
  
  
  }).array('filesnew', 1);
  
  
  
  upload(req, res, function () {


 
 
   
  })
}


function uploadImageTemporelA(req , res   , name) {
   
  var dir = './public/image/annonce/temporel'  ;

  
  var storage = multer.diskStorage({


    destination: function (req, file, callback) {
      
  
  
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
  
     
      
        callback(null,  file.originalname) ;
       
    }
  });

  var upload = multer({

    storage: storage  ,
    
    fileFilter: function(req, file, callback) {
      
    
    callback(null, true) 
  }
  
  
  }).array('filesa', 1);
  
  
  
  upload(req, res, function () {


 
 
   
  })
}

function uploadImageTemporelbou(req , res   , name) {
   
  var dir = './public/image/vente/temporel/'  ;

  
  var storage = multer.diskStorage({


    destination: function (req, file, callback) {
      
  
  
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
  
     
      
        callback(null, file.originalname) ;
       
    }
  });

  var upload = multer({

    storage: storage  ,
    
    fileFilter: function(req, file, callback) {
      
    
    callback(null, true) 
  }
  
  
  }).array('filesbou', 1);
  
  
  
  upload(req, res, function () {


 
 
   
  })
}

function uploadImageAnnonce(req , res , id  , name) {
   
  var dir = './public/image/publication/dc' + id  ;

  
  var storage = multer.diskStorage({


    destination: function (req, file, callback) {
      
  
  
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
  
     
      
        callback(null,  file.originalname) ;
       
    }
  });

  var upload = multer({

    storage: storage  ,
    
    fileFilter: function(req, file, callback) {
      
    
    callback(null, true) 
  }
  
  
  }).array('filesa', 1);
  
  
  
  upload(req, res, function () {


 
 
   
  })
}


function uploadImagePublication(req , res , id  , name) {
   
//  var dir = './public/image/publication/dc' + id  ;
var dir = './public/image/publication/temporel' ;

  
  var storage = multer.diskStorage({


    destination: function (req, file, callback) {
      
  
  
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
  
     
      
        callback(null,  file.originalname) ;
       
    }
  });

  var upload = multer({

    storage: storage  ,
    
    fileFilter: function(req, file, callback) {
      
    
    callback(null, true) 
  }
  
  
  }).array('files', 1);
  
  
  
  upload(req, res, function () {


 
 
   
  })
}

  function uploadDonneTemporelPro(req , res) {
   
    var dir = './public/image/temporel'  ;

   
    var storage = multer.diskStorage({

 
      destination: function (req, file, callback) {
        
    
    
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
          }
          callback(null, dir);
      },
      filename: function (req, file, callback) {
    
       
        
          callback(null,  file.originalname) ;
         
      }
    });

    var upload = multer({
  
      storage: storage  ,
      
      fileFilter: function(req, file, callback) {
        
      
      callback(null, file.originalname) 
    }
    
    
    }).array('filespro', 1);
    
    
    
    upload(req, res, function () {


   
   
     
    })
  }


  function uploadDonneTemporel(req , res) {
   
    var dir = './public/image/temporel'  ;

    
    var storage = multer.diskStorage({

 
      destination: function (req, file, callback) {
        
    
    
          if (!fs.existsSync(dir)){
              fs.mkdirSync(dir);
          }
          callback(null, dir);
      },
      filename: function (req, file, callback) {
    
       
        
          callback(null,  file.originalname) ;
         
      }
    });

    var upload = multer({
  
      storage: storage  ,
      
      fileFilter: function(req, file, callback) {
        
      
      callback(null, file.originalname) 
    }
    
    
    }).array('files', 1);
    
    
    
    upload(req, res, function () {


   
   
     
    })
  }

  function deleteTemporelaFileUnique(name) {
    const aa = './public/image/temporela/'  ;
    
    var a = fs.readdirSync(aa)
     
    for( var j = 0 ; j < a.length ; j ++){
       
      var d = name.charAt(0)
      
      
      if (d.localeCompare(a[j].charAt(0)==0)) {


        fs.unlink(aa + a[j] , function() {
              
        })
      
     
    }
      
  }
     
     console.log(a)
   
   }
  
  function deleteTemporelFile(aa) {
   
   var a = fs.readdirSync(aa)

   for( var j = 0 ; j < a.length + 1; j ++){
      fs.unlink(aa + a[j] , function() {
             
     })
    }
     
  }

  
  function saveImageBoutique( name , id) {
    const aa = './public/image/vente/temporel/'  ;
    
       const bb = './public/image/vente/dc'+ id + '/' ;
       if (!fs.existsSync(bb)){
        fs.mkdirSync(bb);
    }
      
        var data =  fs.readFileSync(aa + name )
   
        
        
        fs.writeFileSync( bb + name , data)
   
         
       
   
   }

   

  function saveImagePublication( tabimg , id) {
    const aa = './public/image/publication/temporel/'  ;
    
       const bb = './public/image/publication/dc'+ id + '/' ;
       if (!fs.existsSync(bb)){
        fs.mkdirSync(bb);
    }
      
       for( var a = 0 ; a < 5 ; a++){
        var data =  fs.readFileSync(aa + tabimg[a] )
   
        
        
        fs.writeFileSync( bb + tabimg[a] , data)
   
         
       }
   
   }

   

   function saveImageAnnonce( tabimg , id) {
    const aa = './public/image/annonce/temporel/'  ;
    
       const bb = './public/image/annonce/dc'+ id + '/' ;
    
      
       if (!fs.existsSync(bb)){
        fs.mkdirSync(bb);
    }
       for( var a = 0 ; a < 2 ; a++){
        var data =  fs.readFileSync(aa + tabimg[a] )
   
        
        
        fs.writeFileSync( bb + tabimg[a] , data)
   
         
       }
   
   }


  function saveImageProduit(img) {
   const aa = './public/image/temporel/'  ;
   
      const bb = './public/image/television/'  ;
     
     
      fs.readFile( aa + img   , function (err , data) {
 
         fs.writeFile( bb + img , data , function (err) {
           
           
         })
  
        })   
  }


  function deleteTemporelFileb() {
   const aa = './public/image/temporel/'  ;
   
   
     fs.readdir(aa,( err , files)=> {
       files.forEach ( file => {

         fs.unlink(aa + file, function() {
             
         })
       });
      });
    
     
  }
  
    
  

  app.get('/searchAcceuil' , function ( req , res) {
      
    var val  = req.query.p
   
  console.log(val)
   

      sqlvente.chercherProduit(val , res)
  
    
   


    
   
// res.send('data')
     
  });

    
    app.get('/validerLoginPass' , function ( req , res) {
      
      var pseudo  = req.query.pseudo
      var passe = req.query.passe

    
      console.log(pseudo,passe)
     sqlclient.validerlesClient( res , pseudo , passe)
      
   // var data = {}
 // res.send(data)
       
    });
    
    app.get('/supprimerUnClient' , function ( req , res) {
      
      var id = req.query.id

    //  var idc = req.query.idc

     
    
    //  const aa = './public/image/annonce/dc'+ idc + '/' ;
     
     
   //deleteTemporelFile(aa) 
     

   sqlclient.supprimerUnClient(id , res)

  
      });
    
    app.get('/supprimerUneAnnonce' , function ( req , res) {
      
      var id = req.query.id

      var idc = req.query.idc

     
    
      const aa = './public/image/annonce/dc'+ idc + '/' ;
     
     
   deleteTemporelFile(aa) 
     


  sqlannonce.supprimerUneAnnonce(id,res)
 
      });
    app.get('/supprimerUnePublication' , function ( req , res) {
      
      var id = req.query.id

      var idc = req.query.idc
     
    
      const aa = './public/image/publication/dc'+ idc + '/' ;
     
     
   deleteTemporelFile(aa) 
     


  sqlpublication.supprimerUnePublication(id,res)
 
      });
    
    app.get('/supprimerUnProjet' , function ( req , res) {
      
      var id = req.query.id
     
      const aa = './public/image/projet/dc'+ id + '/' ;
     
     
   deleteTemporelFile(aa) 
     

    
  sqlprojet.supprimerUnProjet(id , res)
      });
    
    app.get('/supprimerProgramme' , function ( req , res) {
      
      var id = req.query.id
     
    
     
  sqlprogramme.supprimerUneProgramme(id , res)
  // res.send('bouo')
      });

    app.get('/supprimermarchadise' , function ( req , res) {
      
      var idpro = req.query.idp
     
     console.log(idpro)
     
  sqlboutique.supprimerUneProduit(idpro , res)
  // res.send('bouo')
      });
      
      function saveImageProfile( name) {
        const aa = './public/image/temporel/'  ;
        
           const bb = './public/image/profile/' ;
           if (!fs.existsSync(bb)){
            fs.mkdirSync(bb);
        }
          
            var data =  fs.readFileSync(aa + name )
       
            
            fs.writeFileSync( bb + name , data)
        
         
             
           
           
       
       }
      app.get('/validermodificationpro' , function ( req , res) {
        
        var nom  = req.query.nom
        var prenom  = req.query.prenom
        var idc  = req.query.idc
        var name = req.query.name
  
       
        saveImageProfile( name) 
        const aa = './public/image/temporel/'  ;
        
       deleteTemporelFile(aa)
  
  
  sqlclient.modifierUnClienta(nom , prenom , name , idc ,res)
 //    res.send('')     
     
        });

        app.get('/validerChangementNewB' , function ( req , res) {
      
          var tab = []

          var imga  = req.query.imga
          var imgb  = req.query.imgb

          var image = imga + "," + imgb + ","
       
          tab.push(imga)
          tab.push(imgb)
       
          saveImageNew( tab ) 

         const aa = './public/image/temporel/'  ;
          
        deleteTemporelFile(aa)
    
    
        sqlnew.updateNew(2,image,'', res)
    
    //  sqlvente.ajouterUneMarchadise(idc,prix,name,categorie,res)
      
          });



          app.get('/validerChangementNew' , function ( req , res) {
      
           
         var tab = []
         
            var imga  = req.query.imga
            var text  = req.query.text
  
            console.log(imga)
            console.log( text)
            tab.push(imga)
          
         ///   saveImageNew( tab ) 
  
         //  const aa = './public/image/temporel/'  ;
            
        ///  deleteTemporelFile(aa)
      
      
          sqlnew.updateNew(1,imga, text, res)
      
      //  sqlvente.ajouterUneMarchadise(idc,prix,name,categorie,res)
        
            });
  

    app.get('/validernouveaup' , function ( req , res) {
      
      var prix  = req.query.prix
      var name  = req.query.name
      var idc  = req.query.idc
 var categorie = req.query.categorie
     
  
  saveImageBoutique( name , idc) 
     const aa = './public/image/vente/temporel/'  ;
      
    deleteTemporelFile(aa)



  sqlvente.ajouterUneMarchadise(idc,prix,name,categorie,res)
  
 // res.send('')
      });


     
app.get('/validerpublication' , function ( req , res) {
      
  var tabimage = []
  var idc  = req.query.idc
  var categorie = req.query.categorie
   var image  = req.query.image
   var titre  = req.query.title
  tabimage = textImgToTab(image)

    saveImagePublication( tabimage , idc)
  
    const aa = './public/image/publication/temporel/'  ;
  
     deleteTemporelFile(aa)
   sqlpublic.ajouterUnePublication(idc, categorie , titre , image , res)
        
  });

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
  function textImgToTabA(imgg){

    var tabi = []
  
    for(var a = 0 ;a < 2; a++){
      var b  =  imgg.indexOf(',')
  
      var im = imgg.substring(0,b )
    
      tabi.push(im)
  
      imgg = imgg.substring(b + 1 )
    }
     
    return tabi 
  }
app.get('/validerannoce' , function ( req , res) {
      
  var  tabimage = []
  var idc  = req.query.idc
   var texta = req.query.texta
   var image  = req.query.image
   var title  = req.query.title
    var theme  = req.query.theme
  
    tabimage = textImgToTabA(image)

    console.log(tabimage)
   saveImageAnnonce(  tabimage , idc)
     
    const aa = './public/image/annonce/temporel/'  ;
    
      deleteTemporelFile(aa)
 sqlannonce.ajouterUneAnnonce(idc ,texta , image , theme , title , res)
      
  //res.send('')
  });

  app.get('/updatenew' , function ( req , res) {
     
    var display = req.query.display 
     
    var index = req.query.index
    
    
    sqlnew.updateNewDisplay(index , display , res)
     
    
  });
  app.get('/choipub' , function ( req , res) {
      
     var a  = req.query.choi
     
   sqlnew.updateNew( 3 , '' , a , res)
     
  });

  app.get('/new' , function ( req , res) {
      
     
    sqlnew.listerTousNew(res)
     
    
  });
  

    app.get('/client' , function ( req , res) {
      
     
      sqlclient.listerTousLesClients(res)
      
      
    });

    app.get('/idee' , function ( req , res) {
      
     
      sqlidee. listerTousIdee(res)
      
      
    });

   

    app.get('/programme' , function ( req , res) {
      
     
      sqlprogramme.listerTousProgramme(res)
      
      
    });
    app.get('/projet' , function ( req , res) {
      
     
      sqlprojet.listerTousProjets(res)
      
      
    });

    app.get('/boutique' , function ( req , res) {
      
        
      sqlboutique.listerTousMarchadise(res)
           
     });
   


    app.get('/annonce' , function ( req , res) {
      
      sqlannonce.listerTousAnnonce(res)
       
       
     });

     app.get('/annoncerescent' , function ( req , res) {
      
      sqlannonce.listerTousAnnRecent(res)
       
       
     });

     app.get('/annoncerand' , function ( req , res) {
      
      sqlannonce.listerTousAnnRand(res)
       
       
     });
     app.get('/publicationrand' , function ( req , res) {
      
     
      sqlpublic.listerTousPubRand(res)
      
      
    });

    app.get('/publicationrescent' , function ( req , res) {
      
     
      sqlpublic.listerTousPubRescent(res)
      
      
    });

    app.get('/publication' , function ( req , res) {
      
     sqlpublic.listerTousPublication(res)
  
      
    });
    app.get('/vente' , function ( req , res) {
      
      sqlvente.listerTousVente(res)
      // sqlclient.listerTousLesClients(res)
       
       
     });
    app.get('/savedansbase' , function ( req , res) {
         
        
   
      var nom = req.query.nom
      var prenom =  req.query.prenom
       var tel =  req.query.tel
      var name = req.query.name
      var pass = req.query.pass
    
      console.log(nom , prenom , tel , name , pass)
    
     
    saveImageProfile( name )

     const aa = './public/image/temporel/'  ;
      
      deleteTemporelFile(aa)

      console.log(name)
    
  sqlclient.ajouterUnClient( nom,prenom,tel,pass,name , res)
    
  //res.send('')
    
    });
    

    function saveImageNew( name) {
      const aa = './public/image/temporel/'  ;
      
         const bb = './public/image/acceuil/remerciment/' ;
         if (!fs.existsSync(bb)){
          fs.mkdirSync(bb);
      }
        

      for( var a = 0 ; a < name.length ; a++){
        var data =  fs.readFileSync(aa + name[a] )
     
          
          
        fs.writeFileSync( bb + name[a] , data)
   
      }
        
           
         
     
     }

    function saveImageProfile( name) {
      const aa = './public/image/temporel/'  ;
      
         const bb = './public/image/profile/' ;
         if (!fs.existsSync(bb)){
          fs.mkdirSync(bb);
      }
        
          var data =  fs.readFileSync(aa + name )
     
          
          
          fs.writeFileSync( bb + name , data)
     
           
         
     
     }
    
    app.get('/savedansbaseprogr' , function ( req , res) {
         
      
    
      var objet = req.query.objet
      var objectif = req.query.objectif
      var avantage = req.query.avantage
      var remerciment = req.query.remerciment
      var date = req.query.date
      var lieu = req.query.lieu
    
      console.log( objet , objectif , avantage , remerciment , date , lieu)
    
     
  
    sqlprogramme.ajouterProgramme(objet , objectif , avantage , remerciment , date , lieu , res)
    
    
    });

    app.get('/savedansbaseprojet' , function ( req , res) {
         
        
   
      var type = req.query.type
      var des =  req.query.des
       var date =  req.query.date
      var lieu = req.query.lieu
      var image = req.query.image
     
      console.log( type , des , date , lieu )
    
    //  res.send('')
     
  
    sqlprojet.ajouterUneProjet(type,des,date,lieu,image,res)
    
    
    });
    
    
    

app.get('/inSererIdee' , function ( req , res) {
         
        
   
   var idee =  req.query.idee
  var idc = req.query.idc
 

sqlidee.ajouterUneIdee(idc,idee, res)


});

app.get('/vision' , function ( req , res) {
         
        
     sqlidee.vision( res)


});

app.get('/visioncheck' , function ( req , res) {
         
       
  sqlidee.visioncheck( res)

});

}













    




      
 
 
