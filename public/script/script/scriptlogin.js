
clickAjouter()
animpublicite()
validerInputLogin()
clickSenregistrer()
clickannulerEnr()
validerInputLogin()
validerInputEnrLogin()

inputFileChanged()
clickChangePro()
validerEnregistrement()
//clickDevenirAnnonceur()

clickValider()

$('.in').val('')
$('.inb').val('')


var verifie = false
var verifieb = false

var vpas = false
  var vp = false


  var nomb = false
  var prenomb = false
  var telb = false
  var passb = false
  var imgb = false
  var imgpachanged = false


  var nom 
var prenom
var nameimgb
  function conn(nom , prenom , id , image) {
    var result = ""
   $.ajax({
     
    url:"/cnt?name="+ nom + "&prenom=" + prenom + "&id=" + id+ "&image=" + image,
        async: false,  
     success:function(data) {
         result = data
         
     }
  });
  
  return result
    
  }


  function validerInputEnrLogin(){
 
  
    $('.in').eq(0).keyup( function () {
  
      var  nom = $(this).val()
      
        if( nom.length >= 3 &&  nom.length <= 8  && /[a-zA-Z0-9]+/.test(nom)){
          nomb = true
         
           $('.in').eq(0).css({
            'border': '',
       
           });
        }
        else {
          nomb = false
         
           $('.in').eq(0).css({
          //  'border': '1px solid rgba(233,0,0,0.1)',
            'border': '1px solid red',
          });
        }
        greenValider()
      });


      $('.in').eq(1).keyup( function () {
  
        var  nom = $(this).val()
        
          if( nom.length >= 3 &&  nom.length <= 8  && /[a-zA-Z0-9]/.test(nom)){
            prenomb = true
            $('.in').eq(1).css({
              'border': '',
             });
          }
          else {
            prenomb = false
            $('.in').eq(1).css({
              'border': '1px solid red',
             });
          }
          greenValider()
        });


        $('.in').eq(2).keyup( function () {
  
          var  nom = $(this).val()
          
            if( nom.length >= 6 &&  nom.length <= 14  && /^([0-9]+)$/.test(nom)){
              telb = true
              $('.in').eq(2).css({
                'border': '',
               });
            }
            else {
              telb = false
              $('.in').eq(2).css({
                'border': '1px solid red',
               });
            }
            greenValider()
          });

          $('.in').eq(3).keyup( function () {
  
          var  nom = $(this).val()
          
            if( nom.length >= 5 &&  nom.length <= 14  && /[a-zA-Z0-9]+/.test(nom)){
              passb = true
              $('.in').eq(3).css({
                'border': '',
               });
            }
            else {
              passb = false
              $('.in').eq(3).css({
                'border': '1px solid red',
               });
            }
            greenValider()
          });
      } 
       function greenValider(){
           if( nomb == true && prenomb == true && telb == true && passb == true && imgb == true){
            $('#ve').css({
              'display': 'block',
             });
             verifie=true
             $('#validerchanger').css({
              'display': 'none',
             });
           }
           else {
        
            $('#validerchanger').css({
              'display': 'block',
             });
            $('#ve').css({
              'display': 'none',
             });
           }
       }


       function greenValiderB(){
        if(vpas==true && vp == true){
        
           verifieb=true
        }
       
    }

  function validerInputLogin(){
 
  
    $('.inb').eq(1).keyup( function () {
  
      var  passe = $(this).val()
  
      
        if( passe.length >= 3 &&  passe.length <= 14 && /[a-z0-9]+/.test(passe) && /[a-z0-9]/.test(passe)){
          vpas = true
         
        }
        else {
          vpas = false
         
        }
       greenValiderB()
      });
  
  
      $('.inb').eq(0).keyup( function () {
  
      var pseudo = $(this).val()
   
        if( pseudo.length  >= 2 &&  pseudo.length <= 8 && /[a-z0-9]+/.test(pseudo) && /[a-z0-9]/.test(pseudo) ){
          vp = true
        
        }
        else {
          vp = false
          
        }
  
        greenValiderB()
  
      });
  
  
  
    
  }

  function getUserDonne() {
    var result = {}
   $.ajax({
    type: 'GET',
     url:"/validerLoginPass?pseudo=" +  $('.inb').eq(0).val() + "&passe=" + $('.inb').eq(1).val(),
     async: false,  
     success:function(data) {
     
         result = data
     }
  });
  
  return result
    
  }

  
