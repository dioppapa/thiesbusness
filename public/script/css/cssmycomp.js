











if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  cssConnecterResponse()
  cssMyCompteResponse()
  cssSenregistrementResponse()
  cssMenuProfileBoutiqueResponse()
  cssPublicationbResponse()
  cssUniteimageResponse()
  cssannonceurbResponse()
  cssprofilebResponse()
  cssMyBoutiqueResponse()
 } else {
  cssConnecter()
  cssMyCompte()
  cssSenregistrement()
  cssMenuProfileBoutique()
  cssPublicationb()
  cssUniteimage()
  cssprofileb()
  cssMyBoutique()
  cssannonceurb()
}



function cssPageBoutique(){
  $(".pagem").css({
        'border': '1px solid red',
       'margin-top': '18%',
       'overflow': 'auto',
       
       
           }) ;
}


function cssPublicationbResponse(){
    
    
  $("#divlistedesimagepub").css({
    
    
     
      }) ;
  $("#divapercup").css({
   
    //  'border': '1px solid #bafff0',
     // 'border-radius': '15%',
      'margin': '1%',
      'margin-top': '7%',
      'position': 'relative',
      'float': 'left',
      'width': '98%',
    //  'height': '10%',
     // 'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
   //   'background': ' rgba(0,0,0,0.1)',
      //'box-shadow': '1px 1px 3px #555 inset',
      'box-shadow': '1px 1px 3px #555 inset',
     
      }) ;
    //  $('#divapercup').width((X*54)/100)
    $('#divapercup').height((Y*20)/100)

      
      $("#selectcateg").css({
    
        'font-size':  '10px',   
         'font-style':  'italic',
        'font-weight':  'bold',
        'border-radius':  '20px',
            
           }) ;

      $(".divpublimagex").css({
    
       // 'border': '1px solid yellow',
         // 'border-radius': '15%',
          'margin': '1%',
          'float': 'left',
          'height': '98%',
          'width': '65%',
          }) ;
       //   $('.divpublimagex').width((X*38)/100)
        //  $('.divpublimagex').height((Y*28)/100)
          
        
       
              $(".divpublimagebb").css({
    
             //     'border': '1px solid indigo',
                 // 'border-radius': '15%',
                    'margin': '1%',
                    'margin-right': '1%',
                     'float': 'right',
                     'width': '28%',
                     'height': '98%',
                  }) ;
               //   $('.divpublimagebb').width((X*10)/100)
                //  $('.divpublimagebb').height((Y*25)/100)
           
              $(".tabpubimgab").eq(0).css({
    
                'border': '1px solid rgba(233,0,0,0.5)',
               // 'border': '1px solid yellow',
                'box-shadow': '1px 1px 3px #555',
     
                'border-radius': '5%',
                  'margin': '0.3%',
                  'float': 'left',
                  'width': '65%',
                  'height': '96%',
                   
                }) ;
           //     $(".tabpubimgab").eq(0).width((X*22)/100)
              //  $(".tabpubimgab").eq(0).height((Y*28)/100)
           

                $(".tabpubimgab").eq(1).css({
    
                      'border': '1px solid rgba(233,0,0,0.5)',
                      'border-radius': '5%',
                      'box-shadow': '1px 1px 3px #555',
                      'position': 'absolute',
                      'margin': '0.2%',
                      'margin-top': '7%',
                      'margin-right': '8%',
                      'float': 'right',
                      'transform': 'rotate(45deg)',
                 
                      'width': '25%',
                      'height': '43%',
                       
                      }) ;
                  //    $(".tabpubimgab").eq(1).width((X*8)/100)
                  //    $(".tabpubimgab").eq(1).height((Y*10)/100)

                      $(".tabpubimgab").eq(2).css({
    
                        'border': '1px solid rgba(233,0,0,0.5)',
                        'border-radius': '5%',
                        'box-shadow': '1px 1px 3px #555',
                        'position': 'absolute',
                      'margin': '0.2%',
                      'margin-right': '8%',
                          'float': 'right',
                          'transform': 'rotate(45deg)',
                          'top': '45%',
                         
                          'width': '25%',
                          'height': '43%',
                          }) ;
                         // $(".tabpubimgab").eq(2).width((X*8)/100)
                         // $(".tabpubimgab").eq(2).height((Y*10)/100)
                   
               
  
                          $(".tabpubimgab").eq(3).css({
    
                            'border': '1px solid rgba(233,0,0,0.5)',
                            'border-radius': '5%',
                            'box-shadow': '1px 1px 3px #555',
     
                            'margin': '1%',
                            'float': 'right',
                        //    'transform': 'rotate(45deg)',
                   
                        'width': '100%',
                        'height': '46%',
                             
                            }) ;
                         //   $(".tabpubimgab").eq(3).width((X*12)/100)
                         //   $(".tabpubimgab").eq(3).height((Y*14)/100)

                            $(".tabpubimgab").eq(4).css({
    
                              'border': '1px solid rgba(233,0,0,0.5)',
                          'border-radius': '5%',
                          'box-shadow': '1px 1px 3px #555',
                       'margin': '1%',
                           //   'margin-right': '20%',
                              'float': 'left',
                              'width': '100%',
                              'height': '46%',
                          //    'transform': 'rotate(45deg)',
                     
                             
                               
                              }) ;
                           //   $(".tabpubimgab").eq(4).width((X*12)/100)
                           //   $(".tabpubimgab").eq(4).height((Y*14)/100)
                       
                        
                              $("#divnamepublication").css({
    
                           //     'border': '1px solid rgba(233,0,0,0.5)',
                          // 'border-radius': '5%',
                          //  'box-shadow': '1px 1px 3px #555',
                          'margin-top': '3%',
                             'margin-left': '30%',
                             //   'margin-right': '20%',
                          //      'float': 'left',
                            //    'transform': 'rotate(45deg)',
                       
                               
                                 
                                }) ;
                                $("#namepublicationl").css({
                                  'font-size':  '12px',   
                                  'font-style':  'italic',
                                  'font-weight':  'bold',
                              //  'border-radius':  '20%',
                             
                                      }) ;

                                $("#namepublicationi").css({
                                    'font-size':  '12px',   
                                    'font-style':  'italic',
                                    'font-weight':  'bold',
                                    'border-radius':  '20px',
                                         
                                        }) ;
                                $("#validerChangementp").css({
                                  //   'margin-left': '1%',
                                     //   'margin-right': '20%',
                                  //      'float': 'left',
                                    //    'transform': 'rotate(45deg)',
                               
                                    'font-size':  '12px',   
                                    'font-style':  'italic',
                                    'font-weight':  'bold',
                                    'border-radius':  '20px',
                                         
                                        }) ;

                                $(".buttonmodifie").css({
                               //   'margin-left': '1%',
                                  //   'margin-right': '20%',
                               //      'float': 'left',
                                 //    'transform': 'rotate(45deg)',
                            
                                 'font-size':  '10px',   
                                 'font-style':  'italic',
                                 'font-weight':  'bold',
                               'border-radius':  '20%',
                                      
                                     }) ;

                                $("option").css({
                                    'margin-left': '1%',
                                    //   'margin-right': '20%',
                                 //      'float': 'left',
                                   //    'transform': 'rotate(45deg)',
                              
                                   'font-size':  '10px',   
                                   'font-style':  'italic',
                                   'font-weight':  'bold',
                                 'border-radius':  '20%',
                                        
                                       }) ;
                              $("#divselectcateg").css({
                               
                                'float': 'left',
                                'margin-top': '2%',
                                  'margin-left': '25%',
                                  //   'margin-right': '20%',
                               //      'float': 'left',
                                 //    'transform': 'rotate(45deg)',
                            
                                 'font-size':  '14px',   
                                 'font-style':  'italic',
                                 'font-weight':  'bold',
                               'border-radius':  '20%',
                                      
                                     }) ;
                                
                              
          
      
                                    }
function cssConnecterResponse(){
  $("#connecter").css({
     // 'position': 'relative',
           //   'padding-left': '4%' ,
           //   'padding-top': '1%' ,
         //   '-webkit-transition': '.8s ease-in-out',
         //   'transition': '.8s ease-in-out ', 
      // 'border': '1px solid blue',
       'background':'rgba(233,0,0,0.1)',
         'box-shadow': '1px 1px 3px #555',
         'border-radius':  '50%',
         'width': '45%',
         'height': '15%',
         'position':'absolute',
      'top': '35%',
         'left': '50%',
                   '-ms-transform': 'translate(-50%, -50%)',
                   'transform': 'translate(-50%, -50%)',
                  
                  }) ;
  
  
    //      $('#connecter').width((X*25)/100) 
     //     $('#connecter').height((Y*25)/100)

          $(".linb").css({
          
            'font-size':'14px',
            'font-style':'italic',
            'font-weight':'bold',
           
        }) ;

          
          $("#linb").css({
            'position':  'absolute',
            'left': '50%',
            '-ms-transform': 'translateX(-50%)',
              'transform': 'translateX(-50%)',
           //   'padding': '2%' ,
            //  'padding-left': '40%' ,
              'font-size':'12px',
              'font-style':'italic',
              'font-weight':'bold',
             
          }) ;
      //    $('#linb').width((X*15)/100) 
       //   $('.linb').height((Y*30)/100)



       $(".inb").css({
       //   'padding-left': '28%' ,
          'font-size':'12px',
          'width':'70%',
          'background':'white',
          'border-radius':  '20px',
      }) ;
  //  $('.inb').width((X*6)/100) 
   //  $('.inb').height((Y*30)/100)


   

   $("#dinb").css({
      'margin-top': '3%' ,
    'margin-left': '12%' ,
    
  }) ;
// $('#dinb').width((X*6)/100) 
//  $('.inb').height((Y*30)/100)



// $('#dinb').width((X*6)/100) 
//  $('.inb').height((Y*30)/100)
$("#seconnecter").css({

// 'opacity':  '0',
//'margin-left': '35%' ,
'position':  'absolute', 
 'font-size':  '10px',   
 'font-style':  'italic',
 'font-weight':  'bold',
 'border-radius':  '20px',
'left': '50%',
'-ms-transform': 'translateX(-50%)',
 'transform': 'translateX(-50%)',
// 'opacity':  '0',
'-webkit-transition': '.8s ease-in-out',
'transition': '.8s ease-in-out ', 
});

$("#lbb").css({

'width':'45%',
'position':  'relative',
//'height':'50%',
'margin':'auto',
'margin-top':'50%',
'box-shadow': '1px 1px 3px #555',
'border-radius':  '50%',
'background':'rgba(233,0,0,0.1)',
});
$("#lbb").height((15*Y)/100)
$("#logobb").css({
//'margin-left':'25%',

'position':  'absolute',
'top': '50%',
'left': '50%',
'-ms-transform': 'translate(-50%,-50%)',
 'transform': 'translate(-50%,-50%)',
 });

$("#logobb").width((15*X)/100)
 $("#logobb").height((7*Y)/100)


 

 $(".pdescription").css({
  'position':'absolute',
  'top':'10%',
  'left':'50%',
  '-ms-transform': 'translate(-50%,-50%)',
 'transform': 'translate(-50%,-50%)',
//  'padding':'3%',
  'font-size':'10px',
  
  'text-align':'center',
  'font-style':  'italic',
  'font-weight':  'bold',
//  'margin-left':  '35%',
   });


}


function cssConnecter(){
    $("#connecter").css({
       // 'position': 'relative',
             //   'padding-left': '4%' ,
             //   'padding-top': '1%' ,
           //   '-webkit-transition': '.8s ease-in-out',
           //   'transition': '.8s ease-in-out ', 
        // 'border': '1px solid blue',
         'background':'rgba(233,0,0,0.1)',
           'box-shadow': '1px 1px 3px #555',
           'border-radius':  '50%',
        //   'width': '45%',
        //   'height': '15%',
           'position':'absolute',
        'top': '35%',
           'left': '50%',
                     '-ms-transform': 'translate(-50%, -50%)',
                     'transform': 'translate(-50%, -50%)',
                    
                    }) ;
    
    
            $('#connecter').width((X*25)/100) 
            $('#connecter').height((Y*25)/100)

            $(".linb").css({
            
              'font-size':'14px',
              'font-style':'italic',
              'font-weight':'bold',
             
          }) ;

            
            $("#linb").css({
              'position':  'absolute',
              'left': '50%',
              '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
             //   'padding': '2%' ,
              //  'padding-left': '40%' ,
                'font-size':'12px',
                'font-style':'italic',
                'font-weight':'bold',
               
            }) ;
        //    $('#linb').width((X*15)/100) 
         //   $('.linb').height((Y*30)/100)



         $(".inb").css({
         //   'padding-left': '28%' ,
            'font-size':'12px',
            'width':'70%',
            'background':'white',
            'border-radius':  '20px',
        }) ;
    //  $('.inb').width((X*6)/100) 
     //  $('.inb').height((Y*30)/100)


     

     $("#dinb").css({
        'margin-top': '3%' ,
      'margin-left': '12%' ,
      
    }) ;
 // $('#dinb').width((X*6)/100) 
 //  $('.inb').height((Y*30)/100)


 
// $('#dinb').width((X*6)/100) 
//  $('.inb').height((Y*30)/100)
$("#seconnecter").css({
 
  // 'opacity':  '0',
  //'margin-left': '35%' ,
  'position':  'absolute', 
   'font-size':  '10px',   
   'font-style':  'italic',
   'font-weight':  'bold',
   'border-radius':  '20px',
 'left': '50%',
 '-ms-transform': 'translateX(-50%)',
   'transform': 'translateX(-50%)',
 // 'opacity':  '0',
  '-webkit-transition': '.8s ease-in-out',
  'transition': '.8s ease-in-out ', 
 });

 $("#lbb").css({
 
  'width':'40%',
  'position':  'relative',
 //'height':'50%',
 'margin':'auto',
 'margin-top':'50%',
 'box-shadow': '1px 1px 3px #555',
 'border-radius':  '50%',
 'background':'rgba(233,0,0,0.1)',
});
$("#lbb").height((15*Y)/100)
$("#logobb").css({
  //'margin-left':'25%',
  
  'position':  'absolute',
  'top': '50%',
  'left': '50%',
 '-ms-transform': 'translate(-50%,-50%)',
   'transform': 'translate(-50%,-50%)',
   });

  $("#logobb").width((10*X)/100)
   $("#logobb").height((10*Y)/100)


   

   $(".pdescription").css({
    'position':'absolute',
    'top':'10%',
    'left':'50%',
    '-ms-transform': 'translate(-50%,-50%)',
   'transform': 'translate(-50%,-50%)',
  //  'padding':'3%',
    'font-size':'10px',
    
    'text-align':'center',
    'font-style':  'italic',
    'font-weight':  'bold',
  //  'margin-left':  '35%',
     });


}

