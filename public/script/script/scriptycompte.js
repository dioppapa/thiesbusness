

var idmarch = '1'
var clickColum
var namepro = ''
var nompro = false
var prenompro = false
 var imgpro = false
 var verifiepro = false
  


 
monBoutique()
boutonInputClick()
boutonInputClicka()
validerTextarea()
radioClicked()
themeChange( )
verifierAnnonce()
validerChangementA()
validerChangementP()
verifierTitreP()
ajouterNMarchadise()
validerNouveauProduit()
verifierPrix()
supprimerMarchadise()

hoverSupprimerAjouter()
clickModifierProfile()
//apercuImageChange()
verifierInputP()
hoverclickItemProfileb()
controlReseauInput()
validerNewPasse()
//curvtitre()

hoverclickDevenir()

htmlForIe()
uploadImagepro()







var nimga = ''
var nimgb = ''

var nompa , nompb , nompc , nompd , nompe ;


var nimpa = false
var nimpb = false
var nimpc = false
var nimpd =false
var nimpe = false

var titleb = false
var titlep = false
var textab = false
var avecimageb = false
var globalVerifie = false
var globalVerifiep = false

var globalVerifiebou = false 

var imageverifieb = false

var boutiqueClient 
var publicationClient 

var annonceClient 

var imgaffb =false
var prixb = false
var showres = false
var showdivpasse = false
var showemail = false
var showtel = false
var namebou = ''
var nameimgb = ''

clickModifierPhotoProfile()
validerModificationPhotop()
//var telb = false
//var passb = false

htel()
hemail()
hpasse()


/**  
var xhr = new XMLHttpRequest();
xhr.open('POST', '/testpost');
//xhr.send(null);
var value1 = 'mafer yapp'
var value2 = 'domoda'
xhr.setRequestHeader("Content-Type", "application/x-www-formurlencoded");

xhr.send('param1=' + value1 + '&param2=' + value2);
*/



if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  menuProfileClickResponse()
 } else {
  menuProfileClick()
}




//var boutique = listerTousBoutique()



if( clientConnected){
    boutiqueClient = boutiqueToid( vente , idClient)
   
  
  publicationClient = boutiqueToid( pub , idClient)
  annonceClient = boutiqueToid( annonce , idClient)
  
  creatBoutique()
  
  }
 
function deconnection() {

  $.ajax({
    url:"/deconnection",
    async: false,  
    success:function(data) {
      window.location.href = '/'
    

    }
 });
 
}