function clickSenregistrer(){
    $('#registrc').click(function(){
  //    alert('life is good')
    showEnregistrement()
     flouter()
    
    });
  }


  function clickannulerEnr(){
    $('#ae').click(function(){
   
     annulerFlouter()
     hideEnregistrement()
    
    });
  }
  function showEnregistrement(){
    $("#divenregistrer").css({
      
      'display': 'block',
      
      
       });
  }

  function hideEnregistrement(){
    $("#divenregistrer").css({
      
      'display': 'none',
      
      
       });
  }
 function clickAjouter(){

  $('.ajouterpdiv').click(function(){
    showlogin() 
  });
   
  }

  function clickValider() {

    $('#seconnecter').click(function(){
     
     
    if(verifieb)
     
     var data = getUserDonne()
  
    
     if(data.success.localeCompare('success') ==0) {
    //  alert('alhamdoulilah')

       var nom = data.user.nom
       var prenom = data.user.prenom
       var id = data.user.id
      var image = data.user.img
       var result =     conn(nom , prenom , id , image)
    
       redirectConn( result)
      
     }

   
    });
     
    }

    function redirectConnEnr( data) {
   
      clientConnected =  data.connected
      
      
      if(clientConnected == true ) {
         nom = data.user.name
       prenom = data.user.prenom
       idClient = data.user.id
      
     
       $("#comptea").css({
        'display': 'none',
        
       
        }) ; 
      
        $("#compteb").css({
          'display': 'block',
          
         
          }) ; 
     
    
     
     
        
      
      }
       
    }
   
    function redirectConn( data) {
   
      clientConnected =  data.connected
      
      
      if(clientConnected == true ) {
         nom = data.user.name
       prenom = data.user.prenom
       idClient = data.user.id
    
    //  var name = nom + ' '+prenom
       updatProfileMenu( data.user.image , nom , prenom)
       boutiqueClient = boutiqueToid( vente , idClient)
 
      // alert( nom)

    publicationClient = boutiqueToid( pub , idClient)
     annonceClient = boutiqueToid( annonce , idClient)
  //   publength = publicationClient.length
 // annlength = annonceClient.length
     creatBoutique()
  
    updateServiceLength()

    $("#comptea").css({
        'display': 'none',
        
      
        }) ; 
      
        $("#compteb").css({
          'display': 'block',
          
         
          }) ; 
     
      }
     
     
     
        
      
      
      else {
       nom = ''
       prenom = ''
       idClient = 0
       
      }
    nomb = false 
    prenomb = false 
    telb = false 
    passb = false
    imgb = false
    $('.in').val('')
    $('.inb').val('')
    $("#profa").attr("src", "public/image/acceuil/profile/utilisateur.png") ;
    
    }
    
    

  function showlogin() {
  
    $(".divenregistann , .logindiv").css({
        'display': 'block',
        
       
        }) ; 
  
    
  
        $('.ajouterpdiv')
  .css('margin-top', '75%')
  
  .animate({
  marginTop : '13%' 
  
  },{
  duration : 1500
  , queue : true  // ici peu importe sa valeur
  , complete : function(){
    baisserMask()
  }
  });
   }
  
   function baisserMask() {
    
     
   $('#maske')
  .css('top', '52%')
  
  .animate({
  top : '100%' 
  
  },{
  duration : 1500
  , queue : true  // ici peu importe sa valeur
  , complete : function(){
    $("#maske").css({
      'display': 'none',
      
     
      }) 
  }
  });
   }
  
  
  
    
    function animpublicite(){
      var o = 0 
      var intid =   setInterval( function() {
    
        if( o%2 == 0 ){
          $("#publicite").css({
            'border': '3px solid #00ffff',
            
           
            }) ; 
           
        }else{
          $("#publicite").css({
            'border': '3px solid yellow',
            
           
            }) ; 
            
        }
           
      
               o = o + 1
    
              }, 1000) ; 
    
    }



    function enregistrerDansbase() {
            if(aaa==true && bbb == true && c == true && d == true && e == true && f == true && g == true && h == true ){
            
              saveFinal()
              showPagnier() 
      
              $("#divenregistrer").css({
               'display': 'none',
              }) ;
              
              ableclick()
      
        }
      
      
      
           }
      


           function saveFinal() {
            
            var nom = $('.in').eq(0).val()
            var prenom = $('.in').eq(1).val()
            var tel = $('.in').eq(2).val()
          
            var pass = $('.in').eq(3).val()
            var n =  $("#file").val()
    
          
        
     //   var b  =  n.lastIndexOf('\\')
    
     //   var name = n.substring(b + 1)
      
            
            $.ajax( {
                         
              type: 'GET',
              url: '/savedansbase?nom=' + nom  + '&prenom=' + prenom   + '&tel=' +   tel   + '&pass=' +   pass  + '&name=' +   nameimgb,
              success: function(data){
                
              
            
               var result =     conn(data.user.name , data.user.prenom , data.user.id , nameimgb)
    
               redirectConn( result) 
          
              }  
                 
          });
            
          }
          
     
           
    //upload image profile

    function validerEnregistrement(){
      $("#ve").click(function(){
       
        if(verifie==true){
       
         saveFinal()
       
        }
       
      });
    
      
    }
    

    function inputFileChanged(){
      $("#file").change(function(){
        if(is.ie()){

        }
        else{ 
         
          uploadImageTemporel()
      
          $("#submite").click()
        }
     
    
      });
    
      
    }
    
    function uploadImage() {
      $("#myForm").submit(function (e) {
      
        e.preventDefault();
        var formData = new FormData(this);
    
        var classe =  $('.inputa').eq(0).val()
       
        var n =  $("#file").val()
    
        
        var b  =  n.lastIndexOf('\\')
    
        var name = n.substring(b + 1)
      
       
        
    
        
        $.ajax({
            type: "POST",
            url: "/upload?temporel=false&name=" + name + "&classe=" + classe,
            data: formData,
            processData: false,
            contentType: false,
            success: function(r){
               
               
            },
            error: function (e) {
                
            }
        });
    
    });
    
    }
    
    function uploadImageTemporel() {
      $("#myForm").submit(function (e) {
      
        e.preventDefault();
        var formData = new FormData(this);
        var n =  $("#file").val()
    
        
        var b  =  n.lastIndexOf('\\')
    
        var name = n.substring(b + 1)
      
        $.ajax({
            type: "POST",
            url: "/upload?temporel=vrai&name="+ name,
            data: formData,
        
          
            processData: false,
            contentType: false,
            success: function(r){
              nameimgb = r
                 imgb = true 

           //   apercuImageChange()
              greenValider()
         
        //      $("#profa").attr('src',  'src ="public/image/temporel/' + name + '"/>')
     
     
        $("#profa").attr('src', "public/image/temporel/" + r) ;
 //    $("#profa").remove()
     
 //    $("#li").append(' <img id="profa"  src ="public/image/temporel/' + r + '"/>')
    
        $("#file").val('')
        if(is.ie()){
          $(".divajouter").css({
                                
            'display': 'block' ,
        
              }) ;
              $("#submite").css({
          
                'display': 'none' ,
            
                  }) ;
            
        }
  
             },
            error: function (e) {
                
            }
        });
    
    });
    
    }
    

    function clickChangePro() {
     
      $(".divajouter").click(function(){

      
      if(is.ie()){
        $(".divajouter").css({
        
          'display': 'none' ,
      
            }) ;
            $("#submite").css({
                
              'display': 'block' ,
          
                }) ;
    
              }
              
      });
    

      $('#submite').click( function (e) {
        e.preventDefault()
        
        var n =  $("#file").val()
    
        
        if(n.length >= 3){
         
         $("#myForm").submit()
        // $("#submitpro").click()
        }else {
          $("#file").css({
          
            'display': 'block' ,
      
              }) ;
              $("#submite").css({
                  
                'display': 'none' ,
            
                  }) ;
    
                  
    
        }
        
       
      });
    

      $('#change').click(function(){
        $('#file').click()
      });
       
    }
    
    function uploadFile() {
      inputFileChanged()
      validerInput()
     
    }
    