function cssMyCompteResponse(){
  $(".pagem").css({
    'float': 'right',
    'width': '90%',
    'height': '50%',
      //'float': 'right',
           //   'padding-left': '4%' ,
           //   'padding-top': '1%' ,
         //   '-webkit-transition': '.8s ease-in-out',
         //   'transition': '.8s ease-in-out ', 
      //   'position':'relative',
      //   'border': '1px solid #a9a9a9',
         'border-radius': '10%',
    
      //   'box-shadow': '1px 1px 3px #555',
      'box-shadow': '0 0 35px rgba(233,0,0,0.3) inset',
             
          'margin-top': '3%' ,
      'margin-left': '25%' ,
      'border': '1px solid red',
     
      'overflow': '',
      
          }) ;
  
  
      //   $('.pagem').width((X*55)/100) 
      //    $('.pagem').height((Y*75)/100)
}

function cssMyCompte(){
    $(".pagem").css({
     // 'width': '90%',
     // 'height': '50%',
        //'float': 'right',
             //   'padding-left': '4%' ,
             //   'padding-top': '1%' ,
           //   '-webkit-transition': '.8s ease-in-out',
           //   'transition': '.8s ease-in-out ', 
        //   'position':'relative',
           'border': '1px solid red',
           'border-radius': '10%',
      
        //   'box-shadow': '1px 1px 3px #555',
      'box-shadow': '0 0 35px rgba(233,0,0,0.3) inset',
               
            'margin-top': '3%' ,
           'margin-left': '25%' ,
        'overflow': 'auto',
        
            }) ;
    
    
            $('.pagem').width((X*55)/100) 
            $('.pagem').height((Y*75)/100)
}


function cssprofilebResponse(){

  $("#divproileacceuil").css({
      'position':'relative',
      
    'margin': 'auto' ,
    'width': '95%' ,
       }) ;
       $('#divproileacceuil').height((Y*72)/100)
    

 $("#divprofileb").css({
 // 'border':'1px solid red',
   //'float': 'right',
        //   'padding-left': '4%' ,
        //   'padding-top': '1%' ,
      //   '-webkit-transition': '.8s ease-in-out',
      //   'transition': '.8s ease-in-out ', 
      'position':'absolute',
    //  'border': '1px solid blue',
      'box-shadow': '1px 1px 3px #555',
      'border-radius': '3%',
       
     //  'margin-left': '25%' ,
     'top':'3%',
                'left': '50%',
            '-ms-transform': 'translateX(-50%)',
              'transform': 'translateX(-50%)',
              'width': '35%' ,
              'height': '98%' ,
       }) ;
     
    //   $('#divprofileb').width((X*20)/100) 
    //   $('#divprofileb').height((Y*28)/100)
       $("#profb").css({
        // 'box-shadow': '1px 1px 3px #555',
     //   'border':'1px solid red',
         'border-radius': '15%',
         'position':'absolute',
         'top':'3%',
                'left': '50%',
            '-ms-transform': 'translateX(-50%)',
              'transform': 'translateX(-50%)',
              'width': '100%' ,
              'height': '70%' ,
             }) ;
     
     
           //  $('#profb').width((X*15)/100) 
           //  $('#profb').height((Y*15)/100)

             $("#nompb").css({
               'position':'absolute',
               'top': '80%',
                'left': '50%',
                  '-ms-transform': 'translate(-50% , -50%)',
                    'transform': 'translate(-50% , -50%)',
                    'font-size':  '12px',   
                    'font-style':  'italic',
                    'font-weight':  'bold',
                   }) ;
           
                   

                  
                 //  $('#nompb').width((X*15)/100) 
                  // $('#nompb').height((Y*15)/100)

                  
                  $("#inputprofilec").css({
                   'font-size':  '10px',   
                   'font-style':  'italic',
                   'font-weight':  'bold',
                 'border-radius':  '20px',
                       }) ;
                  $("#modifierprofb").css({
                   'position': 'absolute',
                   'top': '94%',
                   'left': '50%',
                   '-ms-transform': 'translate(-50%,-50%)' ,
                   'transform': 'translate(-50%,-50%)',
                   'font-size':  '10px',   
                   'font-style':  'italic',
                   'font-weight':  'bold',
                 'border-radius':  '20px',
                       }) ;

                       $("#divtabprofile").css({
                         'position': 'relative',
                         'box-shadow': '1px 1px 3px #555 inset',
                         'width': '45%',
                         'height':  '70%',
                         'float':  'right',
                         'top': '15%',
                           'opacity': '0',
                         'margin-right': '2%',

                             }) ;
                             $(".labelprofile").css({
                             //  'position': 'relative',
                             //  'box-shadow': '1px 1px 3px #555 inset',
                             //  'width': '45%',
                               'font-weight':  'normal',
                               'font-size':  '12px',
                               'color':  'black',
                                   }) ;

                             
                                   
                                   $("#validerchangepo").css({
                                     'position': 'absolute',
                                     'left': '50%',
                                  '-ms-transform': 'translateX(-50%)' ,
                                     'transform': 'translateX(-50%)', 
                                     'background-color': 'transparent',
                                     'border': '2px solid #555',
                                     'border-radius':  '20px',
                                     'font-size':  '13px',
                                     'color':  '#555',
                                     'padding-left':  '3%',
                                     'padding-right':  '3%',
                                     'opacity':  '0.5',
                                     'width':  '50%',
                                         }) ;
                     // $('#nompb').width((X*15)/100) 
                       
                             $("#validerchangep").css({
                               'position': 'absolute',
                               'left': '50%',
                            '-ms-transform': 'translateX(-50%)' ,
                               'transform': 'translateX(-50%)', 
                               'background-color': 'transparent',
                               'border-radius':  '20px',
                                   }) ;
                 
                 
                                   $("#inputprofilea , #inputprofileb").css({
                                     'border-left':'0',
                                       'border-top':'0',
                                     'border-right':'0',
                                     'border-bottom': '1px solid #999',
                                     'outline':'none',

                                     'background-color': 'transparent',
                                    'width': '95%', 
                                    'font-size':  '12px',   
                                    'font-style':  'italic',
                                         }) ;
                                         $("#inputprofilec").css({
                                       
                                         'border': '1px solid black',
                                             'background-color': '',
                                          'font-size':  '12px',   
                                          'font-style':  'italic',
                                          'margin-left':  '2%',
                                               }) ;
                                               
                                               $(".tdarticle").css({
                                                 'color':  'blue',
                                                  'font-size':  '10px',   
                                                  'font-style':  'italic',

                                                     }) ;

                                           $("#divcount").css({
                                           
                                     'box-shadow': '1px 1px 3px #555 inset',
                                     'width': '43%',
                                     'height': '70%',
                                     'float': 'left',
                                     'border-radius': '50%',
                                         }) ;
                                         $("#divbasprofile").css({
                                           'position': 'relative',
                                           'width': '100%',
                                           'top': '10%',
                                               }) ;
               $('#divbasprofile').height((Y*28)/100)
            //   $('#divbasprofile').width((X*70)/100)
     
            $("#divhautprofile").css({
             'position': 'relative',
          //   'border': '1px solid yellow',
             'width': '100%',
             'height': '25%',
             'top': '2%',
                 }) ;
//$('#divhautprofile').height((Y*28)/100)

$("#submitpro").css({
 //'width': '30%',
// 'border': '1px solid black',
//  'padding-left':  '2%',  
'box-shadow': '1px 1px 3px #555',
'font-size':  '12px',   
'font-style':  'italic',
'font-weight':  'bold',
//'background': 'green',
//'background-color': 'green',
//'border-radius':  '20px',
'position': 'absolute',
'left': '50%',
'top': '60%',
'-ms-transform': 'translate(-50%,-50%)' ,
'transform': 'translate(-50%,-50%)', 
     }) ;
     $("#submitbou").css({
       //'width': '30%',
      // 'border': '1px solid black',
     //  'padding-left':  '2%',  
     'box-shadow': '1px 1px 3px #555',
     'font-size':  '12px',   
     'font-style':  'italic',
     'font-weight':  'bold',
     'margin-left':  '34%',
     'margin-bottom':  '3%',
     //'background': 'green',
     //'background-color': 'green',
     'border-radius':  '20px',
   //  'position': 'absolute',
    // 'left': '50%',
   //  'top': '60%',
   //  '-ms-transform': 'translate(-50%,-50%)' ,
   //  'transform': 'translate(-50%,-50%)', 
           }) ;
           $(".submita").eq(0).css({
          //   'border': '1px solid black',
             'box-shadow': '1px 1px 3px #555',
             'padding-left':  '4%',  
           'font-size':  '12px',   
           'font-style':  'italic',
           'font-weight':  'bold',
          // 'margin-bottom':  '3%',
          'border-radius':  '20px',
           'margin-left':  '12%',
           'text-align':  'center',
        
                 }) ;
                 $(".submita").eq(1).css({
                   //   'border': '1px solid black',
                      'box-shadow': '1px 1px 3px #555',
                      'padding-left':  '4%',  
                    'font-size':  '12px',   
                    'font-style':  'italic',
                    'font-weight':  'bold',
                   // 'margin-bottom':  '3%',
                   'border-radius':  '20px',
                    'margin-left':  '12%',
                    'text-align':  'center',
                 
                          }) ;
           $(".fileupdatea").eq(0).css({
             'width': '65%',
             'border': '1px solid black',
             'box-shadow': '1px 1px 3px #555',
             'padding-left':  '4%',  
           'font-size':  '10px',   
           'font-style':  'italic',
           'font-weight':  'bold',
          // 'margin-bottom':  '3%',
           'margin-left':  '15%',
           'text-align':  'center',
        
                 }) ;
                 $(".fileupdatea").eq(1).css({
                   'width': '65%',
                   'border': '1px solid black',
                   'box-shadow': '1px 1px 3px #555',
                   'padding-left':  '4%',  
                 'font-size':  '10px',   
                 'font-style':  'italic',
                 'font-weight':  'bold',
                // 'margin-bottom':  '3%',
                 'margin-left':  '15%',
                 'text-align':  'center',
              
                       }) ;
     
     $("#fileupdatebou").css({
       'width': '40%',
       'border': '1px solid black',
       'box-shadow': '1px 1px 3px #555',
       'padding-left':  '2%',  
     'font-size':  '12px',   
     'font-style':  'italic',
     'font-weight':  'bold',
     'margin-bottom':  '3%',
     'margin-left':  '33%',

     //'background': 'green',
     //'background-color': 'green',
     //'border-radius':  '20px',
     //'position': 'absolute',
    // 'left': '50%',
    // 'top': '60%',
    // '-ms-transform': 'translate(-50%,-50%)' ,
    // 'transform': 'translate(-50%,-50%)', 
  //  '-ms-transform': 'translateX(-50%)' ,
   //  'transform': 'translateX(-50%)', 
           }) ;

$("#fileupdatepro").css({
 'width': '30%',
 'border': '1px solid black',
 'box-shadow': '1px 1px 3px #555',
 'padding-left':  '2%',  
'font-size':  '12px',   
'font-style':  'italic',
'font-weight':  'bold',
//'background': 'green',
//'background-color': 'green',
//'border-radius':  '20px',
'position': 'absolute',
'left': '50%',
'top': '60%',
'-ms-transform': 'translate(-50%,-50%)' ,
'transform': 'translate(-50%,-50%)', 
     }) ;

               $("#divboutonprofil").css({
                 'width': '50%',
                 'float': 'right',
                 'height': '115%',
                 'margin': '2%',
            //  'overflow': 'auto',
                 'margin-top': '-7%',
                                         
                     }) ;
                     $("#tabcount").css({
                 
                          'box-shadow': '1px 1px 3px #555 ',
                          'margin': 'auto',
                          'margin-top': '15%',
                          'border-radius': '20%',
                       //  '-webkit-transition': '.8s ease-in-out',
                       //   'transition': '.8s ease-in-out ', 
                       '-ms-transform': 'rotate(40deg)',
                       'transform': 'rotate(40deg)',
                     
                           }) ;
                      
                     $(".tdcountname").css({
                    //   'box-shadow': '1px 1px 3px #555 inset',
                      'font-size':  '11px',   
                      'font-style':  'normal',
                      'font-weight':  'bold',
                           }) ;

                           $(".tdcount").css({
                          //   'box-shadow': '1px 1px 3px #555 ',
                             'font-size':  '12px',   
                             'font-style':  'italic',
                             'font-weight':  'bold',
                                  }) ;


                                  $("#menuprofileb1,#menuprofileb2,#menuprofileb3,#menuprofileb4,#menuprofileb5,#menuprofileb0,#menuprofileb6").css({
           
                                   'background':'rgba(233,0,0,0.1)',
                                   'box-shadow': '1px 1px 3px #555',
                                   'box-shadow': '1px 1px 3px black',
                                   'margin': '5%',
                                   'margin-bottom': '1%',
                                   'height': '20%',
                                   'position': 'relative',
                                   'border-radius':'20px',
                                     }) ;
                             
                                 
                                        
                                            
                                    
                                        
                                        //     $("#profa").width((10*X)/100)
                                        $("#menuprofileb1,#menuprofileb2,#menuprofileb3,#menuprofileb4,#menuprofileb5,#menuprofileb0,#menuprofileb7").height((3*Y)/100)
                                     
                                        $(".iconmenuprofileb").css({
                                   //       'border':'1px solid blue',
                                          'border-radius':'50%',
                                          'float':'left',
                                          'margin':'1%',
                                          'margin-left':'2%',
                                        }) ;
                                        $(".iconmenuprofileb").width((6*X)/100)
                                     
                                                 $(".iconmenuprofileb").height((2.5*Y)/100)
                                     
                                                 $(".menuitemprofileb").css({
                                                  'float':'left',
                                                   'margin':'2%',
                                                //   'position':'absolute',
                                                //   'top': '50%',
                                                  //       'left': '50%',
                                                  //         '-ms-transform': 'translate(-50%, -50%)',
                                                  //         'transform': 'translate(-50%, -50%)',
                                                             
                                                              'font-size':  '12px',   
                                                              'font-style':  'italic',
                                                              'font-weight':  'bold',
                                                             });
                                                             
                                                             $("#divselectcatvente").css({
                                                               'padding':  'auto', 
                                                               'margin-top':  '6%', 
                                                                          'font-size':  '12px',   
                                                                          'font-style':  'italic',
                                                                          'font-weight':  'bold',
                                                                      
                                                                         });
                                                                         $("#selectcategvente").css({
                                                                        
                                                                           'font-size':  '10px',   
                                                                           'font-style':  'italic',
                                                                           'font-weight':  'bold',
                                                                           'border-radius':  '20px',
                                                                       
                                                                          });
                                                                         

                                                                                     cssReseauparam()
                                                                                     csstelResponse()
                                                                                     cssMonEmeilResponse()
            
                                                                                     cssMotDePasse() 
                                                                                     cssiepub()
                                                                                     cssprofileie()
                                                                                           }     

      function cssReseauparam() {
        
        $("#divreseauso").css({
          //  '-ms-transform': 'translate(-50%, -50%)',
         //   'transform': 'translate(-50%, -50%)',
         //      'transform': 'translate(-50%, -50%)',
          //     'font-size':  '12px',   
            'margin':  'auto',
             'width':  '85%',
             'height':  '0%',
           //  'box-shadow': '0 0 15px rgba(0, 0, 0, 0.12)',
             'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
             '-webkit-transition': '.8s ease-in-out',
              'transition': '.8s ease-in-out ', 
              });
              $(".iconreseau").css({
                //  '-ms-transform': 'translate(-50%, -50%)',
               //   'transform': 'translate(-50%, -50%)',
               //      'transform': 'translate(-50%, -50%)',
                //     'font-size':  '12px',   
               //      'font-style':  'italic',
               'margin':  '3%',
               'margin-bottom':  '1%',
               '-webkit-transition': '.8s ease-in-out',
               'transition': '.8s ease-in-out ', 
               'height':  '0%',
               'border-radius':  '50%',
               'box-shadow': '1px 1px 3px #555 ',  
              
                    });
                    $(".iconreseaub").css({
                      //  '-ms-transform': 'translate(-50%, -50%)',
                     //   'transform': 'translate(-50%, -50%)',
                     //      'transform': 'translate(-50%, -50%)',
                      //     'font-size':  '12px',   
                     //      'font-style':  'italic',
                     'margin':  '3%',
                     'margin-bottom':  '1%',
                     'border':  '50%',
                     'box-shadow': '1px 1px 3px #555 ',  
                     '-webkit-transition': '.8s ease-in-out',
                     'transition': '.8s ease-in-out ', 
                     'height':  '0%',
                          });
              $(".iconreseau").height((0*Y)/100)

              $(".iconreseaub").height((0*Y)/100)
              $(".divreseauso").eq(0).css({
                   'font-style':  'italic',
                   '-webkit-transition': '.8s ease-in-out',
                   'transition': '.8s ease-in-out ', 
                   'height':  '0%',
                   'margin-left':  '10%'
                    });
                    $(".divreseauso").eq(1).css({
                      '-webkit-transition': '.8s ease-in-out',
              'transition': '.8s ease-in-out ', 
            'box-shadow': '0 0 5px rgba(0, 0, 0, 1)',
                     'height':  '0%',
                     //'border':  '1px solid blue',
                          });
                          $(".iconreseaub").css({
                            '-webkit-transition': '.8s ease-in-out',
                            'transition': '.8s ease-in-out ', 
                          'float':  'left', 
                          'height':  '0%',
                                });
                                $("#inputresaeu").css({
                                  '-webkit-transition': '.8s ease-in-out',
                                  'transition': '.8s ease-in-out ', 
                                  'font-size':  '10px', 
                                 'width':  '73%',
                                 'float':  'right',
                                 'margin':  'auto',
                                 'margin-top':  '1%',
                                 'margin-bottom':  '3%',
                                 'opacity':  '0',
                               
                                });
                               //       $("#inputresaeu").height((0*Y)/100)
                          $("#inputvaliderresaeu").css({
                            'opacity':  '0',
                           // 'color':  'red',
                            'font-size':  '10px',   
                            'font-style':  'italic',
                            'font-weight':  'bold',
                          'border-radius':  '20px',
                           'margin':  'auto',
                         //  'margin-top':  '30%',
                           '-webkit-transition': '.8s ease-in-out',
                           'transition': '.8s ease-in-out ', 
                          });
      }                                                                                
