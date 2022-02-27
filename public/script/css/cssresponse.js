

//csscontacterResponse()
//cssReseauResponse()
//csslogoRespnonse()
//csshidePubli()
//cssDiveAndInputResponse()
//clickContacterResponse()
//hoverClickReseau() 

//clickSerchResponse()
//chercherProduit()

function clickContacterResponse(){

    $('#contactdiv').click(function(){
  
        animeOpaciteResponse()
      
       //   alert('cliqued wayy')
    });
     
    }
    function animeOpaciteResponse() {
      
      $('#contactdiv')
     .css('opacity', '1')
     
     .animate({
      opacity : '0' ,
     
     
     },{
     duration : 2500
     , queue : true  // ici peu importe sa valeur
     , complete : function(){
      
      //cssEmailEtel()
      $("#contacter").css({
       'display':'block',
      });
      
      $("#contactdiv").css({
        'display':'none',
       });
      
      animeUs()
    
     }
     });
      }
    
     function animeUs() {
      
      $('#contacter')
     .css('margin-top', '-5%')
     
     .animate({
     marginTop : '0%' ,
     
     
     },{
     duration : 2500
     , queue : true  // ici peu importe sa valeur
     , complete : function(){
          
     }
     });
      }
    
function clickSerchResponse() {
    
  $('#imgserch').click(function(i){
  
    showInputSerchResponse()
        
    });
 }
function cssReseauResponse() {

    $("#reseau").css({
       
       'float': 'right',
   //       'top':'6%',
    //      'right':'2%',
        'padding':'1%',
//       'background':'rgba(236,255,66,0.3)',
//  'border': '1px solid #bafff0',

      
      
        });
        $("#imgw").css({
       
        // 'border': '1px solid #bafff0',
        // 'border-radius': '50%',

      
      
        });
        $("#imgf , #imgt , #imgi , #imgw ").css({
       'margin': '1%',
       'margin-top': '0%',
       'box-shadow': '1px 1px 3px #555',
       'border-radius': '50%',
  });
    
        $("#imgf , #imgt , #imgi , #imgw ").width((X*5)/100)
       
        $(" #reseau").width((X*28)/100)
        $(" #reseau").height((Y*25)/100)
     
      }

function csscontacterResponse(){
    $("#contactdiv").css({
     'float': 'left',
             'padding-left': '4%' ,
             'padding-top': '1%' ,
            
        //   '-webkit-transition': '.8s ease-in-out',
        //   'transition': '.8s ease-in-out ', 
          // 'opacity': '0',
       //   'display': 'none' ,
         }) ;
         $('#contactdiv').width((X*32)/100)
             $("#a").css({
                // 'margin-left': '4%' ,
            //   '-webkit-transition': '.8s ease-in-out',
            //   'transition': '.8s ease-in-out ', 
              // 'opacity': '0',
            'color': 'white' ,
             }) ;
             $("#cimg").css({
               //  '-webkit-transition': '.8s ease-in-out',
               //  'transition': '.8s ease-in-out ', 
                // 'opacity': '0',
               'float': 'right' ,
            
             //'margin-left':'3%',
               }) ;

               $('#cimg').width((X*2)/100)
               $('#cimg').width((Y*2)/100)
       
          
             $("#contactlemail").css({
               'opacity': '1',
               'display': 'inline' ,
               'opacity': '1',
               'color': 'black' ,
               'font-size': '10px',
             }) ;
             $("#contactltel").css({
               'opacity': '1',
               'display': 'inline' ,
               
               'color': 'black' ,
               'font-size': '10px',
             }) ;
           
             
           
             $(".spancontact").css({
               'opacity': '1',
               'color': 'blue' ,
               'font-size': '11px',
             }) ;
             
           
           
           
           
         $('#contacter').css({
           'position': 'absolute',
           'color': '#00ffff' ,
           'opacity': '1',
           'box-shadow': '1px 1px 3px #555',
           'padding-left': '3%',
           //'transform': 'translateX(80%)',
          'cursor': 'pointer' ,
           'font-size': '15px',
           'text-decoration': 'underline',
           'opacity': '1',
           'margin-top': '-5%',
           'top': '1',
         'left': '3%',
         });
       
         
         $('#contacter').width((X*50)/100)
         $('#contacter').height((Y*5)/100)
       
       
        
       }
       function csshidePubli(){
        $("#remerciment").css({
            //   'padding-left': '28%' ,
               'display':'none',
              
           }) ;
          
        
       
       $("#newb").css({
            //   'padding-left': '28%' ,
               'display':'none',
              
           }) ;

        }
    

       function csslogoRespnonse(){
        $('#logo').css({
       //   'position': 'absolute',
       //   'top': '3%',
        'margin-left': '2%',
        'float': 'left',
        });
      
        $('#logo').width((X*25)/100)
          
      //  $('#logo').height((Y*8)/100)
      
      }


function cssHeaderbResponse(){
    
    $("#contactdiv").css({
        'width':'45%',
    'height':'15%',
    
    'border': '1px solid blue',
    
      });
      $("#cimg").css({
        'width':'25%',
      'height':'25%',
    //'position':'relative',
    //'margin':'2% auto',
    //'margin-top':'45%',
    //'float':'right',
    //'background':'rgba(0,0,0,0.3)',
    //'padding':'10px',
    //'overflow': 'hidden',
    //'border-radius': '50%',
    //'box-shadow': '1px 1px 3px #555',
    
      });
     
}

function showInputSerchResponse() {
    $("#serchacceuil").css({
        'display': 'block',
        
       
        }) ; 
        $("#zonederecherche").css({
          'border-bottom': '1px solid black',
            }) ;
   
            $('#imgserch').attr('src', "public/image/acceuil/traina.png");
       
        
  
        $('#serchacceuil')
  .css('width', '0px')
  
  .animate({
  width : (55*X)/100 
  
  },{
  duration : 1500
  , queue : true  // ici peu importe sa valeur
  , complete : function(){
    
  }
  });
   }
  
  
  
  
  
   function cssDiveAndInputResponse(){
      
    
   // $("#headerb").css({
     //   'position':'relative',
        
       // 'border': '1px solid blue',
         
     //   }) ;
  
    $("#zonederecherche").css({
        'border-left':'0',
        'border-top':'0',
        'border-right':'0',
        'border-bottom': '0',
        'float': 'left',
        
        'position': 'absolute',
        'top': '7%',
        'left': '25%',
         
        }) ;
  
        $("#serchacceuil").css({
            'font-size': '14px',
            'font-style': 'italic',
            'float': 'left',
         
           
           
        'border-left':'0',
        'border-top':'0',
        'border-right':'0',
        'border-bottom': '0',
        'outline':'none',
        
        'background': 'transparent',
        'display': 'none',
        'margin-top':'7%',
            }) ;
        //    $("#serchacceuil").height( (4*Y)/100 )
    
  
            $("#imgserch").css({
                'float': 'rigth',
                'border-radius': '30px',
             //   'border': '1px solid red',
                }) ;
                $("#imgserch").width( (12*X)/100 )
    
               
  
  
  }
  