function listerTousBoutique() {
  var result={};
  $.ajax({
    url:"/boutique",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}

function boutiqueToid( produit , i){
  var data = []
 
    for( var a = 0 ; a < produit.length ; a++){
if(produit[a].idc==i)
      data.push(produit[a])
    }
   
    return data ;

}

function publicationToid( produit , i){
  var data = []
 
    for( var a = 0 ; a < produit.length ; a++){
if(produit[a].idc==i)
      data.push(produit[a])
    }
   
    return data ;

}
function idToboutiqueindex( produit , i){
  var data 
    for( var a = 0 ; a < produit.length ; a++){
 if(produit[a].id==i)
      data = a
    }

    return data ;

}


function boutonInputClick(){

  $('.submitp').click( function (e) {
    e.preventDefault()
    var i  = $(this).parent().parent().index() 
    
    
    var n =  $(".fileupdatep").eq(i).val()

    if(n.length >= 3){
     
     $(".myFormp").eq(i).submit()
    // $("#submitpro").click()
    }else {
      $(".fileupdatep").eq(i).css({
      
        'display': 'block' ,
  
          }) ;
          $(".submitp").eq(i).css({
              
            'display': 'none' ,
        
              }) ;

              

    }
    
   
  });
  $(".fileupdatep").click(function(){

    //var i  = $(this).parent().index() 
    var i  = $(this).parent().parent().index() 
 
    
  if(is.ie()){
    $(".fileupdatep").eq(i).css({
    
      'display': 'none' ,
  
        }) ;
        $(".submitp").eq(i).css({
            
          'display': 'block' ,
      
            }) ;

          }
          
  });


  $(".buttonmodifie").click(function(){

    var i  = $(this).parent().index()

    $("#myFormp").remove()
    
    
    $("#divselectionp").append('<form  id = "myFormp" action ="/uploadp" method="POST" enctype="multipart/form-data">  <input id="fileupdatep" type="file" name="files"  style="display: none;">   </input> <input type="submit"  id="submitp"  value="submit"  style="display:none;"> </input> </form>')
    
   $("#fileupdatep").click()
 
   inputFileChangedp(i)


  });

  
}

function clickItemClumBoutique(){
  $(".columnMybout").hover(   function(){

   // var i  = $(this).index()
  
   
   // idmarch = boutiqueClient[i].id
   
  });

  $(".columnMybout").click(   function(){

    var i  = $(this).index()

    $(".cardMybout").css({
      //  'border': '1px solid rgba(236,255,66,0.8)',
 'border': '',
      //  background: linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%);

           });
  

             $(".cardMybout").eq(i).css({
            //  'border': '1px solid rgba(236,255,66,0.8)',
       'border': '1px solid rgba(233,0,0,0.5)',
            //  background: linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%);
 
                 });
  
    var name = boutiqueClient[i].image
    var prix = boutiqueClient[i].prix
    idmarch = boutiqueClient[i].id
 updateImageApercu(name,idClient , prix)
  
 //alert('index clic' + i)
 
 //alert('id marchadise click ' + idmarch)

// alert('clonne length avant ' + $(".columnMybout").length)
 //alert('boutique length avant' + boutiqueClient.length)

     
  });
}

function curvtitre(){

   textt($('.pdescription')) 
       
  curveGlobale($('.pdescription'))


}



function cssBoutiqueVide(){
  $("#labelNewbou").css({
            
    'text-size':'14px',
    'font-weight':'bold',
    'position': 'absolute',
    'top': '35%',
    'left': '50%',
    '-ms-transform': 'translate(-50%,-50%)',
    'transform': 'translate(-50%,-50%)',

      }) ;

      $("#buttonaffich").css({
            
         'position': 'absolute',
        'top': '50%',
        'left': '50%',
        '-ms-transform': 'translate(-50%,-50%)',
        'transform': 'translate(-50%,-50%)',
        'border-radius': '50%',
          }) ;

          $('#buttonaffich').width((X*15)/100)
          $('#buttonaffich').height((Y*15)/100)

          $("#buttonaffich").css({
                            
            'background':'rgba(233,0,0,0.1)',
            'box-shadow': '1px 1px 3px #555',
               
              }) ;
          $(".buttonaffich").click(function(){

            
        
                $(".buttonaffich").css({
                  
                  'background':'',
                  'box-shadow': '1px 1px 5px #555 inset',
                    }) ;
                  }) ;

                  $('#buttonaffich').hover(function(){
                
                    
                    $("#buttonaffich").css({
                      'box-shadow': '1px 1px 3px #555 inset' ,
                        }) ;
              
                
                    },function(){
                        $("#buttonaffich").css({
                            'box-shadow': '1px 1px 3px #555' ,
                      }) ;
                        
                  });
        
}



function menuProfileClickResponse(){
  $(".menuprofile").hover(function(){

    var i  = $(this).index()
    $(".iconmenuprofile").css({
            
      'box-shadow': '1px 1px 3px #555',
      'border':'',
                          
        }) ;

        $(".iconmenuprofile").eq(i).css({
          
          'box-shadow': '1px 1px 3px #555 inset',
          'border':'1px solid rgba(233,0,0,0.5)',
                          
            }) ;
  }) ;

  $(".menuprofile").click(function(){
cssMyCompteResponse()
    var i  = $(this).index()
    $(".iconmenuprofile").css({
            
      'box-shadow': '1px 1px 3px #555',
      'border':'',
                          
        }) ;

        $(".iconmenuprofile").eq(i).css({
          
          'box-shadow': '1px 1px 3px #555 inset',
          'border':'1px solid rgba(233,0,0,0.5)',
                          
            }) ;
    $(".menuprofile").css({
            
    //  'background':'rgba(233,0,0,0.1)',
    //  'box-shadow': '1px 1px 3px #555',
         
        }) ;

        $(".menuprofile").eq(i).css({
          
     //     'background':'',
     //     'box-shadow': '1px 1px 3px #555 inset',
            }) ;

  
    if( i==0){

     
    

      $("#divfaireunepublication").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divmonboutique,#divfaireuneannonce,#divmonprofileparam").css({
        
                'display': 'none' ,
              
                  }) ;
    }
    else  if( i==1) {
      $("#divfaireuneannonce").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divmonboutique,#divboutiqueaffichag,#divfaireunepublication,#divmonprofileparam").css({
        
                'display': 'none' ,
              
                  }) ;
    }

    else  if( i==2) {
      cssPageBoutique()
      
      var data = {f:"mage"}
$.ajax({
  type: "POST",
url: "/uploadpro",
data:data,
//   data: form.serialize(), // serializes the form's elements.
  success: function(data)
  {
   //   alert(data); // show response from the php script.
  }
});
      if( boutiqueClient !=null && boutiqueClient != 0 ){
        if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
          $("#divmonboutique,#divboutiqueaffichag").css({
              
            'display': 'block' ,
          
              }) ;
              $("#divfaireuneannonce,#divfaireunepublication,#divmonprofileparam").css({
            
                'display': 'none' ,
              
                  }) ;
         htmlMyBouApercuRes()
         cssMyBoutiqueResponse()
         } else {
          $("#divmonboutique,#divboutiqueaffichag").css({
              
            'display': 'block' ,
          
              }) ;
            
                  $("#divfaireuneannonce,#divfaireunepublication,#divmonprofileparam").css({
            
                    'display': 'none' ,
                  
                      }) ;
        }
        
       
    }else{
      $('#divboutiqueprduitMy').html('')
      var label = '<label id="labelNewbou"> ajoutes des articles  à la boutique</label>'
    var boutonimg = '<img id="buttonaffich"  src ="public/image/acceuil/plus.png"/>'
      $('#divboutiqueprduitMy').append( label + boutonimg)
      
  
      $("#divboutiqueaffichag").css({
    'display': 'none',
    
             });
             $("#divmonboutique").css({
              
              'display': 'block' ,
            
                }) ;
              
                    $("#divfaireuneannonce,#divfaireunepublication,#divmonprofileparam").css({
              
                      'display': 'none' ,
                    
                        }) ;
             cssBoutiqueVide()
             ajouterPremierAr()
            
    }


    }
    
    else  if( i==3) {
      $("#divmonprofileparam").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divfaireuneannonce,#divboutiqueaffichag,#divfaireunepublication,#divmonboutique").css({
        
                'display': 'none' ,
              
                  }) ;
    }
    


  });

  
}
function menuProfileClick(){
  $(".menuprofile").hover(function(){

    var i  = $(this).index()
    $(".menuprofile").css({
            
      'background':'rgba(233,0,0,0.1)',
  
        }) ;

        $(".menuprofile").eq(i).css({
          
          'background':'',
  
            }) ;
  }) ;

  $(".menuprofile").click(function(){

    var i  = $(this).index()
    $(".menuprofile").css({
            
      'background':'rgba(233,0,0,0.1)',
      'box-shadow': '1px 1px 3px #555',
         
        }) ;

        $(".menuprofile").eq(i).css({
          
          'background':'',
          'box-shadow': '1px 1px 3px #555 inset',
            }) ;
           
  
    if( i==0){

     
    

      $("#divfaireunepublication").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divmonboutique,#divfaireuneannonce,#divmonprofileparam").css({
        
                'display': 'none' ,
              
                  }) ;
    }
    else  if( i==1) {
      $("#divfaireuneannonce").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divmonboutique,#divboutiqueaffichag,#divfaireunepublication,#divmonprofileparam").css({
        
                'display': 'none' ,
              
                  }) ;
    }

    else  if( i==2) {
     
      var data = {f:"mage"}
$.ajax({
  type: "POST",
url: "/uploadpro",
data:data,
//   data: form.serialize(), // serializes the form's elements.
  success: function(data)
  {
   //   alert(data); // show response from the php script.
  }
});
      if( boutiqueClient !=null && boutiqueClient != 0 ){
        $("#divmonboutique,#divboutiqueaffichag").css({
              
          'display': 'block' ,
        
            }) ;
          
                $("#divfaireuneannonce,#divfaireunepublication,#divmonprofileparam").css({
          
                  'display': 'none' ,
                
                    }) ;
    }else{
      $('#divboutiqueprduitMy').html('')
      var label = '<label id="labelNewbou"> ajoutes des articles  à la boutique</label>'
    var boutonimg = '<img id="buttonaffich"  src ="public/image/acceuil/plus.png"/>'
      $('#divboutiqueprduitMy').append( label + boutonimg)
      
  
      $("#divboutiqueaffichag").css({
    'display': 'none',
    
             });
             $("#divmonboutique").css({
              
              'display': 'block' ,
            
                }) ;
              
                    $("#divfaireuneannonce,#divfaireunepublication,#divmonprofileparam").css({
              
                      'display': 'none' ,
                    
                        }) ;
             cssBoutiqueVide()
             ajouterPremierAr()
            
    }


    }
    
    else  if( i==3) {
      $("#divmonprofileparam").css({
            
        'display': 'block' ,
      
          }) ;
        
              $("#divfaireuneannonce,#divboutiqueaffichag,#divfaireunepublication,#divmonboutique").css({
        
                'display': 'none' ,
              
                  }) ;
    }
    


  });

  
}