function cssprofileb(){

   $("#divproileacceuil").css({
       'position':'relative',
    
     'margin': 'auto' ,
     'width': '95%' ,
        }) ;
        $('#divproileacceuil').height((Y*72)/100)
     

  $("#divprofileb").css({
    //'float': 'right',
         //   'padding-left': '4%' ,
         //   'padding-top': '1%' ,
       //   '-webkit-transition': '.8s ease-in-out',
       //   'transition': '.8s ease-in-out ', 
       'position':'absolute',
     
       'box-shadow': '1px 1px 3px #555',
       'border-radius': '3%',
        
      //  'margin-left': '25%' ,
      'top':'3%',
                 'left': '50%',
             '-ms-transform': 'translateX(-50%)',
               'transform': 'translateX(-50%)',
         
        }) ;
      
        $('#divprofileb').width((X*20)/100) 
        $('#divprofileb').height((Y*28)/100)
        $("#profb").css({
         // 'box-shadow': '1px 1px 3px #555',
    
          'border-radius': '15%',
          'position':'absolute',
          'top':'3%',
                 'left': '50%',
             '-ms-transform': 'translateX(-50%)',
               'transform': 'translateX(-50%)',
              }) ;
      
      
              $('#profb').width((X*15)/100) 
              $('#profb').height((Y*15)/100)

              $("#nompb").css({
                'position':'absolute',
                'top': '70%',
                 'left': '50%',
                   '-ms-transform': 'translate(-50% , -50%)',
                     'transform': 'translate(-50% , -50%)',
                    }) ;
            
                    

                   
                  //  $('#nompb').width((X*15)/100) 
                   // $('#nompb').height((Y*15)/100)

                   
                   $("#inputprofilec").css({
                    'font-size':  '12px',   
                    'font-style':  'italic',
                    'font-weight':  'bold',
                  'border-radius':  '20px',
                        }) ;
                   $("#modifierprofb").css({
                    'position': 'absolute',
                    'top': '85%',
                    'left': '50%',
                    '-ms-transform': 'translate(-50%,-50%)' ,
                    'transform': 'translate(-50%,-50%)',
                    'font-size':  '12px',   
                    'font-style':  'italic',
                    'font-weight':  'bold',
                  'border-radius':  '20px',
                        }) ;

                        $("#divtabprofile").css({
                          'position': 'relative',
                          'box-shadow': '1px 1px 3px #555 inset',
                          'width': '45%',
                          'height':  '70%',
                          'float':  'right',
                          'top': '15%',
                            'opacity': '0',
                          'margin-right': '2%',

                              }) ;
                              $(".labelprofile").css({
                              //  'position': 'relative',
                              //  'box-shadow': '1px 1px 3px #555 inset',
                              //  'width': '45%',
                                'font-weight':  'normal',
                                'font-size':  '12px',
                                'color':  'black',
                                    }) ;

                              
                                    
                                    $("#validerchangepo").css({
                                      'position': 'absolute',
                                      'left': '50%',
                                   '-ms-transform': 'translateX(-50%)' ,
                                      'transform': 'translateX(-50%)', 
                                      'background-color': 'transparent',
                                      'border': '2px solid #555',
                                      'border-radius':  '20px',
                                      'font-size':  '13px',
                                      'color':  '#555',
                                      'padding-left':  '3%',
                                      'padding-right':  '3%',
                                      'opacity':  '0.5',
                                      'width':  '50%',
                                          }) ;
                      // $('#nompb').width((X*15)/100) 
                        
                              $("#validerchangep").css({
                                'position': 'absolute',
                                'left': '50%',
                             '-ms-transform': 'translateX(-50%)' ,
                                'transform': 'translateX(-50%)', 
                                'background-color': 'transparent',
                                'border-radius':  '20px',
                                    }) ;
                  
                  
                                    $("#inputprofilea , #inputprofileb").css({
                                      'border-left':'0',
	                                      'border-top':'0',
                                    	'border-right':'0',
                                    	'border-bottom': '1px solid #999',
	                                    'outline':'none',

                                      'background-color': 'transparent',
                                     'width': '95%', 
                                     'font-size':  '12px',   
                                     'font-style':  'italic',
                                          }) ;
                                          $("#inputprofilec").css({
                                        
                                          'border': '1px solid black',
                                              'background-color': '',
                                           'font-size':  '12px',   
                                           'font-style':  'italic',
                                           'margin-left':  '2%',
                                                }) ;
                                                
                                                $(".tdarticle").css({
                                                  'color':  'blue',
                                                   'font-size':  '10px',   
                                                   'font-style':  'italic',

                                                      }) ;

                                            $("#divcount").css({
                                     
                                      'box-shadow': '1px 1px 3px #555 inset',
                                      'width': '40%',
                                      'height': '100%',
                                      'float': 'left',
                                      'border-radius': '50%',
                                          }) ;
                                          $("#divbasprofile").css({
                                            'position': 'relative',
                                         
                                            'width': '100%',
                                            'top': '10%',
                                                }) ;
                $('#divbasprofile').height((Y*28)/100)
             //   $('#divbasprofile').width((X*70)/100)
      
             $("#divhautprofile").css({
              'position': 'relative',
             
              'width': '100%',
              'top': '2%',
                  }) ;
$('#divhautprofile').height((Y*28)/100)

$("#submitpro").css({
  //'width': '30%',
 // 'border': '1px solid black',
//  'padding-left':  '2%',  
'box-shadow': '1px 1px 3px #555',
'font-size':  '12px',   
'font-style':  'italic',
'font-weight':  'bold',
//'background': 'green',
//'background-color': 'green',
//'border-radius':  '20px',
'position': 'absolute',
'left': '50%',
'top': '60%',
'-ms-transform': 'translate(-50%,-50%)' ,
'transform': 'translate(-50%,-50%)', 
      }) ;
      $("#submitbou").css({
        //'width': '30%',
       // 'border': '1px solid black',
      //  'padding-left':  '2%',  
      'box-shadow': '1px 1px 3px #555',
      'font-size':  '12px',   
      'font-style':  'italic',
      'font-weight':  'bold',
      'margin-left':  '34%',
      'margin-bottom':  '3%',
      //'background': 'green',
      //'background-color': 'green',
      'border-radius':  '20px',
    //  'position': 'absolute',
     // 'left': '50%',
    //  'top': '60%',
    //  '-ms-transform': 'translate(-50%,-50%)' ,
    //  'transform': 'translate(-50%,-50%)', 
            }) ;
            $(".submita").eq(0).css({
           //   'border': '1px solid black',
              'box-shadow': '1px 1px 3px #555',
              'padding-left':  '4%',  
            'font-size':  '12px',   
            'font-style':  'italic',
            'font-weight':  'bold',
           // 'margin-bottom':  '3%',
           'border-radius':  '20px',
            'margin-left':  '12%',
            'text-align':  'center',
         
                  }) ;
                  $(".submita").eq(1).css({
                    //   'border': '1px solid black',
                       'box-shadow': '1px 1px 3px #555',
                       'padding-left':  '4%',  
                     'font-size':  '12px',   
                     'font-style':  'italic',
                     'font-weight':  'bold',
                    // 'margin-bottom':  '3%',
                    'border-radius':  '20px',
                     'margin-left':  '12%',
                     'text-align':  'center',
                  
                           }) ;
            $(".fileupdatea").eq(0).css({
              'width': '65%',
              'border': '1px solid black',
              'box-shadow': '1px 1px 3px #555',
              'padding-left':  '4%',  
            'font-size':  '10px',   
            'font-style':  'italic',
            'font-weight':  'bold',
           // 'margin-bottom':  '3%',
            'margin-left':  '15%',
            'text-align':  'center',
         
                  }) ;
                  $(".fileupdatea").eq(1).css({
                    'width': '65%',
                    'border': '1px solid black',
                    'box-shadow': '1px 1px 3px #555',
                    'padding-left':  '4%',  
                  'font-size':  '10px',   
                  'font-style':  'italic',
                  'font-weight':  'bold',
                 // 'margin-bottom':  '3%',
                  'margin-left':  '15%',
                  'text-align':  'center',
               
                        }) ;
      
      $("#fileupdatebou").css({
        'width': '40%',
        'border': '1px solid black',
        'box-shadow': '1px 1px 3px #555',
        'padding-left':  '2%',  
      'font-size':  '12px',   
      'font-style':  'italic',
      'font-weight':  'bold',
      'margin-bottom':  '3%',
      'margin-left':  '33%',

      //'background': 'green',
      //'background-color': 'green',
      //'border-radius':  '20px',
      //'position': 'absolute',
     // 'left': '50%',
     // 'top': '60%',
     // '-ms-transform': 'translate(-50%,-50%)' ,
     // 'transform': 'translate(-50%,-50%)', 
   //  '-ms-transform': 'translateX(-50%)' ,
    //  'transform': 'translateX(-50%)', 
            }) ;

$("#fileupdatepro").css({
  'width': '30%',
  'border': '1px solid black',
  'box-shadow': '1px 1px 3px #555',
  'padding-left':  '2%',  
'font-size':  '12px',   
'font-style':  'italic',
'font-weight':  'bold',
//'background': 'green',
//'background-color': 'green',
//'border-radius':  '20px',
'position': 'absolute',
'left': '50%',
'top': '60%',
'-ms-transform': 'translate(-50%,-50%)' ,
'transform': 'translate(-50%,-50%)', 
      }) ;

                $("#divboutonprofil").css({
                  'width': '40%',
                  'float': 'right',
                  'height': '115%',
                  'margin': '2%',
             //  'overflow': 'auto',
                  'margin-top': '-7%',
                      }) ;
                      $("#tabcount").css({
                  
                           'box-shadow': '1px 1px 3px #555 ',
                           'margin': 'auto',
                           'margin-top': '15%',
                           'border-radius': '20%',
                        //  '-webkit-transition': '.8s ease-in-out',
                        //   'transition': '.8s ease-in-out ', 
                        '-ms-transform': 'rotate(40deg)',
                        'transform': 'rotate(40deg)',
                      
                            }) ;
                       
                      $(".tdcountname").css({
                     //   'box-shadow': '1px 1px 3px #555 inset',
                       'font-size':  '17px',   
                       'font-style':  'normal',
                       'font-weight':  'bold',
                            }) ;

                            $(".tdcount").css({
                           //   'box-shadow': '1px 1px 3px #555 ',
                              'font-size':  '19px',   
                              'font-style':  'italic',
                              'font-weight':  'bold',
                                   }) ;


                                   $("#menuprofileb1,#menuprofileb2,#menuprofileb3,#menuprofileb4,#menuprofileb5,#menuprofileb0,#menuprofileb6").css({
            
                                    'background':'rgba(233,0,0,0.1)',
                                    'box-shadow': '1px 1px 3px #555',
                                    'box-shadow': '1px 1px 3px black',
                                    'margin': '5%',
                                    'margin-bottom': '1%',
                                    'height': '20%',
                                    'position': 'relative',
                                    'border-radius':'20px',
                                      }) ;
                              
                                  
                                         
                                             
                                     
                                         
                                         //     $("#profa").width((10*X)/100)
                                         $("#menuprofileb1,#menuprofileb2,#menuprofileb3,#menuprofileb4,#menuprofileb5,#menuprofileb0,#menuprofileb7").height((3*Y)/100)
                                      
                                            
                                                  $(".iconmenuprofileb").height((2.5*Y)/100)
                                      
                                                  $(".menuitemprofileb").css({
                                                    'position':'absolute',
                                                    'top': '50%',
                                                          'left': '50%',
                                                            '-ms-transform': 'translate(-50%, -50%)',
                                                            'transform': 'translate(-50%, -50%)',
                                                              
                                                               'font-size':  '12px',   
                                                               'font-style':  'italic',
                                                               'font-weight':  'bold',
                                                              });
                                                              
                                                              $("#divselectcatvente").css({
                                                                'padding':  'auto', 
                                                                'margin-top':  '6%', 
                                                                           'font-size':  '12px',   
                                                                           'font-style':  'italic',
                                                                           'font-weight':  'bold',
                                                                       
                                                                          });
                                                                          $("#selectcategvente").css({
                                                                         
                                                                            'font-size':  '10px',   
                                                                            'font-style':  'italic',
                                                                            'font-weight':  'bold',
                                                                            'border-radius':  '20px',
                                                                        
                                                                           });
                                                                          


                                                              $("#divreseauso").css({
                                                                      //  '-ms-transform': 'translate(-50%, -50%)',
                                                                     //   'transform': 'translate(-50%, -50%)',
                                                                     //      'transform': 'translate(-50%, -50%)',
                                                                      //     'font-size':  '12px',   
                                                                        'margin':  'auto',
                                                                         'width':  '85%',
                                                                         'height':  '0%',
                                                                       //  'box-shadow': '0 0 15px rgba(0, 0, 0, 0.12)',
                                                                         'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
                                                                         '-webkit-transition': '.8s ease-in-out',
                                                                          'transition': '.8s ease-in-out ', 
                                                                          });
                                                                          $(".iconreseau").css({
                                                                            //  '-ms-transform': 'translate(-50%, -50%)',
                                                                           //   'transform': 'translate(-50%, -50%)',
                                                                           //      'transform': 'translate(-50%, -50%)',
                                                                            //     'font-size':  '12px',   
                                                                           //      'font-style':  'italic',
                                                                           'margin':  '3%',
                                                                           'margin-bottom':  '1%',
                                                                           '-webkit-transition': '.8s ease-in-out',
                                                                           'transition': '.8s ease-in-out ', 
                                                                           'height':  '0%',
                                                                           'box-shadow': '1px 1px 3px #555 ',  
                                                                          
                                                                                });
                                                                                $(".iconreseaub").css({
                                                                                  //  '-ms-transform': 'translate(-50%, -50%)',
                                                                                 //   'transform': 'translate(-50%, -50%)',
                                                                                 //      'transform': 'translate(-50%, -50%)',
                                                                                  //     'font-size':  '12px',   
                                                                                 //      'font-style':  'italic',
                                                                                 'margin':  '3%',
                                                                                 'margin-bottom':  '1%',
                                                                                 'border':  '50%',
                                                                                 'box-shadow': '1px 1px 3px #555 ',  
                                                                                 '-webkit-transition': '.8s ease-in-out',
                                                                                 'transition': '.8s ease-in-out ', 
                                                                                 'height':  '0%',
                                                                                      });
                                                                          $(".iconreseau").height((0*Y)/100)

                                                                          $(".iconreseaub").height((0*Y)/100)
                                                                          $(".divreseauso").eq(0).css({
                                                                               'font-style':  'italic',
                                                                               '-webkit-transition': '.8s ease-in-out',
                                                                               'transition': '.8s ease-in-out ', 
                                                                               'height':  '0%',
                                                                               'margin-left':  '10%'
                                                                                });
                                                                                $(".divreseauso").eq(1).css({
                                                                                  '-webkit-transition': '.8s ease-in-out',
                                                                          'transition': '.8s ease-in-out ', 
                                                                        'box-shadow': '0 0 5px rgba(0, 0, 0, 1)',
                                                                                 'height':  '0%',
                                                                                 //'border':  '1px solid blue',
                                                                                      });
                                                                                      $(".iconreseaub").css({
                                                                                        '-webkit-transition': '.8s ease-in-out',
                                                                                        'transition': '.8s ease-in-out ', 
                                                                                      'float':  'left', 
                                                                                      'height':  '0%',
                                                                                            });
                                                                                            $("#inputresaeu").css({
                                                                                              '-webkit-transition': '.8s ease-in-out',
                                                                                              'transition': '.8s ease-in-out ', 
                                                                                              'font-size':  '10px', 
                                                                                             'width':  '73%',
                                                                                             'float':  'right',
                                                                                             'margin':  '2%',
                                                                                             'margin-top':  '4%',
                                                                                             'margin-bottom':  '5%',
                                                                                             'opacity':  '0',
                                                                                           
                                                                                            });
                                                                                           //       $("#inputresaeu").height((0*Y)/100)
                                                                                      $("#inputvaliderresaeu").css({
                                                                                        'opacity':  '0',
                                                                                        'font-size':  '12px',   
                                                                                        'font-style':  'italic',
                                                                                        'font-weight':  'bold',
                                                                                      'border-radius':  '20px',
                                                                                       'margin-left':  '34%',
                                                                                       'margin-top':  '5%',
                                                                                       '-webkit-transition': '.8s ease-in-out',
                                                                                       'transition': '.8s ease-in-out ', 
                                                                                      });
                                                                                      csstel()
                                                                                      cssMonEmeil()
                                                                                      cssMotDePasse() 
                                                                                      cssiepub()
                                                                                      cssprofileie()
                                                                                            }                                                                                  
                                                                                            function cssprofileie(){
                                                                                              $(".divajouter").css({
                                                                                                'width': '40%',
                                                                                                'border': '1px solid black',
                                                                                                'box-shadow': '1px 1px 3px #555',
                                                                                               'font-size':  '10px', 
                                                                                               'margin-left':  '20%',   
                                                                                              'font-style':  'italic',
                                                                                              'font-weight':  'bold',
                                                                                              'position':  'absolute',
                      
                      'left': '30%',
                            'top': '70%',
                              '-ms-transform': 'translate(-50% , -50%)',
                              'transform': 'translate(-50% , -50%)',
                                                                                                    }) ;
                                                                                                    $("#submite").css({
                                                                                                    //  'width': '40%',
                                                                                                   //   'border': '1px solid black',
                                                                                                      'box-shadow': '1px 1px 3px #555',
                                                                                                     'font-size':  '10px', 
                                                                                                     'border-radius':  '20px', 
                                                                                                     'margin-left':  '20%',   
                                                                                                    'font-style':  'italic',
                                                                                                    'font-weight':  'bold',
                                                                                                    'position':  'absolute',
                            
                            'left': '30%',
                                  'top': '70%',
                                    '-ms-transform': 'translate(-50% , -50%)',
                                    'transform': 'translate(-50% , -50%)',
                                                                                                          }) ;
                                                                                                  }
  function cssiepub(){
    $(".fileupdatep").css({
      'width': '60%',
      'border': '1px solid black',
      'box-shadow': '1px 1px 3px #555',
     'font-size':  '8px', 
     'margin-left':  '20%',   
    'font-style':  'italic',
    'font-weight':  'bold',
          }) ;

          $(".submitp").css({
          //  'width': '60%',
           // 'border': '1px solid black',
            'box-shadow': '1px 1px 3px #555',
            'border-radius':  '20px', 
           'font-size':  '12px', 
           'margin-left':  '17%',   
          'font-style':  'italic',
          'font-weight':  'bold',
                }) ;
          $(".fileupdatep").eq(0).css({
            'padding-left':  '2%',  
                }) ;
  }              
  
  function csstelResponse(){
    $("#divtel").css({
         'position':  'relative', 
      'margin':  'auto',
         'text-align':  'center',
         'width':  '85%',
         'height':  '0%',
         'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
         '-webkit-transition': '.8s ease-in-out',
          'transition': '.8s ease-in-out ', 
                  });
                  $("#inputtel").css({
                   'margin-top':  '2%',
                   'margin':  'auto',
                  // 'padding':  '0%',
                //  'height':  '15%',
                   'width':  '85%',
                 'border-radius':  '20px',
                // 'opacity':  '0',
                 '-webkit-transition': '.8s ease-in-out',
                 'transition': '.8s ease-in-out ', 
                          });
                          $('#inputtel').height((Y*0)/100)
     
                          $("#validertel").css({
                           // 'opacity':  '0',
                          // 'position':  'absolute', 
                            'font-size':  '10px',   
                            'font-style':  'italic',
                            'font-weight':  'bold',
                            'border-radius':  '20px',
                            'margin-top':  '3%',
                        //  'left': '50%',
                       //   '-ms-transform': 'translateX(-50%)',
                      //      'transform': 'translateX(-50%)',
                          // 'opacity':  '0',
                           '-webkit-transition': '.8s ease-in-out',
                           'transition': '.8s ease-in-out ', 
                          });
                          $('#validertel').height((Y*0)/100)
     
                          $(".changercontenut").css({
              
                           'margin':  'auto',
                           'opacity':  '0',
                           'font-size':  '10px',   
                          'font-style':  'italic',
                           'font-weight':  'bold',
                           '-webkit-transition': '.8s ease-in-out',
                           'transition': '.8s ease-in-out ', 
                              });
  }
  
