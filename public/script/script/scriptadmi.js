
 
   
  // var publength = 0
  // var annlength = 0
   clickMenu()
   controlReseauInput()
   hoverItemTable()
   cssclickbouton()
   connectAdmi()
  

   
   function cssclickbouton() {

    $('.bt')
    .mousedown(function(){
        var i = $(this).index()
        $('.bt').eq(i).css({
        
            'box-shadow': '1px 1px 3px #555 inset',
            'background': '#dcdcdc',
        });
    
                        })
    .mouseup(function(){

        var i = $(this).index()
       
        $('.bt').eq(i).css({
        'box-shadow': '1px 1px 3px #555',
        'background': '',
    });
                          })
    .click(function(){
       
        var i = $(this).index()
        supressionGeneral(i)
        modificationGeneral(i)
        ajoutGeneral(i)

})



   
        }

     

        function modificationGeneral(i){
          if( i == 5 && curParti == 5 ){
    
          alert('modi')
          }

        }
        function ajoutGeneral(i){
          if( i == 6 && curParti == 5 ){
    
            ajouterProgramme()
          }
          if( i == 6 && curParti == 4 ){
    
            ajouterProjet()
            }

          
        }
          function supressionGeneral(i){
            if( i == 1 && curParti == 1 ){
             
              $('.pub').css({
                'display': 'none',
                
            });
              
              $('#divalidersup').css({
                  'display': 'block',
                  
              });
            }
      
            if( i == 1 && curParti == 2 ){
            
              
          //    $('.pub').css({
          //      'display': 'none',
                
          //  });
              
              $('#divalidersuppub').css({
                  'display': 'block',
                  
              });
            
            }
            if( i == 1 && curParti == 3 ){
            
              $('#divalidersupa').css({
                'display': 'block',
                
            });
              }
      
              if( i == 1 && curParti == 4 ){
            
                $('#divalidersuppr').css({
                  'display': 'block',
                  
              });
                }
      
                if( i == 1 && curParti == 5 ){
           
                  $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercuapr,#tabapercupr,#tabapercuaprogram").css({
                    'display': 'none',
                }) ;
                $("#tabapercuaprogsup").css({
                  'display': 'block',
              }) ;

              $(".partimenu").eq(4).css({
           
  
                'width': '72%' , 
               
                }) ;
                updateDetailprogram(programme[curProgrammeIndex])
 
                }
      
            
          }

  
   function hoverItemTable(){
    $('.tableline').hover(function(){
            
      var a = $(this).index() -1
     curClientindex = a
      $(".tableline").css({
      
        'background-image': '',
    
           
      }) ;
      $(".tableline").eq(a).css({
      
        'background-image': 'linear-gradient(#87cefa,white)',
    
           
      }) ;
      },function(){
         
    });
    
   }
   function clickMenu(){
    $('.classdivm').click(function(){
      var i = $(this).index()
      $(".classflech").css({
        'display': 'none',
  }) ;
      $(".classflech").eq(i).css({
        'display': 'block',
  }) ;
    
  $(".partimenu").css({
    'display': 'none',
}) ;
  $(".partimenu").eq(i).css({
    'display': 'block',
}) ;

 
 
 

      if( i == 0){
        curParti  = 1 
        $("#tabapercu").css({
          'display': 'block',
      }) ;
      $("#tabapercupub,#tabapercupr,#tabapercuann,#tabapercuapr,#tabapercuaprogsup").css({
        'display': 'none',
    }) ;
       chercher()
     //   disableBoutnonClient()
        boutonControl()
        
      
      }
      else if ( i == 1){
        curParti  = 2 
        $("#tabapercupub").css({
          'display': 'block',
      }) ;
      $("#tabapercu,#tabapercuann,#tabapercupr,#tabapercuapr,#tabapercuaprogsup").css({
        'display': 'none',
    }) ;
        chercherp()
      //  disableBoutnonProduit()
        boutonControlp()
    
      }
      else if ( i == 2){
       
        curParti  = 3 
        $("#tabapercu,#tabapercupub,#tabapercupr,#tabapercuapr,#tabapercuaprogsup").css({
          'display': 'none',
      }) ;
      $("#tabapercuann").css({
        'display': 'block',
    }) ;
    
    cherchera()
      //  disableBoutonCommande() 
      boutonControla()
      }
      else if ( i == 3){
        $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercuapr,#tabapercuaprogsup").css({
          'display': 'none',
      }) ;
      $("#tabapercupr").css({
        'display': 'block',
    }) ;
        curParti  = 4 
        chercherpro()
       // disableBoutonCommande() 
        
        createTableProjet(lpr)
        boutonControlpr()
        cleackTableLinepro()
        updateDetailpr(projet[curProjetIndex])
       
        cssDivClient()
      }

      else if ( i == 4){
        curParti  = 5
        $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercupr,#tabapercuapr,#tabapercuaprogsup,#tabapercuaprogram").css({
          'display': 'none',
      }) ;
     //   chercherpa()
      //  disableBoutonCommande() 
        boutonControlprogr()
       
      }
      else if ( i == 5){
        curParti  = 6
        $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercupr,#tabapercuapr,#tabapercuaprogsup,#tabapercuaprogram").css({
          'display': 'none',
      }) ;
     //   chercherpa()
      //  disableBoutonCommande() 
     //   boutonControlprogr()
       
      }



         
        }) ;
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
  