function stel(){
  $("#divtel").css({
    'display':  'block',
    'height':  '27%',
});
    
$(".changercontenut,#inputtel,#validertel").css({
                       
'opacity':  '1',
         });
         $("#inputtel").css({
          'display':  'block',
          
      });
        
$('#validertel').height((Y*1.5)/100)
$('#inputtel').height((Y*1.5)/100)


          
               showtel = true
}
function htel(){
  
 
  $("#divtel").css({
    'display':  'block',
    'height':  '0%',
});
    
$(".changercontenut,#inputtel,#validertel").css({
                       
                'opacity':  '0',
                         });
              
                         $("#inputtel").css({
                          'display':  'none',
                          
                      });        
               $('#validertel').height((Y*0)/100)
               $('#inputtel').height((Y*0)/100)
    
          
               showtel = false
}
function showhideTel(){
  if(showtel!=true){
    stel()
   
  }
  else {
    htel()
  }
}

function hemail(){
  $("#divemail").css({
    'display':  'block',
    'height':  '0%',
});
    
$(".changercontenue,#inputemail,#valideremailp").css({
                       
                'opacity':  '0',
                         });
                         $("#inputemail").css({
                          'display':  'none',
                          
                      });
                        
               $('#valideremailp').height((Y*0)/100)
               $('#inputemail').height((Y*0)/100)
    
  showemail = false
}
function semail(){
  $("#divemail").css({
    'display':  'block',
    'height':  '22%',
});

 



         
$(".changercontenue,#inputemail,#valideremailp").css({
                       
                'opacity':  '1',
                         });
              
                         $("#inputemail").css({
                          'display':  'block',
                          
                      });
               $('#valideremailp').height((Y*1.5)/100)
               $('#inputemail').height((Y*1.5)/100)
    
          
  showemail = true
}
function htmlMyBouApercuRes(){
  
  
 
  $("#divboutiqueaffichag").html('')
   var image = '<div id="divimgapercubres">  <img id="imgapercubres" src ="public/image/vente/dc0/b9.jpg"></img> </div>'
 var divprix = ' <div id="divprixaffres"><label id="prixaffichlabres"> prix  </label>  <label id="prixaffichres">10000 </label></div> '
 var divajousup = '<div id="divcontrolaffres"><img class="buttonaffichres"  src ="public/image/acceuil/plus.png"/> <img class="buttonaffichres"  src ="public/image/acceuil/sup.png"/> </div>'
 
 $("#divboutiqueaffichag").append(image)
   $("#divboutiqueaffichag").append(divprix)
   $("#divboutiqueaffichag").append(divajousup)


  }
function showhideEmail(){
  if(showemail!=true){

    semail()
  }
  else {
    hemail()
  }
}
function hreseauResponse(){
 
  $("#divreseauso").css({
    'display':  'block',
    'height':  '0%',
     '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
     });
     $(".divreseauso").eq(0).css({
    
     'height':  '0%'
          });
          $(".divreseauso").eq(1).css({
    
            'height':  '0%'
                 });
          $(".iconreseau").height((0*Y)/100)
          $(".iconreseaub").height((0*Y)/100)
          $("#inputresaeu,#inputvaliderresaeu").css({
          
            'opacity':  '0',
            
   
                 });

            //     $("#inputresaeu").height((0*Y)/100)
            $("#inputresaeu,#inputvaliderresaeu").css({
              'display':  'none',
                 });
          
          
     showres = false
}
function hreseau(){
 
  $("#divreseauso").css({
    'display':  'block',
    'height':  '0%',
     '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
     });
     $(".divreseauso").eq(0).css({
    
     'height':  '0%'
          });
          $(".divreseauso").eq(1).css({
    
            'height':  '0%'
                 });
          $(".iconreseau").height((0*Y)/100)
          $(".iconreseaub").height((0*Y)/100)
          $("#inputresaeu,#inputvaliderresaeu").css({
          
            'opacity':  '0',
            
   
                 });

            //     $("#inputresaeu").height((0*Y)/100)
            $("#inputresaeu,#inputvaliderresaeu").css({
              'display':  'none',
                 });
          
          
     showres = false
}
function sreseauResponse(){

  $("#divreseauso").css({
    'display':  'block',
      'height':  '25%',
     '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
     });
     $(".divreseauso").eq(0).css({
    
      'height':  '30%'
           });
     $(".divreseauso").eq(1).css({
      
      'height':  '30%'
           });
           $(".iconreseau").height((1.5*Y)/100)
           $(".iconreseaub").height((1.5*Y)/100)

           $("#inputresaeu").css({
          
         //  'height':  '30%',
           
  
                });
              //  $("#inputresaeu").height((3*Y)/100)
                $("#inputresaeu,#inputvaliderresaeu").css({
          
                  'opacity':  '1',
                  
         
                       });
                       $("#inputresaeu,#inputvaliderresaeu").css({
                        'display':  'block',
                           });
     showres = true
}
function sreseau(){

  $("#divreseauso").css({
    'display':  'block',
      'height':  '45%',
     '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
     });
     $(".divreseauso").eq(0).css({
    
      'height':  '30%'
           });
     $(".divreseauso").eq(1).css({
      
      'height':  '30%'
           });
           $(".iconreseau").height((3*Y)/100)
           $(".iconreseaub").height((3*Y)/100)

           $("#inputresaeu").css({
          
          'margin-top':  '4%',
           
  
                });
              //  $("#inputresaeu").height((3*Y)/100)
                $("#inputresaeu,#inputvaliderresaeu").css({
          
                  'opacity':  '1',
                  
         
                       });
                       $("#inputresaeu,#inputvaliderresaeu").css({
                        'display':  'block',
                           });
     showres = true
}