function csstel(){
  $("#divtel").css({
       'position':  'relative', 
    'margin':  'auto',
       'text-align':  'center',
       'width':  '85%',
       'height':  '0%',
       'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
       '-webkit-transition': '.8s ease-in-out',
        'transition': '.8s ease-in-out ', 
                });
                $("#inputtel").css({
                 'margin-top':  '2%',
                 'margin':  'auto',
                // 'padding':  '0%',
              //  'height':  '15%',
                 'width':  '85%',
             //  'float':  'right',
              // 'opacity':  '0',
               '-webkit-transition': '.8s ease-in-out',
               'transition': '.8s ease-in-out ', 
                        });
                        $('#inputtel').height((Y*0)/100)
   
                        $("#validertel").css({
                         // 'opacity':  '0',
                        // 'position':  'absolute', 
                          'font-size':  '10px',   
                          'font-style':  'italic',
                          'font-weight':  'bold',
                        'border-radius':  '20%',
                      //  'left': '50%',
                     //   '-ms-transform': 'translateX(-50%)',
                    //      'transform': 'translateX(-50%)',
                        // 'opacity':  '0',
                         '-webkit-transition': '.8s ease-in-out',
                         'transition': '.8s ease-in-out ', 
                        });
                        $('#validertel').height((Y*0)/100)
   
                        $(".changercontenut").css({
            
                         'margin':  'auto',
                         'opacity':  '0',
                         'font-size':  '10px',   
                        'font-style':  'italic',
                         'font-weight':  'bold',
                         '-webkit-transition': '.8s ease-in-out',
                         'transition': '.8s ease-in-out ', 
                            });
}

function cssMonEmeilResponse(){
  
  $("#divemail").css({
    'position':  'relative', 
    'margin':  'auto',
    'text-align':  'center',
    
    'width':  '85%',
    'height':  '0%',
    'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
    '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
             });
            
             $("#inputemail").css({
            
             
             
             // 'padding':  '0%',
           //  'height':  '15%',
              'width':  '85%',
          //  'float':  'right',
          'position':  'absolute',
                      
          'top': '50%',
          'left': '50%',
            '-ms-transform': 'translate(-50%,-50%)',
            'transform': 'translate(-50%,-50%)',
        
          'border-radius':  '20px',
            'opacity':  '0',
            '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
                     });
                     $('#inputemail').height((Y*0)/100)

                     $("#valideremailp").css({
                       'opacity':  '0',
                      'position':  'absolute', 
                      'border-radius':  '20px',
                       'font-size':  '10px',   
                       'font-style':  'italic',
                       'font-weight':  'bold',
                     'border-radius':  '20px',
                     'left': '50%',
                     'top': '70%',
                     '-ms-transform': 'translateX(-50%)',
                      'transform': 'translateX(-50%)',
                     'opacity':  '0',
                      '-webkit-transition': '.8s ease-in-out',
                      'transition': '.8s ease-in-out ', 
                     });
                     $('#valideremailp').height((Y*0)/100)

                     $(".changercontenue").css({
                      'position':  'absolute',
                      
                    
                            'left': '50%',
                              '-ms-transform': 'translateX(-50%)',
                              'transform': 'translateX(-50%)',
                      'width':  '100%',
                      'opacity':  '0',
                     
                     
                      'font-size':  '10px',   
                    'font-style':  'italic',
                     'font-weight':  'bold',
                     '-webkit-transition': '.8s ease-in-out',
                     'transition': '.8s ease-in-out ', 
                     'margin-bottom':  '12%',
                         });
}
function cssMonEmeil(){
  
  $("#divemail").css({
    'border':  '1px solid white',

     'position':  'relative', 
    'margin':  'auto',
    'text-align':  'center',
    'width':  '85%',
    'height':  '0%',
    'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
    '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
             });
             $("#inputemail").css({
              'margin':  'auto',
               'margin-top':  '8%',
               'border':  '1px solid black',

             // 'padding':  '0%',
           //  'height':  '15%',
              'width':  '85%',
          //  'float':  'right',
        
          'border-radius':  '20px',
            'opacity':  '0',
            '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
                     });
                     $('#inputemail').height((Y*0)/100)

                     $("#valideremailp").css({
                       'opacity':  '0',
                      'position':  'absolute', 
                     
                       'font-size':  '10px',   
                       'font-style':  'italic',
                       'font-weight':  'bold',
                       'border-radius':  '20px',
                     'left': '50%',
                     'top': '70%',
                     '-ms-transform': 'translateX(-50%)',
                      'transform': 'translateX(-50%)',
                     'opacity':  '0',
                      '-webkit-transition': '.8s ease-in-out',
                      'transition': '.8s ease-in-out ', 
                     });
                     $('#valideremailp').height((Y*0)/100)

                     $(".changercontenue").css({
                      'position':  'absolute',
                      
                      'left': '1%',
                            'left': '50%',
                              '-ms-transform': 'translateX(-50%)',
                              'transform': 'translateX(-50%)',
                      'width':  '100%',
                      'opacity':  '0',
                     
                     
                      'font-size':  '10px',   
                    'font-style':  'italic',
                     'font-weight':  'bold',
                     '-webkit-transition': '.8s ease-in-out',
                     'transition': '.8s ease-in-out ', 
                         });
}
function cssMotDePasse(){
  
  
  $("#divshowmot").css({
    'position':  'relative', 
    'margin':  'auto',
    'text-align':  'center',
    'width':  '85%',
    'height':  '0%',
    'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
    '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
             });
        $(".changercontenu").css({
         
       'margin':  'auto',
       'opacity':  '0',
       'font-size':  '10px',   
      'font-style':  'italic',
       'font-weight':  'bold',
       '-webkit-transition': '.8s ease-in-out',
       'transition': '.8s ease-in-out ', 
          });
        
          $("#tabmotpasse").css({
            'margin':  'auto',
          //  'text-align':  'center',
            'height':  '0%',
            'width':  '90%',
            '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
            'box-shadow': '1px 1px 3px #555 ',
            'font-size':  '10px',   
            'font-style':  'italic',
             'font-weight':  'bold',
                     });
                //   $('#tabmotpasse').height((Y*10)/100)

                     $(".inputpasse").css({
                      'margin':  'auto',
                     // 'padding':  '0%',
                   //  'height':  '15%',
                      'width':  '55%',
                    'float':  'right',
                    'border-radius':  '20px',
                    'opacity':  '0',
                    '-webkit-transition': '.8s ease-in-out',
                    'transition': '.8s ease-in-out ', 
                             });
                             $(".tdtitrep").css({
                             'margin':  'auto',
                             '-webkit-transition': '.14s ease-in-out',
                   'transition': '.14s ease-in-out ', 
                          //  'float':  'left',
                            'text-align':  'center',
                            'opacity':  '0',
                                     });
          
                //    $('.tdtitrep').height((Y*2)/100)
                    $('.inputpasse').height((Y*0)/100)

                    

                    $(".trdiv").css({
                    //  'margin':  '0%',
                   //   'padding':  '0%',
                   'text-align':  'center',
                   'margin':  'auto',
                   'padding-left':  '2%',
                   'margin-bottom':  '2%',
                     'height':  '0%',
                   //   'border':  '1px solid green',
                    'width':  '95%',
                    '-webkit-transition': '.8s ease-in-out',
                    'transition': '.8s ease-in-out ', 
                   
                             });

                             $("#validerpassepb").css({
                             // 'opacity':  '0',
                             'position':  'absolute', 
                              'font-size':  '10px',   
                              'font-style':  'italic',
                              'font-weight':  'bold',
                            'border-radius':  '20px',
                            'top': '80%',
                            'left': '50%',
                            '-ms-transform': 'translateX(-50%)',
                              'transform': 'translateX(-50%)',
                             'opacity':  '0',
                             '-webkit-transition': '.8s ease-in-out',
                             'transition': '.8s ease-in-out ', 
                            });
                            $('#validerpassepb').height((Y*0)/100)

  }