function hideShowReseau(){


  if(showres){
    if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
      hreseauResponse()
     } else {
      hreseau()
    }
    
    
  
  }
  else {
    if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
      sreseauResponse()
     } else {
      sreseau()
    }
    
  }
 

}
function controlReseauInput(){

  $('#inputvaliderresaeu').click(function(){

    var val =  $("#inputresaeu").val() ;
   // alert(val)
  }) ;



  $('.iconreseau').hover(function(){
    var i  = $(this).index()


    var tab = ['facebook.png','twitter.png','insta.png','youtube.png']
    var tabb = ['www.facebook.com/jdjhefecnkjce','www.twitter.com/jdjhefecnkjce','www.instagramme.com/jdjhefecnkjce','www.youtube.com/jdjhefecnkjce']
    
    $(".iconreseaub").attr("src", "public/image/acceuil/" + tab[i]) ;
    $("#inputresaeu").val(tabb[i]) ;
   
    
    
    $(".iconreseau").eq(i).css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $(".iconreseau").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
}
function apercuImageChange(){
  

   $('#profa').on('load', function(){
  imgpachanged = true
    
   
   });

}

function validerModificationPhotop(){
  $("#validerchangep").click(function(){

    var nom =  $("#inputprofilea").val()
    var prenom =  $("#inputprofileb").val()
  
    var name = namepro
    $.ajax({
      
  url:"/validermodificationpro?nom="+ nom + "&prenom=" + prenom + "&idc=" + idClient + "&name=" + name,
  
     success:function(data) {
      updatProfileMenu( name , nom , prenom)
      $("#divtabprofile").css({
          'opacity': '0',
          '-webkit-transition': '.4s ease-in-out',
          'transition': '.4s ease-in-out ', 
      
            }) ;
          $('#modifierprofb').css({
            
            'display': 'block' ,
          
              }) ;
              $("#divprofileb").css({
          
                '-webkit-transition': '.8s ease-in-out',
                'transition': '.8s ease-in-out ', 
            
                'transform': 'rotate(0deg)',
          
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
              
                 
                }) ;
                 nompro = false
 prenompro = false
  imgpro = false
              
                greenValiderProfile()
     }
  });

});


}

function hoverclickDevenir(){
  $('#lbb').click(function(){
   
    
    $("#connecter,#lbb").css({
      'display': 'none' ,
     
        }) ;
        $("#divenregistrer").css({
          'display': 'block' ,
         
            }) ;


        }) ;


  $('#lbb').hover(function(){
   
    
    $("#lbb").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#lbb").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
}
function hoverclickItemProfileb(){
  $('#menuprofileb0').hover(function(){
   
    
    $("#menuprofileb0").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb0").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });

  $('#menuprofileb1').hover(function(){
   
    
    $("#menuprofileb1").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb1").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
  $('#menuprofileb2').hover(function(){
   
    
    $("#menuprofileb2").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb2").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });

  $('#menuprofileb3').hover(function(){
   
    
    $("#menuprofileb3").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb3").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
  $('#menuprofileb4').hover(function(){
   
    
    $("#menuprofileb4").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb4").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
  $('#menuprofileb5').hover(function(){
   
    
    $("#menuprofileb5").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb5").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
  $('#menuprofileb6').hover(function(){
   
    
    $("#menuprofileb6").css({
      'box-shadow': '1px 1px 3px #555 inset' ,
      'background':'white'
        }) ;


    },function(){
        $("#menuprofileb6").css({
            'box-shadow': '1px 1px 3px #555' ,
            'background':'rgba(233,0,0,0.1)',
      }) ;
        
  });
  $("#menuprofileb0").click(function(){
    suggererIdeeFromProf()
  });
  $("#menuprofileb1").click(function(){
    hideShowReseau()
    htel()
    hemail()
    hpasse()
      });
      $("#menuprofileb2").click(function(){
        showDivMoDePasse()
        htel()
hemail()
hreseau()

         });
          $("#menuprofileb3").click(function(){
            showhideEmail()
            htel()

hpasse()
hreseau()
              });
              $("#menuprofileb4").click(function(){
                showhideTel()
             
hemail()
hpasse()
hreseau()
                  });
                  $("#menuprofileb5").click(function(){
                    deconnection() 
                      });
                     
  
}

function validerNewPasse(){
  $("#validerpassepb").click(function(){
    var apasse = $(".inputpasse").eq(0).val()
    var npasse = $(".inputpasse").eq(1).val()
  //  alert(apasse + npasse)
      });
}
function spasse(){
  $("#divshowmot").css({
    'display':  'block',
    'height':  '37%',
});
     $("#tabmotpasse").css({
      '-webkit-transition': '.8s ease-in-out',
        'transition': '.8s ease-in-out ', 
         'height':  '50%',

  
               });
               $(".tdtitrep").css({
                       
                'opacity':  '1',
                         });
               $(".trdiv").css({
               
                 'height':  '40%',
              
                         });
                         $(".inputpasse").css({
                          'display':  'block',
                          
                      });
                        
               $('.inputpasse').height((Y*1.5)/100)
               $('#validerpassepb').height((Y*1.5)/100)
     $(".changercontenu,.inputpasse,#validerpassepb").css({
     
     
      'opacity':  '1',
     
         
         });
         
          
     showdivpasse = true
}

function hpasse(){
  $("#divshowmot").css({
    'display':  'block',
    'height':  '0%',

     });
     $(".changercontenu,.inputpasse,#validerpassepb").css({
      'opacity':  '0',
     
          });
         $("#tabmotpasse").css({
          'height':  '0%',
          '-webkit-transition': '.8s ease-in-out',
          'transition': '.8s ease-in-out ', 
         
                   });
                   $(".inputpasse").css({
                    'display':  'none',
                    
                });
                   $('.inputpasse').height((Y*0)/100)
                  $('#validerpassepb').height((Y*0)/100)
                   $(".trdiv").css({
                    
                    'height':  '0%',
                  
                             });
                             $(".tdtitrep").css({
                       
                              'opacity':  '0',
                                       });
     showdivpasse = false
    
}
function showDivMoDePasse(){
  
 

    if(showdivpasse!=true){
      spasse()
     
    }
    else {
      hpasse()
    }
}

function updateServiceLength(){
 var data  =  countService()
 $(".tdcount").eq(0).text( data[0])
 $(".tdcount").eq(1).text( data[1])
 $(".tdcount").eq(2).text( data[2])
   
 
}


function countService(){
  var data  = []
  data.push(publicationClient.length)
 data.push(annonceClient.length)
 data.push(boutiqueClient.length)
  return data ;
}
  
function suggererIdeeFromProf(){
  $(".n1 , #moncidiv").css({
                                                                         
          
    'border': 'none',
     

     
     'font-size': '18px' ,
     'background-color': 'transparent' ,
    }); 

    $(".n1").eq(2).css({
    
     'border-top': '1px solid black',
     'border-left': '1px solid black',
     'border-right': '1px solid black',
     'background-color': 'white' ,
               });
              
$(".page").css({

'display': 'none' ,


});
$(".pagem").css({

'display': 'none' ,


});
                $(".page").eq(2).css({
                
                 'display': 'block' ,
        
           
                });
  $('#divsuggerer').click()
  $('#textasugerer').focus()
  
}

function validerNouveauProduit(){
  $("#valideraffich").click(function(){


    if ( globalVerifiebou){
      var prix =  $("#inputaffprix").val()
         var categorie = $("#selectcategvente").val()
     $.ajax({
       
      url:"/validernouveaup?prix="+ prix + "&name=" + namebou  + "&idc=" + idClient + "&categorie=" + categorie,
   
       success:function(data) {
        vente = listerTousVente()

        boutiqueClient = boutiqueToid( vente , idClient)
  
        creatBoutique()
           clickItemClumBoutique()
      
           $("#valideraffich,#divinputprixaff").css({
            //  'border': '1px solid green',
              'display':'none',
            }) ;
            $("#divcontrolaff, #divprixaff").css({
              //  'border': '1px solid green',
                'display':'block',
              }) ;


                $("#inputaffprix").val('')
               // $("#selectcategvente").val('')
       
    
       }
      
    }); 

   

    
    }
   
  });

  
}

function boutonInputClicka(){

  


  $('.submita').click( function (e) {
    e.preventDefault()
    var i  = $(this).parent().parent().index() 
    
    var n =  $(".fileupdatea").eq(i).val()

    if(n.length >= 3){
     
     $(".myForma").eq(i).submit()
    // $("#submitpro").click()
    }else {
      $(".fileupdatea").eq(i).css({
      
        'display': 'block' ,
  
          }) ;
          $(".submita").eq(i).css({
              
            'display': 'none' ,
        
              }) ;

              

    }
    
   
  });

  $(".fileupdatea").click(function(){

    //var i  = $(this).parent().index() 
    var i  = $(this).parent().parent().index() 
 
  if(is.ie()){
    $(".fileupdatea").eq(i).css({
    
      'display': 'none' ,
  
        }) ;
        $(".submita").eq(i).css({
            
          'display': 'block' ,
      
            }) ;

          }
          
  });


  $(".unitepubimagebout").click(function(){

    var i  = $(this).parent().index() - 2

   
    $("#myForma").remove()
    
    
    $("#divannoncereg").append('<form  id = "myForma" action ="/uploada" method="POST" enctype="multipart/form-data"> <input id="fileupdatea" type="file" name="filesa"  style="display: none;">  </input>  <input type="submit"  id="submita"  value="submit"  style="display:none;"> </input> </form>')
    
   $("#fileupdatea").click()
 
   inputFileChangeda(i)


  });

  
}
function creatBoutique(){

  
 // boutiqueClient = boutiqueToid( datab , idClient)
 
  
  if(boutiqueClient!= null && boutiqueClient!=0){
    $('.rowMybout').remove()
    $('#divboutiqueprduitMy').html('')
    // $('#divventeb').append( '<div class="rowb"></div>')
     $('#divboutiqueprduitMy').append( '<div class="rowMybout"></div>')
  
    // $('#divboutiueproduit').append( rowb)
    
     for( var a = 0  ; a < boutiqueClient.length;a++){
     var clonne  = createHtmlBoutique(boutiqueClient[a])
          $('.rowMybout').append( clonne)
     }
     var name = boutiqueClient[0].image
     var prix = boutiqueClient[0].prix
   
     idmarch = boutiqueClient[0].id
     updateImageApercu(name , idClient , prix)
     clickItemClumBoutique()
     $(".cardMybout").eq(0).css({
   'border': '1px solid rgba(233,0,0,0.5)',
   
            });
  }
  else {
    $('#divboutiqueprduitMy').html('')
    var label = '<label id="labelNewbou"> ajoutes des articles  à la boutique</label>'
  var boutonimg = '<img id="buttonaffich"  src ="public/image/acceuil/plus.png"/>'
    $('#divboutiqueprduitMy').append( label + boutonimg)
    

    $("#divboutiqueaffichag").css({
  'display': 'none',
  
           });
           cssBoutiqueVide()
           ajouterPremierAr()
  }
 
        
}

function hoverSupprimerAjouter(){
   
   
            
    $('.buttonaffich').hover(function(){
      var i  = $(this).index()

      
      $(".buttonaffich").eq(i).css({
        'box-shadow': '1px 1px 3px #555 inset' ,
          }) ;

  
      },function(){
          $(".buttonaffich").css({
              'box-shadow': '1px 1px 3px #555' ,
        }) ;
          
    });



     
  
}

function createHtmlBoutiqueAjout( idc , prix , image){

  
  var dir = 'dc' + idc
  
    
    var divlab = '<div class="divlabMycomptc"><label class="divlabMycompta">prix</label><label class="divlabMycompb">' + prix + ' F</label> <label class="divlabbb" style="display: none;">' + idc+ ' </label>   </div>'
    var clonne = '<div class="columnMybout"> <div class="cardMybout"> <img class="iconeMybout" src ="public/image/boutique/' + dir + '/' +image + '"></img>'+ divlab+ '</div></div>'  
   
  
   return clonne
  
  
      }

      function clickModifierProfile(){
        $("#modifierprofb").click(function(){
          
          $("#divprofileb").css({
          
            '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
        
            'transform': 'rotate(0deg)',
      
            '-ms-transform': 'translateX(-115%)',
            'transform': 'translateX(-115%)',
          
             
            }) ;
            $("#divtabprofile").css({
          
              '-webkit-transition': '4s ease-in-out',
              'transition': '4s ease-in-out ', 
          
              'opacity': '1',
              
              }) ;

              $("#modifierprofb").css({
          
               
                'display': 'none',
                
                }) ;
        });

      }
      function updatProfileMenu( image , nom , prenom){
        
        $("#profileimage").attr("src", "public/image/profile/"  + image) ;
        $("#profb").attr("src", "public/image/profile/"  + image) ;

        
     var name = prenom + ' ' + nom
        $("#labelprofileimage").text(name)
        $("#nompb").text(name)
      
       //  $("#inputprofilea").val(nom)
       // $("#inputprofileb").val(prenom )
        
        
      }

      function clickModifierPhotoProfile(){

        $('#submitpro').click( function (e) {
          e.preventDefault()
          var n =  $("#fileupdatepro").val()

          if(n.length >= 3){
           
           $("#myFormpro").submit()
          // $("#submitpro").click()
          }else {
            $("#fileupdatepro").css({
            
              'display': 'block' ,
        
                }) ;
                $("#submitpro").css({
                    
                  'display': 'none' ,
              
                    }) ;

          }
         
         
        });

        $('#fileupdatepro').click( function () {
         
          if(is.ie()){
            $("#fileupdatepro").css({
            
              'display': 'none' ,
          
                }) ;
                $("#submitpro").css({
                    
                  'display': 'block' ,
              
                    }) ;
          }
          
        });
        $('#inputprofilec').click( function () {
          inputFileChangedpro()
          $('#fileupdatepro').click()
         
       
          
        });
      }

      function verifierInputP(){
        $('#inputprofilea').keyup( function () {
  
          var  nom = $(this).val()
          
            if( nom.length >= 3 &&  nom.length <= 15  && /[a-zA-Z0-9]+/.test(nom)){
              nompro = true
              $('#inputprofilea').css({
                'border-bottom': '1px solid #999',
               });
            }
            else {
              
              nompro = false
              $('#inputprofilea').css({
              
                'border-bottom': '1px solid red',
               });

            }
            greenValiderProfile()
          });

          $('#inputprofileb').keyup( function () {
  
            var  nom = $(this).val()
            
              if( nom.length >= 3 &&  nom.length <= 15  && /[a-zA-Z0-9]+/.test(nom)){
                prenompro = true
                $('#inputprofileb').css({
                //  'border': '1px solid green',
                'border-bottom': '1px solid #999',
                 });
              }
              else {
                prenompro = false
                $('#inputprofileb').css({
                  'border-bottom': '1px solid red',
                //  'color': 'red',
                 });
              }
              greenValiderProfile()
            });
    
      }
      function greenValiderProfile(){
        if( nompro == true && prenompro == true && imgpro == true  ){
         $('#validerchangep').css({
          'display': 'block',
          });
          $('#validerchangepo').css({
            'display': 'none',
            });
          verifiepro=true
        } else {
          $('#validerchangepo').css({
            'display': 'block',
            });
            $('#validerchangep').css({
              'display': 'none',
              });
            verifiepro=false
        }
    }
function createHtmlBoutique(data){

  
var dir = 'dc' + data.idc

  
  var divlab = '<div class="divlabMycomptc"><label class="divlabMycompta">prix</label><label class="divlabMycompb">' + data.prix + ' F</label> <label class="divlabbb" style="display: none;">' + data.idc + ' </label>   </div>'
  var clonne = '<div class="columnMybout"> <div class="cardMybout"> <img class="iconeMybout" src ="public/image/vente/' + dir + '/' +data.image + '"></img>'+ divlab+ '</div></div>'  
 

 return clonne


    }

    function updateImageApercu(r , idc , prix){
      var dir = 'dc' + idc

      $(".iconec").attr("src", "public/image/vente/" +dir + '/' + r) ;

      $("#prixaffich").text(prix + 'F')

   


  }

    function ajouterNMarchadise(){
      $('#submitbou').click( function (e) {
        e.preventDefault()
        var n =  $("#fileupdatebou").val()

        if(n.length >= 3){
         
         $("#myFormbou").submit()
        // $("#submitpro").click()
        }else {
          $("#fileupdatebou").css({
          
            'display': 'block' ,
      
              }) ;
              $("#submitbou").css({
                  
                'display': 'none' ,
            
                  }) ;

        }
       
       
      });


      $("#fileupdatebou").click(function(){
     
        if(is.ie()){
          $("#fileupdatebou").css({
          
            'display': 'none' ,
        
              }) ;
              $("#submitbou").css({
                  
                'display': 'block' ,
            
                  }) ;


                }
   
      }) ;


      $("#inputajouterphoto").click(function(){
        ajouterMarchForm()
      }) ;
      $(".buttonaffich:eq(0)").click(function(){
      
        
      
       
  

       $("#valideraffichl,#divinputprixaff").css({
        //  'border': '1px solid green',
          'display':'block',
        }) ;
        $("#divcontrolaff, #divprixaff").css({
          //  'border': '1px solid green',
            'display':'none',
          }) ;


            }) ;
    }

    function ajouterMarchForm(){
      $("#myFormbou").remove()
    
    
      $("#divmonboutique").append('<form  id = "myFormbou" action ="/uploadbou" method="POST" enctype="multipart/form-data">    <input id="fileupdatebou" type="file" name="filesbou"  style="display: none;">  </input>  <input type="submit"  id="submitbou"  value="submit"  style="display:none;">  </input>   </form>')
      
     $("#fileupdatebou").click()
   
     inputFileChangedbou()
     
    }

    function ajouterPremierAr(){
      $("#buttonaffich").click(function(){
        
        $("#divboutiqueaffichag").css({
          //  'border': '1px solid green',
            'display':'block',
          }) ;
        $("#myFormbou").remove()
    
    
        $("#divmonboutique").append('<form  id = "myFormbou" action ="/uploadbou" method="POST" enctype="multipart/form-data">    <input id="fileupdatebou" type="file" name="filesbou"  style="display: none;">  </input>  <input type="submit"  id="submitbou"  value="submit"  style="display:none;">  </input>   </form>')
        
       $("#fileupdatebou").click()
     
       inputFileChangedbou()
       
       


       $("#valideraffich,#divinputprixaff").css({
        //  'border': '1px solid green',
          'display':'block',
        }) ;
        $("#divcontrolaff, #divprixaff").css({
          //  'border': '1px solid green',
            'display':'none',
          }) ;


            }) ;

    }

    function supprimerMarchadise(){
    
      $("#inputvalidersup").click(function(){

         
        

        $.ajax({
       
          url:"/supprimermarchadise?idp=" + idmarch,
              async: false,  
           success:function(data) {
             boutique = listerTousBoutique()

            creatBoutique(boutique)
               clickItemClumBoutique()
              
           }
        }); 
        

        $("#divalidersup").css({
            
          'display': 'none' ,
      
            }) ;

            $("#divcontrolaff").css({
            
              'display': 'block' ,
          
                }) ;
                
      }) ;

      $(".buttonaffich:eq(1)").click(function(){
      
     
        $("#divalidersup").css({
            
          'display': 'block' ,
      
            }) ;

            $("#divcontrolaff").css({
            
              'display': 'none' ,
          
                }) ;


       
        
            }) ;
    }


function inputFileChangeda(i){
  $("#fileupdatea").change(function(){
    
    uploadImagea(i)

   $("#submita").click()

  });

  
}

function inputFileChangedbou(){
  $("#fileupdatebou").change(function(){
    uploadImagebou()
   
   $("#submitbou").click()
  
  });

  
}

function htmlForIe(){
  if(is.ie()){
    $("#fileupdatepro").css({
            
      'display': 'block' ,
  
        }) ;
        $("#inputprofilec").css({
            
          'display': 'none' ,
      
            }) ;
        uploadImagepro()
        
  
        $("#fileupdatebou").css({
            
          'display': 'block' ,
      
            }) ;
            $("#inputajouterphoto").css({
                
              'display': 'none' ,
          
                }) ;
                uploadImagebou()

                $(".fileupdatea").css({
            
                  'display': 'block' ,
              
                    }) ;
                    $(".unitepubimagebout").css({
                        
                      'display': 'none' ,
                  
                        }) ;
                        uploadImageiea()
                        $(".fileupdatep").css({
            
                          'display': 'block' ,
                      
                            }) ;
                            $(".buttonmodifie").css({
                                
                              'display': 'none' ,
                          
                                }) ;
                                uploadImageieb()
                                $(".divajouter").css({
                                
                                  'display': 'block' ,
                              
                                    }) ;
                                    $("#change").css({
                                
                                      'display': 'none' ,
                                  
                                        }) ;
       uploadImageTemporel()
  }
}
function inputFileChangedpro(){
 
 
    $("#fileupdatepro").change(function(){
   
      uploadImagepro()
     
     $("#submitpro").click()
    });
  

 
 

 
 
}

function updateimg(){
  alert('life is good')
}


function inputFileChangedp(i){
  $("#fileupdatep").change(function(){
    
    uploadImageb(i)

   $("#submitp").click()

  });

  
}
function uploadImageb(i) {
  $("#myFormp").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()
  var n =  $("#fileupdatep").val()
  var b  =  n.lastIndexOf('\\')
  var name =  n.substring(b + 1 ) 
 
  $.ajax({
        type: "POST",
        url: "/uploadp?name=" + name + "&id=" + idClient ,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){

      //    $(".unitepubimage").eq(i).attr("src", "public/image/publication/dc" + idClient + "/" + name) ;
      //    $(".tabpubimgab").eq(i).attr("src", "public/image/publication/dc" + idClient + "/" + name) ;
      
      $(".unitepubimage").eq(i).attr("src", "public/image/publication/temporel/" + r) ;
         $(".tabpubimgab").eq(i).attr("src", "public/image/publication/temporel/" + r) ;
      
        
         
           
          if(i==0){
            nimpa = true
            nompa = r
          }
         
         else if(i==1) {
           nimpb = true
           nompb = r
          }
           else if(i==2){
            nimpc = true
            nompc = r
          }
            else if(i==3){
              nimpd = true
              nompd = r
            }
              else if(i==4){
               nimpe =true
               nompe = r
              }
        
               verifietoutp()
          
        },
        error: function (e) {
            
        }
    });

});

}

function uploadImageieb() {
  $(".myFormp").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()

var i = $(this).parent().index()



  var n =  $(".fileupdatep").eq(i).val()
  var b  =  n.lastIndexOf('\\')
  var name =  n.substring(b + 1 ) 
 
  $.ajax({
        type: "POST",
        url: "/uploadp?name=" + name + "&id=" + idClient ,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){

      //    $(".unitepubimage").eq(i).attr("src", "public/image/publication/dc" + idClient + "/" + name) ;
      //    $(".tabpubimgab").eq(i).attr("src", "public/image/publication/dc" + idClient + "/" + name) ;
    
      $(".unitepubimage").eq(i).attr("src", "public/image/publication/temporel/" + r) ;
         $(".tabpubimgab").eq(i).attr("src", "public/image/publication/temporel/" + r) ;
      
         $(".fileupdatep").eq(i).css({
      
          'display': 'block' ,
    
            }) ;
            $(".submitp").eq(i).css({
                
              'display': 'none' ,
          
                }) ;
         
           
          if(i==0){
            nimpa = true
            nompa = r
          }
         
         else if(i==1) {
           nimpb = true
           nompb = r
          }
           else if(i==2){
            nimpc = true
            nompc = r
          }
            else if(i==3){
              nimpd = true
              nompd = r
            }
              else if(i==4){
               nimpe =true
               nompe = r
              }
        
               verifietoutp()
          
        },
        error: function (e) {
            
        }
    });

});

}

function uploadImagepro() {
  $("#myFormpro").submit(function (e) {
    e.preventDefault();
   
    
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()
  var n =  $("#fileupdatepro").val()
  var b  =  n.lastIndexOf('\\')
   namepro =  n.substring(b + 1 ) 
  
  $.ajax({
        type: "POST",
        url: "/uploadpro?name=" + namepro  ,
        data: formData,
      //  data: $(this).serialize(),
        cache: false,
        processData: false,
        contentType: false,
        success: function(r){
 
          if(is.ie()){
            $("#fileupdatepro").css({
            
              'display': 'block' ,
        
                }) ;
                $("#submitpro").css({
                    
                  'display': 'none' ,
              
                    }) ;
              }
          imgpro = true
      
          greenValiderProfile()
          
     $("#profb").attr("src", "public/image/temporel/" + r) ;
    
    
  //   verifietoutAffbou()
      
        
         
           
       
          
        },
        error: function (e) {
            
        }
    });
     
   

});

}


function uploadImagebou() {
  $("#myFormbou").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()
  var n =  $("#fileupdatebou").val()
  var b  =  n.lastIndexOf('\\')
   namebou =  n.substring(b + 1 ) 
  
  $.ajax({
        type: "POST",
        url: "/uploadbou?name=" + namebou  ,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){

          imgaffb = true
        //  apercuImageChange()
        if(is.ie()){
          $("#fileupdatebou").css({
          
            'display': 'block' ,
      
              }) ;
              $("#submitbou").css({
                  
                'display': 'none' ,
            
                  }) ;
            }

     $(".iconec").attr("src", "public/image/vente/temporel/" + r) ;
     
    
     verifietoutAffbou()
      
        
         
           
       
          
        },
        error: function (e) {
            
        }
    });

});

}
function uploadImagea(i) {
  $("#myForma").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()
  var n =  $("#fileupdatea").val()
  var b  =  n.lastIndexOf('\\')
// var name =  (i +1)+ n.substring(b ) 
var name =  n.substring(b +1 ) 
  
  $.ajax({
        type: "POST",
        url: "/uploada?name=" + name + "&id=" + idClient ,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){

         
             //  'background':'rgba(160,255,255,0.1)',
          //'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(public/image/decor/bb.jpg)',
          
          
    //      $(".unitepubimagea").eq(i).remove()
          
     //     $(".divunitepubimagea").eq(i).append('<img class="unitepubimagea" src ="public/image/logo/1.png" alt="1"/> ')
        $(".unitepubimagea").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
        $(".unitepubimagea").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
      
        
        $(".imgannab").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
        $(".imgannab").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
      
        //  $(".unitepubimage").eq(i).attr("src", "public/image/temporela/" +  name) ;
     
      
        if( i== - 2){
          var n =  $(".imgannab").eq(0).attr("src")
    
          var b  =  n.lastIndexOf('/')
         nimga =  n.substring(b +1 ) 
         
        }
        else {
          var n =  $(".imgannab").eq(1).attr("src")
        
          var b  =  n.lastIndexOf('/')
         nimgb =  n.substring(b +1 ) 
         
        }
        
     
       verifietout()
        },
        error: function (e) {
            
        }
    });

});

}

function uploadImageiea() {
  $(".myForma").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
//   var classe =  $('.inputa').eq(0).val()

var i = $(this).parent().index()
//alert(i)
var n = ''
var b = ''

  n =  $(".fileupdatea").eq(i).val()
  b  =  n.lastIndexOf('\\')


 
// var name =  (i +1)+ n.substring(b ) 
var name =  n.substring(b +1 ) 
  
  $.ajax({
        type: "POST",
        url: "/uploada?name=" + name + "&id=" + idClient ,
        data: formData,
        processData: false,
        contentType: false,
        success: function(r){

          
          $(".unitepubimagea").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
          $(".unitepubimagea").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
        
          
          $(".imgannab").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
          $(".imgannab").eq(i).attr("src", "public/image/annonce/temporel/" +  r) ;
      
          $(".fileupdatea").eq(i).css({
      
            'display': 'block' ,
      
              }) ;
              $(".submita").eq(i).css({
                  
                'display': 'none' ,
            
                  }) ;
        if( i== 0){
          var n =  $(".imgannab").eq(0).attr("src")
    
          var b  =  n.lastIndexOf('/')
         nimga =  n.substring(b +1 ) 
         
        }
        else {
          var n =  $(".imgannab").eq(1).attr("src")
        
          var b  =  n.lastIndexOf('/')
         nimgb =  n.substring(b +1 ) 
         
        }
        verifietout()


   
     },
     error: function (e) {
         
     }
 });

});

}
function themeChange( ){
  
  $("#selectheme").change(function(){

  
   // alert( $(this).val())
    $("#imgannoncb").attr("src", "public/image/decor/" +$(this).val() + ".jpg") ;
      
  }) ;

}

function faireUnePublication(){
    
    $("#boutonfairep").click(function(){
        
        $("#divfaireunepublication").css({
            
          'display': 'block' ,
        
            }) ;
            $("#divproileacceuil").css({
            
              'display': 'none' ,
            
                }) ;
                $("#divmonboutique").css({
          
                  'display': 'none' ,
                
                    }) ;

      });
}


function faireUneAnnonce(){
    
  $("#boutonfairea").click(function(){
      
      $("#divfaireuneannonce").css({
          
        'display': 'block' ,
      
          }) ;
          $("#divproileacceuil").css({
          
            'display': 'none' ,
          
              }) ;
              $("#divmonboutique").css({
          
                'display': 'none' ,
              
                  }) ;
              

    });
}

function monBoutique(){
    
  $("#boutonmonboutique").click(function(){
      
      $("#divfaireuneannonce").css({
          
        'display': 'none' ,
      
          }) ;

          $("#divproileacceuil").css({
          
            'display': 'none' ,
          
              }) ;
              $("#divmonboutique,#divboutiqueaffichag").css({
          
                'display': 'block' ,
              
                  }) ;
              

    });
}

function validerChangementA(){
  
  $("#validerChangementa").click(function(){
      
    if(globalVerifie){
      var result = ""
      var texta =  $("#textarea").val()
      var image = nimga +"," + nimgb +","
      var title = $("#inputextannonce").val()
      var theme = $("#selectheme").val()
  
     $.ajax({
       
      url:"/validerannoce?idc="+ idClient + "&texta=" + texta + "&image=" + image + "&title=" + title + "&theme=" + theme,
          async: false,  
       success:function(data) {
           result = data
           alert('annonce')
           $(".unitepubimagea").eq(0).attr("src", "public/image/logo/1.png") ;
           $(".unitepubimagea").eq(1).attr("src", "public/image/logo/2.png") ;
  
           $("#inputextannonce").val('')
           $("#textarea").val('')
           
       }
    }); 

    }
   
    
  }) ;
 }


 function validerChangementP(){
  
  $("#validerChangementp").click(function(){
    if(globalVerifiep){
    var result = ''
    
    var categorie = $("#selectcateg").val() 
    var image = nompa +"," + nompb +","+nompc +"," + nompd +","+ nompe +","

  var title = $("#namepublicationi").val()

    $.ajax({
      
      url:"/validerpublication?idc="+ idClient+ "&categorie=" + categorie + "&title=" + title  + "&image=" + image   ,
          async: false,  
       success:function(data) {
           result = data
           

           $(".unitepubimage").eq(0).attr("src", "public/image/logo/1.png") ;
           $(".tabpubimgab").eq(0).attr("src", "public/image/logo/1.png") ;
           $(".unitepubimage").eq(1).attr("src", "public/image/logo/2.png") ;
           $(".tabpubimgab").eq(1).attr("src", "public/image/logo/2.png") ;
           $(".unitepubimage").eq(2).attr("src", "public/image/logo/3.png") ;
           $(".tabpubimgab").eq(2).attr("src", "public/image/logo/3.png") ;
           $(".unitepubimage").eq(3).attr("src", "public/image/logo/4.png") ;
           $(".tabpubimgab").eq(3).attr("src", "public/image/logo/4.png") ;
           $(".unitepubimage").eq(4).attr("src", "public/image/logo/5.png") ;
           $(".tabpubimgab").eq(4).attr("src", "public/image/logo/5.png") ;
       
      
          }
    });  

    }
    
  }) ;
 }


 function validerTextarea(){
  
  $("#textarea").keyup(function(){
      
   
    $(".annonceslabb").text($("#textarea").val())
    

   
    
  }) ;

  
 }

 function verifierPrix(){
 
  
  $('#inputaffprix').keyup( function () {

    var  nom = $(this).val()
    
      if( nom.length >= 3 &&  nom.length <= 15  && /[0-9.]+/.test(nom)){
        prixb = true
      
         
      }
      else {
        prixb = false
       
         
      }
      verifietoutAffbou()
    });

  }

 function verifierTitreP(){
 
  
  $('#namepublicationi').keyup( function () {

    var  nom = $(this).val()
    
      if( nom.length >= 3 &&  nom.length <= 30  && /[a-zA-Z0-9]+/.test(nom)){
        titlep = true
      
      }
      else {
        titlep = false
        
      }
      verifietoutp()
    });

  }

 function verifierAnnonce(){
 
  
  $('#inputextannonce').keyup( function () {

    var  nom = $(this).val()
    
      if( nom.length >= 3 &&  nom.length <= 22  && /[a-zA-Z0-9]+/.test(nom)){
        titleb = true
        $('#validerChangementa').css({
          'color': 'yellow',
         });
      }
      else {
        titleb = false
        $('#validerChangementa').css({
          'color': 'red',
         });
      }
      verifietout()
    });

    $('#textarea').keyup( function () {

      var  nom = $(this).val()
    
      if( nom.length >= 15 &&  nom.length <= 400  && /[a-zA-Z0-9]+/.test(nom)){
        textab = true
        $('#validerChangementa').css({
          'color': 'yellow',
         });
      }
      else {
        textab = false
        $('#validerChangementa').css({
          'color': 'red',
         });
      }
      verifietout()
      });
      
  }
  function verifietoutAffbou(){
    
    
   
    if( imgaffb == true && prixb == true  ) {
      
        $('#valideraffich').css({
          'display': 'block',
         });
         $('#valideraffichl').css({
          'display': 'none',
         });
         globalVerifiebou = true
       }
       else {
        $('#valideraffich').css({
          'display': 'none',
         });
         $('#valideraffichl').css({
          'display': 'block',
         });
         globalVerifiebou = false
       }

      }


  function verifietoutp(){
    
    
   
      if( nimpa == true && nimpb == true && nimpc == true && nimpd == true && nimpe == true && titlep == true ) {
        
          $('#validerChangementp').css({
            'color': 'green',
            'pointer-events': '',
           });
            globalVerifiep = true
         }
         else {
          $('#validerChangementp').css({
            'color': 'yellow',
            'pointer-events': 'none',
           });
         
           globalVerifiep = false
         }

        }

  function verifietout(){

    
    if(avecimageb){
   
      if( nimga.length >= 1 && nimgb.length >= 1 && titleb == true && textab == true ) {
        
          $('#validerChangementa').css({
            'color': 'green',
           });
           
           globalVerifie = true
         }
         else {
          $('#validerChangementa').css({
            'color': 'yellow',
           });
           globalVerifie = false
         }
        }
        else {
          if( titleb == true && textab == true ) {
        
            $('#validerChangementa').css({
              'color': 'green',
             });
             globalVerifie = true
      
           }
           else {
            $('#validerChangementa').css({
              'color': 'yellow',
             });
             globalVerifie = false
           }
        }
    
        
    
  
  }
 function radioClicked(){
  
  $("#labelora, #ajouterimagesi").click(function(){
      
    
   
    //$(".annonceslabb").text($("#textarea").val())  
    
    // $("#ajouterimagesi").prop("checked", true)
  
    if($("#ajouterimagesi").is(':checked')){
      avecimageb = true
      $("#divajouterimg, .imgannab").css({
          
        'display': 'block' ,
      
          }) ;
          verifietout()
    }
   
    else{
      avecimageb = false
      $("#divajouterimg , .imgannab").css({
          
        'display': 'none' ,
      
          }) ;

    }
   
   // $("#ajouterimagesi").attr('checked', true)
  // $("#ajouterimagesi").prop("checked", true).change()
   //else
  // $("#ajouterimagesi").prop("checked", true).change()
    
  }) ;
 }


 