function cssSenregistrementResponse() {

  $("#lb").css({
    'width':'100%',
   'height':'17%',
   'text-align':'center',
  // 'border':'1px solid red',
  // 'box-shadow': '1px 1px 3px #555',
 //  'box-shadow': '1px 1px 8px black',
 'box-shadow': '1px 1px 8px #555',
   'border-radius':'20px',
   'background':'rgba(233,0,0,0.1)',
  });
  $("#logob").css({
    'float':'left',
    
     });

     $("#logob").width((12*X)/100)
     $("#logob").height((5*Y)/100)
 

     

     $("#ltext").css({
    //  'float':'right',
      'padding':'3%',
      'padding-top':'40%',
      'font-size':'12px',
      'font-style':'italic',
      'font-weight':'bold'
       });
  
  
    $("#divenregistrer").css({
       
         'width':'70%',
      //   'border':'1px solid red',
         'box-shadow': '1px 1px 3px #555',
          
  'height':'28%',
  'position':'fixed',
  'top': '50%',
            'left': '52%',
             '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
            'margin':'2% auto',
        'padding':'3%',
  'background':'rgba(255,255,240,0.7)',
  'border-radius':'15%',
  
       });
      
  
     
  
           $("#lc").css({
            'position':'relative',
            'border':'1px solid red',
            'margin-top':'5%',
           // 'margin-left':'-15%',
            'width':'50%',
           'height':'63%',
           'float':'left',
           'box-shadow': '1px 1px 8px #555',
   'border-radius':'3%',
   'background':'rgba(233,0,0,0.1)',
          
          });
  
          $("#li").css({
            'position':'relative',
            'border': '1px solid red',
            'margin-top':'13%',
            'width':'35%',
           'height':'40%',
          // 'right':'-10%',
          'float':'right',
         
           'box-shadow': '1px 1px 8px #555',
   'border-radius':'3%',
   'background':'rgba(233,0,0,0.1)',
      
          });
  
          $("#lcont").css({
            'margin-top':'17%',
             'position':'relative',
            'width':'100%',
           'height':'15%',
           'float':'left',
           'box-shadow': '1px 1px 8px #555',
           'border-radius':'20px',
           'background':'rgba(233,0,0,0.1)',
      
          });
          $("table").css({
          'border-spacing': '10px',
        });
  
          $(".din").css({
          //:  'margin':'3%',
            'margin-top':'8%',
         //   'width':'100%',
          // 'height':'15%',
         //  'border':'1px solid black',
      
          });
          $(".lin").css({
            'font-size':'12px',
      'font-style':'italic',
      'font-weight':'bold'
          });
          
           $(".in").css({
            'width':'75%',
            'margin':'1%',
            'box-shadow': '1px 1px 3px #555 inset',
            'border-radius':'20px',
            'background':'white',
            'margin-left':'5%',
            'outline':'none',
          });
  
          $(".in").height((2*Y)/100)
          
  
          $("#profa").css({
           // 'width':'75%',
            'margin':'1%',
             'position':'absolute',
                  
                  
                   'left': '50%',
                     '-ms-transform': 'translateX(-50%)',
                     'transform': 'translateX(-50%)',
             
            'border':'1px solid black',
            'border-radius':'50%',
          
          });
          $("#profa").width((12*X)/100)
          $("#profa").height((8*Y)/100)
  
  
  
          $("#change").css({
            'position':'absolute',
           
                 'top':'90%',
                  
                   'left': '50%',
                     '-ms-transform': 'translate(-50%,-50%)',
                     'transform': 'translate(-50%,-50%)',
                      
                     'font-size':  '10px',   
                     'font-style':  'italic',
                     'font-weight':  'bold',
                   'border-radius':  '20px',
                   'box-shadow': '1px 1px 3px #555',
       
                  
            
          });
  
          $("#ve").css({
           
             'position':'absolute',
             'top': '50%',
                   'left': '50%',
                     '-ms-transform': 'translate(-50%, -50%)',
                     'transform': 'translate(-50%, -50%)',
                     'font-size':  '10px',   
                     'font-style':  'italic',
                     'font-weight':  'bold',
                   'border-radius':  '20%',
                   'padding':  '1%',
            
          });
          $("#validerchanger").css({
            'position': 'absolute',
            'top': '15%',
            'left': '50%',
         '-ms-transform': 'translateX(-50%)' ,
            'transform': 'translateX(-50%)', 
            'font-size':  '12px',   
            'font-style':  'italic',
            'font-weight':  'bold',
            'background-color':  '#f0ffff',
          'border-radius':  '20%',
           // 'color':  '#555',
            'color':  'black',
            'padding':  '1%',
         //   'padding-right':  '3%',
            'opacity':  '0.5',
            'box-shadow': '1px 1px 12px #555',
            'border': '1px solid black',
       
           // 'width':  '50%',
                }) ;
          $("#ae").css({
           
            'position':'absolute',
            'top': '50%',
                  'right': '10%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    'transform': 'translate(-50%, -50%)',
            
           
         });
      
  
       $(".save").css({
        'width': '100%',
      'padding':'10px 0',
      'margin':'5px 0',
      'border-left':'0',
      'border-top':'0',
      'color':'black',
       'font-size': '15px',
          'font-style': 'italic',
          'font-weigth': 'bold',
      'border-right':'0',
      'border-bottom': '1px solid #999',
      'outline':'none',
      'background': 'transparent',
       });
  
       $("#saveNewClient").css({
        'width': '85%',
      'padding': '10px 30px',
      'cursor': 'pointer',
      'display': 'block',
      'margin': 'auto',
     
      'background':'rgba(236,255,66,0.8)',
                
      'border': '0',
      'outline': 'none',
      'margin-top':'30px',
      'border-radius': '30px',
       });
       $("#annuler").css({
        'width': '25%',
       'cursor': 'pointer',
      'display': 'block',
      
      'background': '#bafff0',
      
      'outline': 'none',
      'margin-top':'2%',
      'margin-left':'35%',
      'border-radius': '30px',
       });
  
       $(".spancheck").css({
     
      'color':'red',
      
       });
  
       $(".span").css({
     
        'color':'red',
        
         });
        
       
    
  
  
   
      
           
    }
    function cssSenregistrement() {

      $("#lb").css({
        'width':'100%',
       // 'border':'1px solid blue',
       'height':'17%',
       'text-align':'center',
      
      // 'box-shadow': '1px 1px 3px #555',
     //  'box-shadow': '1px 1px 8px black',
     'box-shadow': '1px 1px 8px #555',
       'border-radius':'20px',
       'background':'rgba(233,0,0,0.1)',
      });
      $("#logob").css({
        'float':'left',
      
         });
    
         $("#logob").width((5*X)/100)
         $("#logob").height((5*Y)/100)
     
    
         
    
         $("#ltext").css({
        //  'float':'right',
          'padding':'3%',
          'padding-top':'40%',
          'font-size':'12px',
          'font-style':'italic',
          'font-weight':'bold'
           });
      
      
        $("#divenregistrer").css({
           
             'width':'40%',
             //'border':'1px solid red',
             'box-shadow': '1px 1px 3px #555',
              
      'height':'28%',
      'position':'fixed',
      'top': '50%',
                'left': '52%',
                 '-ms-transform': 'translate(-50%, -50%)',
                'transform': 'translate(-50%, -50%)',
                'margin':'2% auto',
              'padding':'3%',
      'background':'rgba(255,255,240,0.7)',
      'border-radius':'15%',
      
           });
          
      
         
      
               $("#lc").css({
            //    'position':'absolute',
                'border':'1px solid red',
                'margin-top':'5%',
                'margin-left':'5%',
                'width':'50%',
               'height':'75%',
               'float':'right',
               'box-shadow': '1px 1px 8px #555',
       'border-radius':'3%',
       'background':'rgba(233,0,0,0.1)',
              
              });
      
              $("#li").css({
                'border':'1px solid red',
                'position':'relative',
                'margin-top':'9%',
                'width':'35%',
               'height':'60%',
               'float':'left',
               'box-shadow': '1px 1px 8px #555',
       'border-radius':'3%',
       'background':'rgba(233,0,0,0.1)',
          
              });
      
              $("#lcont").css({
                'margin-top':'10%',
                 'position':'relative',
                'width':'100%',
               'height':'15%',
               'float':'left',
               'box-shadow': '1px 1px 8px #555',
               'border-radius':'20px',
               'background':'rgba(233,0,0,0.1)',
          
              });
              $("table").css({
              'border-spacing': '10px',
            });
      
              $(".din").css({
              //:  'margin':'3%',
                'margin-top':'8%',
             //   'width':'100%',
              // 'height':'15%',
             //  'border':'1px solid black',
          
              });
              $(".lin").css({
                'font-size':'12px',
          'font-style':'italic',
          'font-weight':'bold'
              });
              
               $(".in").css({
                'width':'75%',
                'margin':'1%',
                'box-shadow': '1px 1px 3px #555 inset',
                'border-radius':'20px',
                'background':'white',
                'margin-left':'5%',
                'outline':'none',
              });
      
              $(".in").height((2*Y)/100)
              
      
              $("#profa").css({
                'width':'75%',
                'margin':'1%',
                 'position':'absolute',
                      
                      
                       'left': '50%',
                         '-ms-transform': 'translateX(-50%)',
                         'transform': 'translateX(-50%)',
                 
                'border':'1px solid black',
                'border-radius':'50%',
              
              });
              $("#profa").width((10*X)/100)
              $("#profa").height((12*Y)/100)
      
      
      
              $("#change").css({
                'position':'absolute',
               
                     'top':'90%',
                      
                       'left': '50%',
                         '-ms-transform': 'translate(-50%,-50%)',
                         'transform': 'translate(-50%,-50%)',
                          
                         'font-size':  '10px',   
                         'font-style':  'italic',
                         'font-weight':  'bold',
                       'border-radius':  '20px',
                       'box-shadow': '1px 1px 3px #555',
           
                      
                
              });
      
              $("#ve").css({
               
                 'position':'absolute',
                 'top': '50%',
                       'left': '50%',
                         '-ms-transform': 'translate(-50%, -50%)',
                         'transform': 'translate(-50%, -50%)',
                         'font-size':  '10px',   
                         'font-style':  'italic',
                         'font-weight':  'bold',
                       'border-radius':  '20%',
                       'padding':  '1%',
                
              });
              $("#validerchanger").css({
                'position': 'absolute',
                'top': '15%',
                'left': '50%',
             '-ms-transform': 'translateX(-50%)' ,
                'transform': 'translateX(-50%)', 
                'font-size':  '12px',   
                'font-style':  'italic',
                'font-weight':  'bold',
                'background-color':  '#f0ffff',
              'border-radius':  '20%',
               // 'color':  '#555',
                'color':  'black',
                'padding':  '1%',
             //   'padding-right':  '3%',
                'opacity':  '0.5',
                'box-shadow': '1px 1px 12px #555',
                'border': '1px solid black',
           
               // 'width':  '50%',
                    }) ;
              $("#ae").css({
               
                'position':'absolute',
                'top': '50%',
                      'right': '10%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        'transform': 'translate(-50%, -50%)',
                
               
             });
          
      
           $(".save").css({
            'width': '100%',
          'padding':'10px 0',
          'margin':'5px 0',
          'border-left':'0',
          'border-top':'0',
          'color':'black',
           'font-size': '15px',
              'font-style': 'italic',
              'font-weigth': 'bold',
          'border-right':'0',
          'border-bottom': '1px solid #999',
          'outline':'none',
          'background': 'transparent',
           });
      
           $("#saveNewClient").css({
            'width': '85%',
          'padding': '10px 30px',
          'cursor': 'pointer',
          'display': 'block',
          'margin': 'auto',
         
          'background':'rgba(236,255,66,0.8)',
                    
          'border': '0',
          'outline': 'none',
          'margin-top':'30px',
          'border-radius': '30px',
           });
           $("#annuler").css({
            'width': '25%',
           'cursor': 'pointer',
          'display': 'block',
          
          'background': '#bafff0',
          
          'outline': 'none',
          'margin-top':'2%',
          'margin-left':'35%',
          'border-radius': '30px',
           });
      
           $(".spancheck").css({
         
          'color':'red',
          
           });
      
           $(".span").css({
         
            'color':'red',
            
             });
            
           
        
      
      
       
          
               
        }

        function cssMenuProfileBoutiqueResponse(){
          $("#divprofilemenu").css({
           // 'border': '1px solid red',
           'box-shadow': '1px 1px 3px #555 inset',
            'display': 'block',
            'width': '80%',
            'height': '6%',
            'border-radius': '20px',
            'position': 'absolute',
            'top': '15%',
            'left': '12%',
           
              });
             

              $(".menuprofile").css({
                'margin-right':  '4%',
             //   'background':'rgba(233,0,0,0.1)',
             //   'box-shadow': '1px 1px 3px #555',
              //  'border-radius':'20px',
                'font-size':  '7px',
                'float':  'left',
             //  'display':  'inline',
                'width':  '18%',
                'height':  '100%',
               'position':'relative',
              //  'border':'1px solid red',
                  }) ;
                $(".menuprofile").height((4*Y)/100)
                  
                  $(".menuprofile").eq(0).css({
                    
                //    'background':'',
                  // 'box-shadow': '1px 1px 3px #555 inset',
                      }) ;
                     
                      

                      $("#divmenuprofile").css({
                        
                        'margin':  '2%',
                        'display':  'block',
                        'padding-left':  '4%',
                           'width': '70%',
                            'height': '70%',
                            'float':  'right',
                             });
                  $("#divprofileimage").css({
                 //  'border': '1px solid red',
                   'position': 'relative',
                    'float': 'left',
                    'width': '20%',
                     'height': '98%',
                   //  'margin-bottom': '1%',
                     'box-shadow': '1px 1px 3px #555',
                     'border-radius':'50%',
                      });
                      
                      $("#profileimage").css({
                    //    'border': '1px solid black',
                    'box-shadow': '1px 1px 3px #555',
          
                        'border-radius': '50%',
                        'width': '65%',
                        'height': '65%',
                        'position':'absolute',
                       
                       'top': '40%',
                             'left': '50%',
                             '-ms-transform': 'translate(-50%, -50%)',
                              'transform': 'translate(-50%, -50%)',
                          });
                         
                        
                  $("#labelprofileimage").css({
                    'font-weight':  'bold',
                  //  'float':  'left',
                    'font-size':  '8px',
                    
                   'text-align': 'center',
                    'position':'absolute',
                    
                        'top': '85%',
                            'left': '50%',
                               '-ms-transform': 'translate(-50%, -50%)',
                              'transform': 'translate(-50%, -50%)',
                        });
                     
                        
                  
                          $(".iconmenuprofile").css({
                            'box-shadow': '1px 1px 3px #555',
                         
                            'border-radius': '50%',
                            'position':'absolute',
                        'top': '50%',
                              'left': '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                'transform': 'translate(-50%, -50%)',
                              });
                              $(".iconmenuprofile").height((4*Y)/100)
                              $(".iconmenuprofile").eq(0).css({
                    
                                'box-shadow': '1px 1px 3px #555 inset',
                                'border':'1px solid rgba(233,0,0,0.5)',
                              }) ;
                           
                              $(".menuitemprofile").css({
                                'display':'none',
                                'position':'absolute',
                                'top': '50%',
                                      'left': '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        'transform': 'translate(-50%, -50%)',
                                           'transform': 'translate(-50%, -50%)',
                                  });
      
                             
              
              
        }

  function cssMenuProfileBoutique(){
    $("#divprofilemenu").css({
     // 'border': '1px solid black',
     'box-shadow': '1px 1px 3px #555 inset',
      'display': 'block',
      'width': '20%',
      'height': '50%',
      'position': 'absolute',
      'top': '25%',
      'left': '2%',
     
        });
        $(".menuprofile").css({
            
          'background':'rgba(233,0,0,0.1)',
          'box-shadow': '1px 1px 3px #555',
          'border-radius':'20px',
            }) ;
    
            $(".menuprofile").eq(0).css({
              
              'background':'',
              'box-shadow': '1px 1px 3px #555 inset',
                }) ;

            $("#divprofileimage").css({
           //   'border': '1px solid red',
              'position': 'relative',
              'width': '100%',
               'height': '40%',
               'margin-bottom': '10%',
                });
                
                $("#profileimage").css({
              //    'border': '1px solid black',
              'box-shadow': '1px 1px 3px #555',
    
                  'border-radius': '50%',
                  'width': '65%',
                  'height': '65%',
                  'position':'absolute',
                  'top': '35%',
                        'left': '50%',
                          '-ms-transform': 'translate(-50%, -50%)',
                          'transform': 'translate(-50%, -50%)',
                    });
                   
            $("#labelprofileimage").css({
         //     'border': '1px solid black',
              'position':'absolute',
                  'top': '85%',
                        'left': '50%',
                          '-ms-transform': 'translate(-50%, -50%)',
                          'transform': 'translate(-50%, -50%)',
                  });
                $(".menuprofile").css({
                  'box-shadow': '1px 1px 3px black',
                  'margin': '5%',
                  'height': '20%',
                  'position': 'relative',
               //   'font-size':  '10px',   
   //'font-style':  'italic',
   'font-weight':  'bold',
                    });
               //     $("#profa").width((10*X)/100)
                    $(".menuprofile").height((5*Y)/100)
            
                    $(".iconmenuprofile").css({
                     
                      'border-radius': '50%',
                      'position':'absolute',
                  'top': '50%',
                        'left': '10%',
                          '-ms-transform': 'translate(-50%, -50%)',
                          'transform': 'translate(-50%, -50%)',
                        });
                        $(".iconmenuprofile").height((4*Y)/100)
            
                        $(".menuitemprofile").css({
                          'position':'absolute',
                          'top': '50%',
                                'left': '50%',
                                  '-ms-transform': 'translate(-50%, -50%)',
                                  'transform': 'translate(-50%, -50%)',
                                     'transform': 'translate(-50%, -50%)',
                            });
        
        
  }

  function cssUniteimageResponse(){
    $("#divselectionp").css({
      //'border': '1px solid blue',
     
      // 'background':'rgba(236,255,66,0.8)',
      'box-shadow': '1px 1px 3px #555 inset',
     
      'width': '95%',
    //  'height': '30%',
      'display': 'inline',
      'float': 'left',
      'margin': '2%',
     
        });
     //  $("#divselectionp").width((15*X)/100)
        $("#divselectionp").height((18*Y)/100)
   
    $(".unitepubimage").css({
     
   // 'background':'rgba(236,255,66,0.8)',
  // 'margin': '3px',
   'width': '100%',
     });
  //   $(".unitepubimage").width((12*X)/100)
     $(".unitepubimage").height((8*Y)/100)

     $(".divunitepubimage").css({
     
      // 'background':'rgba(236,255,66,0.8)',
     // 'display': 'inline',
    //  'width': '15%',
    'float': 'left',
    'border':'1px solid rgba(233,0,0,0.5)',
                            
    //  'border': '1px solid #a9a9a9',
     // 'border': '1px solid green',
      'border-radius': '10%',
      'margin': '1%',
        });

        $(".divunitepubimage").width((14*X)/100)
      //  $(".divunitepubimage").height((45*Y)/100)
   

        $(".buttonmodifie").css({
    
          // 'background':'rgba(236,255,66,0.8)',
          'font-size': '10px',
          'margin': 'auto',
         // 'margin-left': '15%',
          
         // 'border': '1px solid blue',
            });
    
            $("#validerChangementp").css({
    
              // 'background':'rgba(236,255,66,0.8)',
                         
              'margin-top': '2%',
             'margin-left': '28%',
              
             // 'border': '1px solid blue',
                });
            

   }

   function cssUniteimage(){
    $("#divselectionp").css({
    
      // 'background':'rgba(236,255,66,0.8)',
      'box-shadow': '1px 1px 3px #555 inset',
      
      'width': '95%',
    //  'height': '30%',
      'display': 'inline',
      'float': 'left',
      'margin': '2%',
     
        });
     //  $("#divselectionp").width((15*X)/100)
        $("#divselectionp").height((18*Y)/100)
   
    $(".unitepubimage").css({
    
   // 'background':'rgba(236,255,66,0.8)',
   'margin': 'auto',
    
     });
     $(".unitepubimage").width((9*X)/100)
     $(".unitepubimage").height((11*Y)/100)

     $(".divunitepubimage").css({
    
      // 'background':'rgba(236,255,66,0.8)',
     // 'display': 'inline',
    //  'width': '15%',
    'float': 'left',
      'border': '1px solid #a9a9a9',
      'border-radius': '10%',
      'margin': '1%',
        });

        $(".divunitepubimage").width((9*X)/100)
      //  $(".divunitepubimage").height((45*Y)/100)
   

        $(".buttonmodifie").css({
    
          // 'background':'rgba(236,255,66,0.8)',
                     
          'margin': 'auto',
          'margin-left': '15%',
          
         // 'border': '1px solid blue',
            });
    
            $("#validerChangementp").css({
    
              // 'background':'rgba(236,255,66,0.8)',
                         
              'margin-top': '5%',
             'margin-left': '35%',
              
             // 'border': '1px solid blue',
                });
            

   }

   function cssPublicationb(){
    
    
    $("#divlistedesimagepub").css({
      
      //  'border': '1px solid #bafff0',
       
        }) ;
    $("#divapercup").css({
      
      //  'border': '1px solid #bafff0',
       // 'border-radius': '15%',
        'margin': '1%',
        'margin-top': '17%',
        'position': 'relative',
        'float': 'left',
       // 'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
     //   'background': ' rgba(0,0,0,0.1)',
        //'box-shadow': '1px 1px 3px #555 inset',
        'box-shadow': '1px 1px 3px #555 inset',
       
        }) ;
        $('#divapercup').width((X*54)/100)
        $('#divapercup').height((Y*30)/100)
 
        
        $("#selectcateg").css({
      
          'font-size':  '10px',   
          'font-style':  'italic',
          'font-weight':  'bold',
          'border-radius':  '20px',
              
             }) ;

        $(".divpublimagex").css({
       
         // 'border': '1px solid blue',
           // 'border-radius': '15%',
            'margin': '1%',
            'float': 'left',
             
            }) ;
            $('.divpublimagex').width((X*38)/100)
            $('.divpublimagex').height((Y*28)/100)
            
          
         
                $(".divpublimagebb").css({
      
                  //  'border': '1px solid red',
                   // 'border-radius': '15%',
                      'margin': '1%',
                      'margin-right': '6%',
                       'float': 'right',
                   
                    }) ;
                    $('.divpublimagebb').width((X*10)/100)
                    $('.divpublimagebb').height((Y*25)/100)
             
                $(".tabpubimgab").eq(0).css({
      
                  'border': '1px solid rgba(233,0,0,0.5)',
                  'box-shadow': '1px 1px 3px #555',
       
                  'border-radius': '5%',
                    'margin': '0.3%',
                    'float': 'left',
                    
                     
                  }) ;
                  $(".tabpubimgab").eq(0).width((X*22)/100)
                  $(".tabpubimgab").eq(0).height((Y*28)/100)
             

                  $(".tabpubimgab").eq(1).css({
      
                        'border': '1px solid rgba(233,0,0,0.5)',
                        'border-radius': '5%',
                        'box-shadow': '1px 1px 3px #555',
       
                        'margin': '0.2%',
                        'margin-top': '7%',
                        'margin-right': '8%',
                        'float': 'right',
                        'transform': 'rotate(45deg)',
                   
                       
                         
                        }) ;
                        $(".tabpubimgab").eq(1).width((X*8)/100)
                        $(".tabpubimgab").eq(1).height((Y*10)/100)

                        $(".tabpubimgab").eq(2).css({
      
                          'border': '1px solid rgba(233,0,0,0.5)',
                          'border-radius': '5%',
                          'box-shadow': '1px 1px 3px #555',
       
                        'margin': '0.2%',
                        'margin-right': '8%',
                            'float': 'right',
                            'transform': 'rotate(45deg)',
                   
                           
                             
                            }) ;
                            $(".tabpubimgab").eq(2).width((X*8)/100)
                            $(".tabpubimgab").eq(2).height((Y*10)/100)
                     
                 
    
                            $(".tabpubimgab").eq(3).css({
      
                              'border': '1px solid rgba(233,0,0,0.5)',
                              'border-radius': '5%',
                              'box-shadow': '1px 1px 3px #555',
       
                              'margin': '1%',
                              'float': 'right',
                          //    'transform': 'rotate(45deg)',
                     
                             
                               
                              }) ;
                              $(".tabpubimgab").eq(3).width((X*12)/100)
                              $(".tabpubimgab").eq(3).height((Y*14)/100)

                              $(".tabpubimgab").eq(4).css({
      
                                'border': '1px solid rgba(233,0,0,0.5)',
                            'border-radius': '5%',
                            'box-shadow': '1px 1px 3px #555',
       
                             'margin': '1%',
                             //   'margin-right': '20%',
                                'float': 'left',
                            //    'transform': 'rotate(45deg)',
                       
                               
                                 
                                }) ;
                                $(".tabpubimgab").eq(4).width((X*12)/100)
                                $(".tabpubimgab").eq(4).height((Y*14)/100)
                         
                          
                                $("#divnamepublication").css({
      
                             //     'border': '1px solid rgba(233,0,0,0.5)',
                            // 'border-radius': '5%',
                            //  'box-shadow': '1px 1px 3px #555',
                            'margin-top': '3%',
                               'margin-left': '30%',
                               //   'margin-right': '20%',
                            //      'float': 'left',
                              //    'transform': 'rotate(45deg)',
                         
                                 
                                   
                                  }) ;
                                  $("#namepublicationl").css({
                                    'font-size':  '12px',   
                                    'font-style':  'italic',
                                    'font-weight':  'bold',
                                //  'border-radius':  '20%',
                               
                                        }) ;

                                  $("#namepublicationi").css({
                                      'font-size':  '12px',   
                                      'font-style':  'italic',
                                      'font-weight':  'bold',
                                      'border-radius':  '20px',
                                           
                                          }) ;
                                  $("#validerChangementp").css({
                                    //   'margin-left': '1%',
                                       //   'margin-right': '20%',
                                    //      'float': 'left',
                                      //    'transform': 'rotate(45deg)',
                                 
                                      'font-size':  '12px',   
                                      'font-style':  'italic',
                                      'font-weight':  'bold',
                                      'border-radius':  '20px',
                                           
                                          }) ;

                                  $(".buttonmodifie").css({
                                 //   'margin-left': '1%',
                                    //   'margin-right': '20%',
                                 //      'float': 'left',
                                   //    'transform': 'rotate(45deg)',
                              
                                   'font-size':  '10px',   
                                   'font-style':  'italic',
                                   'font-weight':  'bold',
                                 'border-radius':  '20%',
                                        
                                       }) ;

                                  $("option").css({
                                      'margin-left': '1%',
                                      //   'margin-right': '20%',
                                   //      'float': 'left',
                                     //    'transform': 'rotate(45deg)',
                                
                                     'font-size':  '10px',   
                                     'font-style':  'italic',
                                     'font-weight':  'bold',
                                   'border-radius':  '20%',
                                          
                                         }) ;
                                $("#divselectcateg").css({
                                  'float': 'left',
                                  'margin-top': '6%',
                                    'margin-left': '30%',
                                    //   'margin-right': '20%',
                                 //      'float': 'left',
                                   //    'transform': 'rotate(45deg)',
                              
                                   'font-size':  '14px',   
                                   'font-style':  'italic',
                                   'font-weight':  'bold',
                                 'border-radius':  '20%',
                                        
                                       }) ;
                                  
                                
            
        
    }


    function cssMyBoutiqueResponse(){
      
      
      $("#divimgapercubres").css({
        'padding': '2%',
        'margin': 'auto',
        'float': 'left',
        'cursor': 'pointer',
      
       'border-radius': '10%',
        'box-shadow': '1px 1px 3px #555' ,
        'width':'25%',
        'height':'80%',
      }) ;
      $("#imgapercubres").css({
        'margin': 'auto',
          'width':'95%',
        'height':'95%',
      }) ;
      $("#divboutiquemenu").css({
        'border': '1px solid green',
        'margin':'auto',
        'margin-top':'3%',
        'width':'90%',
        'height':'10%',
      }) ;

      $("#menuboutiqueclick").css({
        'margin-left':'43%',
       
      }) ;

     
    
      $(".iconec").css({
       
        'position': 'relative',
      'margin': 'auto',
    
      'height': '4em',
      'width': '4em',
      
      'place-items': 'center',
       }) ;
      $(".cardc").css({
        'padding': '1em 1em',
        'margin': 'auto',
       // 'margin-left': '25%',
        'cursor': 'pointer',
      
       'border-radius': '10%',
        'box-shadow': '1px 1px 3px #555' ,
      }) ;
      $(".cardc").width((10*X)/100)

        
       
   //   $("#divboutiqueprduitMy").height((60*Y)/100)


      $("#divboutiqueaffichag").css({
      //  'border': '1px solid green',
        'box-shadow': '0 0 35px rgba(233,0,0,0.3) inset',
       
        'position':'absolute',
        'top': '27%',
        'left': '50%',
        '-ms-transform': 'translate(-50%,-50%)',
        'transform': 'translate(-50%,-50%)',
        'width':'70%',
        'height':'9%',
        'padding-top':'1%',
        'border-radius': '10%',
      
      }) ;
      $("#divcontrolaffres").css({
      //  'border': '1px solid green',
        'float': 'right',
        'margin-right':'8%',
        'width':'50%',
        'height':'30%',
      }) ;
      $("#divalidersup").css({
        // 'border': '1px solid green',
         'margin-top':'2%',
         'box-shadow': '1px 1px 3px #555 inset' ,
         'height':'15%',
         'width':'95%',
         'margin':'auto',
       }) ;

       $("#labelsup").css({
        // 'border': '1px solid green',
         'font-size':'12px',
         'font-weight':'bold',
         'margin':'auto',
       }) ;
       $("#inputvalidersup").css({
         'border': 'none',
         'border-radius':'20px',
         'font-weight':'bold',
         'font-size':'12px',
         'background-color':'transparant',
         'box-shadow': '0 0 5px rgba(233,0,0,0.2) inset',
         'margin-left':'35%',
       }) ;
       
       
       $("#inputajouterphoto").css({
        
        'border-radius':'20px',
        'font-weight':'bold',
        'font-size':'12px',
       'margin-left':'30%',
       'margin-bottom':'3%',
      }) ;

       $("#divselectcatvente").css({
       
       //  'padding-left':'30%',
        // 'height':'10%',
        'margin-left':'5%',
       }) ;

      $("#prixaffichlabres").css({
         // 'border': '1px solid green',
        //  'padding-left':'30%',
         // 'height':'10%',
         'float':'left',
        }) ;

        $("#prixaffichres").css({
          // 'border': '1px solid green',
         //  'padding-left':'15%',
           'color':'blue',
           'text-decoration': 'underline',
           'font-style': 'italic',

         'float':'right',
         }) ;

        
        $("#inputaffprixres").css({
          'width': '30%',
          'text-align': 'center',
          'margin-left':'25%',
          'border-radius':'20px',
          
         }) ;

        $("#divinputprixaffres").css({
          'border': '1px solid green',
         
           'margin-top':'2%',
            'margin-bottom':'1%',
            
          }) ;
         // $("#divinputprixaff").width((16*X)/100)

          $("#valideraffich").css({
            'margin':'auto',
            'border-radius':'20px',
            'font-weight':'bold',
            'font-size':'12px',
           //'margin-left':'15%',
            }) ;
            
            $("#valideraffichl").css({
              'padding-left':'3%',
              'border': '1px solid black',
              'border-radius':'20px',
              'font-weight':'bold',
              'font-size':'13px',
              'opacity':'0.5',
              'border-radius':'20px',
             'margin-left':'35%',
             'width':'25%',
              }) ;
  
              
             

      $(".buttonaffichres").eq(0).css({
        'float':'left',
        'border-radius':'30%',
       'margin-left':'1%',
       'box-shadow': '1px 1px 3px #555' ,
       'width':'15%',
       'height':'100%'
      }) ;
      $(".buttonaffichres").eq(1).css({
        'float':'right',
        'border-radius':'30%',
       'margin-right':'1%',
       'box-shadow': '1px 1px 3px #555' , 
       'width':'15%',
       'height':'100%'
      }) ;
      
    //  $(".buttonaffichres").width((5*X)/100)
    //  $(".buttonaffichres").height((5*Y)/100)


      $("#divprixaffres").css({
        'box-shadow': '1px 1px 3px #555 inset' ,
      //  'height':'10%',
        'padding':'1%',
        'border-radius':'20px',
        'width':'50%',
        'float':'right',
        'margin':'5%',

      }) ;
      
      $(".columnc").css({
        
        'width':'100%',
        'height':'55%',
      
       
      }) ;
      

      $(".cardMybout").eq(0).css({
        //  'border': '1px solid rgba(236,255,66,0.8)',
   'border': '1px solid rgba(233,0,0,0.5)',
        //  background: linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%);

             });
/**
 
      $(".rowbb").css({
        
        'width': '80%',
        'margin-left': '10%',
        'display': 'grid',
         'place-items': 'center',
       }) ;

       * 
 */

      


    }
    function cssMyBoutique(){
      
      $("#divboutiquemenu").css({
        'border': '1px solid green',
        'margin':'auto',
        'margin-top':'3%',
        'width':'90%',
        'height':'10%',
      }) ;

      $("#menuboutiqueclick").css({
        'margin-left':'43%',
       
      }) ;

     
    
      $(".iconec").css({
        'position': 'relative',
      'margin': 'auto',
    
      'height': '6em',
      'width': '6em',
      
      'place-items': 'center',
       }) ;
      $(".cardc").css({
        'padding': '1em 1em',
        'margin': 'auto',
       // 'margin-left': '25%',
        'cursor': 'pointer',
      
       'border-radius': '10%',
        'box-shadow': '1px 1px 3px #555' ,
      }) ;
      $(".cardc").width((10*X)/100)

        
       
   //   $("#divboutiqueprduitMy").height((60*Y)/100)


      $("#divboutiqueaffichag").css({
        'box-shadow': '0 0 35px rgba(233,0,0,0.3) inset',
        'width':'18%',
        'position':'absolute',
        'height':'40%',
        'padding-top':'1%',
        'border-radius': '10%',
        'top':'25%',
        'right':'2%',
      }) ;
      $("#divcontrolaff").css({
       // 'border': '1px solid green',
        'margin-top':'2%',
       
      }) ;
      $("#divalidersup").css({
        // 'border': '1px solid green',
         'margin-top':'2%',
         'box-shadow': '1px 1px 3px #555 inset' ,
         'height':'15%',
         'width':'95%',
         'margin':'auto',
       }) ;

       $("#labelsup").css({
        // 'border': '1px solid green',
         'font-size':'12px',
         'font-weight':'bold',
         'margin':'auto',
       }) ;
       $("#inputvalidersup").css({
         'border': 'none',
         'border-radius':'20px',
         'font-weight':'bold',
         'font-size':'12px',
         'background-color':'transparant',
         'box-shadow': '0 0 5px rgba(233,0,0,0.2) inset',
         'margin-left':'35%',
       }) ;
       
       
       $("#inputajouterphoto").css({
        
        'border-radius':'20px',
        'font-weight':'bold',
        'font-size':'12px',
       'margin-left':'30%',
       'margin-bottom':'3%',
      }) ;

       $("#divselectcatvente").css({
       
       //  'padding-left':'30%',
        // 'height':'10%',
        'margin-left':'5%',
       }) ;

      $("#prixaffichlab").css({
         // 'border': '1px solid green',
        //  'padding-left':'30%',
         // 'height':'10%',
         'float':'left',
        }) ;

        $("#prixaffich").css({
          // 'border': '1px solid green',
         //  'padding-left':'15%',
           'color':'blue',
           'text-decoration': 'underline',
           'font-style': 'italic',

         'float':'right',
         }) ;

        
        $("#inputaffprix").css({
          'width': '45%',
          'text-align': 'center',
          'margin-left':'25%',
          'border-radius':'20px',
          
         }) ;

        $("#divinputprixaff").css({
        //  'border': '1px solid green',
         
           'margin-top':'2%',
            'margin-bottom':'3%',
            
          }) ;
         // $("#divinputprixaff").width((16*X)/100)

          $("#valideraffich").css({
            'margin':'auto',
            'border-radius':'20px',
            'font-weight':'bold',
            'font-size':'12px',
           //'margin-left':'15%',
            }) ;
            
            $("#valideraffichl").css({
              'padding-left':'3%',
              'border': '1px solid black',
              'border-radius':'20px',
              'font-weight':'bold',
              'font-size':'13px',
              'opacity':'0.5',
              'border-radius':'20px',
             'margin-left':'35%',
             'width':'25%',
              }) ;
  
              
             

      $(".buttonaffich").eq(0).css({
        'float':'left',
        'border-radius':'30%',
       'margin-left':'5%',
       'box-shadow': '1px 1px 3px #555' ,
      
      }) ;
      $(".buttonaffich").eq(1).css({
        'float':'right',
        'border-radius':'30%',
       'margin-right':'5%',
       'box-shadow': '1px 1px 3px #555' ,
      }) ;
      
      $(".buttonaffich").width((5*X)/100)
      $(".buttonaffich").height((5*Y)/100)


      $("#divprixaff").css({
        'box-shadow': '1px 1px 3px #555 inset' ,
        'height':'10%',
        'padding':'3%',
        'width':'90%',
        'margin':'auto',
        'margin-bottom':'5%',

      }) ;
      
      $(".columnc").css({
        
        'width':'100%',
        'height':'55%',
      
       
      }) ;
      

      $(".cardMybout").eq(0).css({
        //  'border': '1px solid rgba(236,255,66,0.8)',
   'border': '1px solid rgba(233,0,0,0.5)',
        //  background: linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%);

             });
/**
 
      $(".rowbb").css({
        
        'width': '80%',
        'margin-left': '10%',
        'display': 'grid',
         'place-items': 'center',
       }) ;

       * 
 */

      


    }

    function cssannonceurbResponse(){
          
      $("#apercuannonce").css({
      
          //  'padding-left': '23%' ,
     //     'margin-top': '0.5%',
          'position': 'relative',
      //    'margin-left': '3%',
         
          'box-shadow': '1px 1px 3px #555',
          'margin': 'auto',
       //    'border-radius': '50%',
        //  'background':'rgba(0,191,255,0.3)',
        'color': 'black' ,
        'text-align': 'center' ,
       

        'font-size' : '14px' ,
        'font-style' : 'italic' ,
        
          'background-size': 'cover',
          'width' : '96%' ,
            }) ;

         //   $('#apercuannonce').width((X*54)/100)
            $('#apercuannonce').height((Y*20)/100)
     
            
            $("#imgannoncbb").css({
      
             
              'position': 'absolute',
              'left': '0%',
              'top': '0%',
              
             
                }) ;
                $("#imgannoncb").css({
      
             
                //  'position': 'absolute',
                //  'left': '0%',
               //   'top': '0%',
            //   'border': '1px solid yellow',
               'width': '100%',
               'height': '100%',
                    }) ;
              // $('#imgannoncb').width((X*54)/100)
              //  $('#imgannoncb').height((Y*25)/100)
         

            $(".annonceslabb").css({
      
              //  'padding-left': '23%' ,
              'position': 'absolute',
             'top': '50%',
             'left': '50%',
             '-ms-transform': 'translate(-50%,-50%)',
             'transform': 'translate(-50%,-50%)',
            //  'margin-left': '3%',
            'border-radius': '5%',
            'z-index': '3' ,
           //    'border-radius': '50%',
            //  'background':'rgba(0,190,255,0.3)',
           // 'border': '1px solid blue',
            'color': 'orange',
            'width': '65%',
            'height': '38%',
            //'transform': 'rotate(-15deg)',
            'box-shadow': '1px 1px 3px #555',
                }) ;
  

                

                    $(".imgannab").eq(0).css({
                      'box-shadow': '1px 1px 3px #555',
                      'position': 'absolute',
                      'z-index': '1' ,
                      'top': '25%',
                      'left': '14%',
                      '-ms-transform': 'translate(-50%,-50%)',
                      'transform': 'translate(-50%,-50%)',
                    //  'position': 'relative',
                 //   'transform': 'rotate(-10deg)',
           
                 //   'border': '1px solid yellow',
                  'border-radius': '5%',
                  'width': '20%',
                  'height': '45%',
                    'float': '45%',
                        }) ;
                     //   $('.imgannab').width((X*12)/100)
                     //   $('.imgannab').height((Y*12)/100)
             
                        $(".imgannab").eq(1).css({
                          'box-shadow': '1px 1px 3px #555',
                          'position': 'absolute',
                      //    'border': '1px solid yellow',
                          'top': '50%' ,
                          'right': '3%' ,
                          'z-index': '2' ,
                          'border-radius': '5%',
                        //  'transform': 'rotate(10deg)',
                        'box-shadow': '1px 1px 3px #555',
                           //  'position': 'relative',
                          // 'border': '1px solid blue',
                           'float': 'right',
                           'width': '20%',
                           'height': '45%',
                    'float': '45%',
                            }) ;
                          



                        $(".imgannbb").css({
                          'position': 'absolute',
                        //  'margin-right': '10%' ,
                       // 'border': '1px solid yellow',
                       'top': '50%' ,
                       'right': '3%' ,
                       'z-index': '2' ,
                       'border-radius': '5%',
                     //  'transform': 'rotate(10deg)',
                     'box-shadow': '1px 1px 3px #555',
                        //  'position': 'relative',
                       // 'border': '1px solid blue',
                        'float': 'right',
                        'width': '20%',
                           'height': '45%',
                            }) ;
                         //   $('.imgannbb').width((X*12)/100)
                         //   $('.imgannbb').height((Y*12)/100)
             


                            
                            
                            $("#inputextannonce").css({
                              'width':  '45%', 
                              'font-size':  '12px',   
                              'font-style':  'italic',
                              'font-weight':  'bold',
                              'border-radius':  '20px',
                                     }) ;

                                  
                            $("#divannoncereg").css({
                         
                              'box-shadow': '1px 1px 3px #555 inset',
                                 //  'position': 'relative',
                                
                                 'margin': '3%',
                                 'margin-bottom': '10%',
                                 
                                     }) ;

                                     $('#divannoncereg').height((Y*20)/100)
                 

                            $("#divmonmessage").css({
                         
                         'box-shadow': '1px 1px 3px #555',
                          //   'position': 'relative',
                          //  'border': '1px solid blue',
                         // 'border': '1px solid blue',
                          'width': '44%',
                          'height': '38%',
                            'float': 'left',
                            'margin': '3%',
                            'margin-right': '1%',
                            'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                }) ;
                            //    $('#divmonmessage').width((X*25)/100)
                            //    $('#divmonmessage').height((Y*16)/100)
                 

                                $("#monmessage").css({
                                  'padding-left': '30%',
                                  'padding-top': '10%',
                                         }) ;

                                         $("#textarea").css({
                                         //'padding-left': '30%',
                                          'margin': '3%',
                                          'width': '90%',
                                                 }) ;

                                                 $("#validertexta").css({
                                                  //'padding-left': '30%',
                                                   'margin-left': '38%',
                                                   
                                                          }) ;



                                                          
    
               $("#divchoiimage").css({
              //'padding-left': '30%',
             //  'margin-left': '38%',
           //  'border': '1px solid blue', 
        //   'border': '1px solid yellow',
             'box-shadow': '1px 1px 3px #555',
            
             'float': 'right',  
           //  'position': 'relative',
             'margin': '3%',
             'margin-bottom': '0%',
             'width': '45%',
             'height': '58%',
                         }) ;
             //     $('#divchoiimage').width((X*20)/100)
             //     $('#divchoiimage').height((Y*20)/100)           
                                
                  $("#monmessage").css({
                    'padding-left': '30%',
                    'padding-top': '10%',
                           }) ;

                           $("#ajouterimagesi").css({
                            'margin-left': '15%',
                                   }) ;


                                   $(".divunitepubimagea").css({
                                //    'border': '1px solid yellow', 
                           
                                    'width': '45%',
                                    'height': '45%',
                                    //'display': 'inline',
                                           }) ;
                                           $(".divunitepubimagea").eq(0).css({
                                            
                                            'float': 'left',
                                                   }) ;

                                                   $(".divunitepubimagea").eq(1).css({
                                            
                                                    'float': 'right',
                                                           }) ;

                           
                                                           $(".unitepubimagea").css({
                                                       //     'border': '1px solid indigo',
                                                            'width': '100%',
                                                          // 'height': '20%',
                                                            
                                                                   }) ;
                                 //  $('.unitepubimagea').width((X*9)/100)
                                   $('.unitepubimagea').height((Y*8)/100)           
                                  
                           
                                   $(".unitepubimagebout").css({
                                            
                                    'width': '90%',
                                    'float': 'left',
                                    'text-align': 'center',
                                    'border-radius': '20px',
                                    'cursor':  'pointer', 
                   'font-size':  '10px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                           }) ;

           $("#divannoncetitle").css({
           'width': '45%',
           'height': '13%',
           'margin-left': '2.8%',
            'border-radius': '20px',
                   'float': 'left',
                   'box-shadow': '1px 1px 3px #555',
                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                   }) ;
                                                   $("#divselectheme").css({
                                                 
                                                    'float': 'left',
                                                    'width': '44%',
                                                            'box-shadow': '1px 1px 3px #555',
                                                            'margin-top': '2%',
                                                            'border-radius': '20px',
                                                            'margin-left': '3%',
                                                  
                                                                                            }) ;
                                                   
                                                   
                                                   $("#selectheme").css({
                                                   
                                                    'margin': '1%',
                                                    'font-size':  '12px',   
                                                    'font-style':  'italic',
                                                    'font-weight':  'bold',
                                                    'border-radius':  '20px',
                                                  }) ;
                                                  
                                                  
                                                  $("#labelora").css({
                                                   
                                                    'margin-left': '10%',
                                                   // 'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                  }) ;

                                                  $("#labelselecthem").css({
                                                   
                                                    'margin-left': '10%',
                                                   // 'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                   
                                                  }) ;
                                                  

                                                  $("#validerChangementa").css({
                                                   
                                                    'margin-left': '-2%',
//'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
   'border-radius':  '20px',
                                                   
                                                  }) ;

                                                   $("#lannoncetitle").css({
                                                    'margin': '1%',
                                                   
                                                   'margin-left': '2%',
                                                  }) ;
                                                                        
                                                                                             $("#inputextannonce").css({
                                                                                              'margin': '1%',
                                                                                             
                                                                                            // 'margin-left': '2%',
                                                                                            
                                                                                                     }) ;

                                                                                                     $("#validerChangementa").css({
                                                                                                      'margin': '5%',
                                                                                                     
                                                                                                     'margin-left': '35%',
                                                                                                    
                                                                                                             }) ;

                                                                             
                                                                                                     
                                           

  }

  

    function cssannonceurb(){
          
      $("#apercuannonce").css({
      
          //  'padding-left': '23%' ,
     //     'margin-top': '0.5%',
          'position': 'relative',
      //    'margin-left': '3%',
    //      'border': '1px solid red',
          'box-shadow': '1px 1px 3px #555',
          'margin': '0.5%',
       //    'border-radius': '50%',
        //  'background':'rgba(0,191,255,0.3)',
        'color': 'black' ,
        'text-align': 'center' ,
       

        'font-size' : '14px' ,
        'font-style' : 'italic' ,
        
          'background-size': 'cover',
         
            }) ;

            $('#apercuannonce').width((X*54)/100)
            $('#apercuannonce').height((Y*25)/100)
     
            
            $("#imgannoncbb").css({
      
             
              'position': 'absolute',
              'left': '0%',
              'top': '0%',
              'top': '0%',
            // 'border': '1px solid blue',
                  
                }) ;
                $('#imgannoncb').width((X*54)/100)
                $('#imgannoncb').height((Y*25)/100)
         

            $(".annonceslabb").css({
      
              //  'padding-left': '23%' ,
              'position': 'absolute',
             'top': '50%',
             'left': '50%',
             '-ms-transform': 'translate(-50%,-50%)',
             'transform': 'translate(-50%,-50%)',
            //  'margin-left': '3%',
            'border-radius': '5%',
            'z-index': '3' ,
           //    'border-radius': '50%',
            //  'background':'rgba(0,190,255,0.3)',
           // 'border': '1px solid blue',
            'color': 'orange',
            'width': '65%',
            'height': '38%',
            //'transform': 'rotate(-15deg)',
            'box-shadow': '1px 1px 3px #555',
                }) ;
  

                

                    $(".imgannab").eq(0).css({
                      'box-shadow': '1px 1px 3px #555',
                      'position': 'absolute',
                      'z-index': '1' ,
                      'top': '25%',
                      'left': '14%',
                      '-ms-transform': 'translate(-50%,-50%)',
                      'transform': 'translate(-50%,-50%)',
                    //  'position': 'relative',
                 //   'transform': 'rotate(-10deg)',
           
                  //  'border': '1px solid blue',
                  'border-radius': '5%',
                    'float': 'left',
                        }) ;
                        $('.imgannab').width((X*12)/100)
                        $('.imgannab').height((Y*12)/100)
             
                        $(".imgannab").eq(1).css({
                          'box-shadow': '1px 1px 3px #555',
                          'position': 'absolute',
                          'top': '50%' ,
                          'right': '3%' ,
                          'z-index': '2' ,
                          'border-radius': '5%',
                        //  'transform': 'rotate(10deg)',
                        'box-shadow': '1px 1px 3px #555',
                           //  'position': 'relative',
                          // 'border': '1px solid blue',
                           'float': 'right',
                            }) ;
                          



                        $(".imgannbb").css({
                          'position': 'absolute',
                        //  'margin-right': '10%' ,
                       'top': '50%' ,
                       'right': '3%' ,
                       'z-index': '2' ,
                       'border-radius': '5%',
                     //  'transform': 'rotate(10deg)',
                     'box-shadow': '1px 1px 3px #555',
                        //  'position': 'relative',
                       // 'border': '1px solid blue',
                        'float': 'right',
                            }) ;
                            $('.imgannbb').width((X*12)/100)
                            $('.imgannbb').height((Y*12)/100)
             


                            
                            
                            $("#inputextannonce").css({
                         
                              'font-size':  '12px',   
                              'font-style':  'italic',
                              'font-weight':  'bold',
                              'border-radius':  '20px',
                                     }) ;


                            $("#divannoncereg").css({
                         
                              'box-shadow': '1px 1px 3px #555 inset',
                                 //  'position': 'relative',
                             //    'border': '1px solid blue',
                                 'margin': '3%',
                                 'margin-bottom': '10%',
                                 
                                     }) ;

                                     $('#divannoncereg').height((Y*35)/100)
                 

                            $("#divmonmessage").css({
                         
                         'box-shadow': '1px 1px 3px #555',
                          //   'position': 'relative',
                          //  'border': '1px solid blue',
                            'float': 'left',
                            'margin': '3%',
                            'margin-right': '1%',
                            'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                }) ;
                                $('#divmonmessage').width((X*25)/100)
                                $('#divmonmessage').height((Y*16)/100)
                 

                                $("#monmessage").css({
                                  'padding-left': '30%',
                                  'padding-top': '10%',
                                         }) ;

                                         $("#textarea").css({
                                         //'padding-left': '30%',
                                          'margin': '3%',
                                          'width': '90%',
                                                 }) ;

                                                 $("#validertexta").css({
                                                  //'padding-left': '30%',
                                                   'margin-left': '38%',
                                                   
                                                          }) ;



                                                          
    
               $("#divchoiimage").css({
              //'padding-left': '30%',
             //  'margin-left': '38%',
           //  'border': '1px solid blue', 
             'box-shadow': '1px 1px 3px #555',
            
             'float': 'right',  
           //  'position': 'relative',
             'margin': '3%',
             'margin-bottom': '0%',

                         }) ;
                  $('#divchoiimage').width((X*20)/100)
                  $('#divchoiimage').height((Y*20)/100)           
                                
                  $("#monmessage").css({
                    'padding-left': '30%',
                    'padding-top': '10%',
                           }) ;

                           $("#ajouterimagesi").css({
                            'margin-left': '15%',
                                   }) ;


                                   $(".divunitepubimagea").css({
                                 //   'border': '1px solid blue', 
                           
                                    'width': '47%',
                                    'display': 'inline',
                                           }) ;
                                           $(".divunitepubimagea").eq(0).css({
                                            
                                            'float': 'left',
                                                   }) ;

                                                   $(".divunitepubimagea").eq(1).css({
                                            
                                                    'float': 'right',
                                                           }) ;

                           

                                   $('.unitepubimagea').width((X*9)/100)
                                   $('.unitepubimagea').height((Y*12)/100)           
                                  
                           
                                   $(".unitepubimagebout").css({
                                            
                                    'width': '90%',
                                    'float': 'left',
                                    'text-align': 'center',
                                           }) ;

           $("#divannoncetitle").css({
           'width': '49%',
           'height': '13%',
           'margin-left': '2.8%',
             // 'border': '1px solid blue',
                   'float': 'left',
                   'box-shadow': '1px 1px 3px #555',
                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                   }) ;
                                                   $("#divselectheme").css({
                                                    'float': 'right',
                                                    'width': '30%',
                                                            'box-shadow': '1px 1px 3px #555',
                                                            'margin-top': '2%',
                                                            'margin-right': '10%',
                                                  
                                                                                            }) ;
                                                   
                                                   
                                                   $("#selectheme").css({
                                                   
                                                    'margin': '1%',
                                                    'font-size':  '12px',   
                                                    'font-style':  'italic',
                                                    'font-weight':  'bold',
                                                    'border-radius':  '20px',
                                                  }) ;
                                                  
                                                  
                                                  $("#labelora").css({
                                                   
                                                    'margin-left': '10%',
                                                   // 'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                  }) ;

                                                  $("#labelselecthem").css({
                                                   
                                                    'margin-left': '10%',
                                                   // 'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
                                                   
                                                  }) ;
                                                  

                                                  $("#validerChangementa").css({
                                                   
                                                    'margin-left': '12%',
                                                   // 'color': 'blue',
                                                   'font-size':  '12px',   
   'font-style':  'italic',
   'font-weight':  'bold',
   'border-radius':  '20px',
                                                   
                                                  }) ;

                                                   $("#lannoncetitle").css({
                                                    'margin': '1%',
                                                   
                                                   'margin-left': '2%',
                                                  }) ;
                                                                        
                                                                                             $("#inputextannonce").css({
                                                                                              'margin': '1%',
                                                                                             
                                                                                            // 'margin-left': '2%',
                                                                                            
                                                                                                     }) ;

                                                                                                     $("#validerChangementa").css({
                                                                                                      'margin': '5%',
                                                                                                     
                                                                                                     'margin-left': '35%',
                                                                                                    
                                                                                                             }) ;

                                                                             
                                                                                                     
                                           

  }

  
