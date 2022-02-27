





if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
  enStatResponse()
  enCoursResponse()
  enRealiserRespone()
  cssNombreProjetResponse()
  } else {
    enStat()
    enCours()
    enRealiser()
    cssNombreProjet()
 }

 
function enCoursResponse(){
    $('#encours').css({
      
        'box-shadow': '1px 1px 3px #555', 
        'border':'1px solid red',
        'border-radius':'10px',
       // 'border-radius':'15%',
       'position':'absolute',
      //  'top':'25%',
      'top': '33%',
                          'left': '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            'transform': 'translate(-50%, -50%)',
                         
    // 'float':'left',
    //    'background':'rgba(236,255,66,0.2)',
  
         });
  
        
  
         $('#encours').width((X*95)/100)
    
         $('#encours').height((Y*35)/100)


         

         $('#imgapercu').css({
               
           'border-radius':'8%',
          //  'position':'absolute',
          //  'top':'25%',
        // 'margin':'2%',
        
        // 'margin-left':'8%',
       //  'float':'left',
        //    'background':'rgba(236,255,66,0.2)',
        'position':'absolute',
        'border': '1px solid rgba(233,0,0,0.5)',
        'box-shadow': '1px 1px 3px #555',
        'top':'2%',
                  
                  
                   'left': '50%',
                     '-ms-transform': 'translateX(-50%)',
                     'transform': 'translateX(-50%)',
            
      
             });
      
            
      
             $('#imgapercu').width((X*45)/100)
        
             $('#imgapercu').height((Y*16)/100)
    
    

             

             $('#listeimage').css({
            //    'border':'1px solid black',
                
            //    'box-shadow': '1px 1px 3px #555',
                     'display': 'inline' ,
               //'border-radius':'8%',
               'position':'absolute',
               'top':'68%',
                         
                         
                          'left': '50%',
                            '-ms-transform': 'translate(-50%,-50%)',
                            'transform': 'translate(-50% , -50%)',
            'padding-left':'9%',
            //    'background':'rgba(236,255,66,0.2)',
          //  'position':'absolute',
          //  'top':'2%',
          // 'left': '50%',
          //  '-ms-transform': 'translateX(-50%)',
          //   'transform': 'translateX(-50%)',
             
          
                 });
               $('#listeimage').width((X*90)/100)
            
                 $('#listeimage').height((Y*10)/100)
        
          
                 $('#papercup').css({
                    
                //   'box-shadow': '1px 1px 3px #555',
                'box-shadow': '0 0 35px rgba(0, 0, 0, 0.5)',
                'border-radius':'20px',
                 'text-align':'center',
              //   'padding':'auto',
                   'font-size':'12px',
                   'position':'absolute',
                   'width': '90%',
                  'height': '5%',
                'top': '93%',
                  'left': '50%',
                           '-ms-transform': 'translate(-50%,-50%)',
                            'transform': 'translate(-50% , -50%)',    
            
              
                     });
          
                    // $('#papercup').width((X*45)/100)
            
                     $('#papercup').height((Y*5)/100)
            
                     
  
                     $('.icona').css({
  
                     
                         
                         'margin-top': '3%' ,
                      //  'place-items': 'center' ,
                      //  'transition': '0.5s' ,
                      'box-shadow': '1px 1px 3px #555',
                    '-webkit-transition': '.8s ease-in-out',
               'transition': '.8s ease-in-out ', 
            //   'border': '1px solid rgba(233,0,0,0.5)',
                    });
                    $('.icona').width((X*15)/100)
    
                   $('.icona').height((Y*8)/100)
  }
  function enCours(){
    $('#encours').css({
     
        'box-shadow': '1px 1px 3px #555',
        'border':'1px solid red',
       'border-radius':'10px',
        'position':'relative',
       // 'border-radius':'15%',
      //  'position':'absolute',
      //  'top':'25%',
     'margin':'1%',
    
     'margin-left':'8%',
     'float':'left',
    //    'background':'rgba(236,255,66,0.2)',
  
         });
  
        
  
         $('#encours').width((X*56)/100)
    
         $('#encours').height((Y*48)/100)


         

         $('#imgapercu').css({
            //'border':'1px solid black',
                 
           'border-radius':'8%',
          //  'position':'absolute',
          //  'top':'25%',
        // 'margin':'2%',
        
        // 'margin-left':'8%',
       //  'float':'left',
        //    'background':'rgba(236,255,66,0.2)',
        'position':'absolute',
        'border': '1px solid rgba(233,0,0,0.5)',
        'box-shadow': '1px 1px 3px #555',
        'top':'2%',
                  
                  
                   'left': '50%',
                     '-ms-transform': 'translateX(-50%)',
                     'transform': 'translateX(-50%)',
            
      
             });
      
            
      
             $('#imgapercu').width((X*25)/100)
        
             $('#imgapercu').height((Y*22)/100)
    
    

             

             $('#listeimage').css({
                'border':'1px solid black',
                'box-shadow': '1px 1px 3px #555',
                     'display': 'inline' ,
               //'border-radius':'8%',
               'position':'absolute',
               'top':'68%',
                         
                         
                          'left': '50%',
                            '-ms-transform': 'translate(-50%,-50%)',
                            'transform': 'translate(-50% , -50%)',
            'padding':'1.5%',
            'padding-left':'6%',
            'border-radius':'5px',
            //    'background':'rgba(236,255,66,0.2)',
          //  'position':'absolute',
          //  'top':'2%',
          // 'left': '50%',
          //  '-ms-transform': 'translateX(-50%)',
          //   'transform': 'translateX(-50%)',
             
          
                 });
               $('#listeimage').width((X*45)/100)
            
                 $('#listeimage').height((Y*10)/100)
        
          
                 $('#papercup').css({
                    
                //   'box-shadow': '1px 1px 3px #555',
                'box-shadow': '0 0 35px rgba(0, 0, 0, 0.5)',
                'border-radius':'20px',
                 'text-align':'center',
              //   'padding':'auto',
                   'font-size':'12px',
                   'font-style':'italic',
                   'font-weight':'bold',
                   'position':'absolute',
                   'width': '90%',
                  'height': '5%',
                'top': '93%',
                  'left': '50%',
                           '-ms-transform': 'translate(-50%,-50%)',
                            'transform': 'translate(-50% , -50%)',    
            
              
                     });
          
                    // $('#papercup').width((X*45)/100)
            
                     $('#papercup').height((Y*5)/100)
            
                     
  
                     $('.icona').css({
  
                       
                        // 'display': 'inline' ,
                      //  'place-items': 'center' ,
                      //  'transition': '0.5s' ,
                      'box-shadow': '1px 1px 3px #555',
                    '-webkit-transition': '.8s ease-in-out',
               'transition': '.8s ease-in-out ', 
               'border-radius':'5px',
            //   'border': '1px solid rgba(233,0,0,0.5)',
                    });
                    $('.icona').width((X*8)/100)
    
                    $('.icona').height((Y*8)/100)
  }
  
  function enRealiserRespone(){
    $('#realiser').css({
       'border':'1px solid red',
       'border-radius':'10px',
        'box-shadow': '1px 1px 3px #555',
       // 'border-radius':'15%',
        'position':'absolute',
        'top':'55%',
        'right':'5%',
      'display':'block',
    // 'margin':'2%',
    // 'margin-right':'8%',
    // 'float':'right',
    // 'margin-top':'10%',
     'overflow':'auto',

    // 'margin-left':'8%',
    //    'background':'rgba(236,255,66,0.2)',
  
     
  
         });
  
        
  
         $('#realiser').width((X*45)/100)
    
         $('#realiser').height((Y*45)/100)
  }

  function enRealiser(){
    $('#realiser').css({
     
        'box-shadow': '1px 1px 3px #555',
        'border':'1px solid red',
       'border-radius':'10px',
       // 'border-radius':'15%',
      //  'position':'absolute',
      //  'top':'25%',
      'display':'block',
     'margin':'2%',
     'margin-right':'8%',
     'float':'right',
     'margin-top':'10%',
     'overflow':'auto',

    // 'margin-left':'8%',
    //    'background':'rgba(236,255,66,0.2)',
  
     
  
         });
  
        
  
         $('#realiser').width((X*22)/100)
    
         $('#realiser').height((Y*55)/100)
  }
  
  function enStatResponse(){
    $('#stat').css({
        'box-shadow': '1px 1px 3px #555',
        'border':'1px solid red',
        'border-radius':'10px',
        'position':'absolute',
             
           'top': '75%',
             'left': '25%',
       '-ms-transform': 'translate(-50%,-50%)',
       'transform': 'translate(-50% , -50%)',  
         
    //    'background':'rgba(236,255,66,0.2)',
  
     
  
         });
  
        
  
         $('#stat').width((X*45)/100)
    
         $('#stat').height((Y*20)/100)

         $('#lampe').css({
          // 'border':'1px solid black',
          // 'border-radius':'15%',
        //  'position':'relative',
           'float': 'right',
    
       //     'top': '45%',
      //   'left': '65%',
         //         '-ms-transform': 'translate(-50%,-50%)',
         //          'transform': 'translate(-50% , -50%)',  
        
        });
       
          
              $('#lampe').width((X*25)/100)
             $('#lampe').height((Y*15)/100)


             $('#lampeb,#lampec').css({
                 'float':'right',
              // 'border':'1px solid black',
              // 'border-radius':'15%',
            //  'position':'absolute',
             
        
           //     'top': '5%',
           //  'right': '2%',
            //          '-ms-transform': 'translate(-50%,-50%)',
            //           'transform': 'translate(-50% , -50%)',  
            
            });
           
            $('#lampeb').css({
                'border': '1px solid blue',
                'display': 'none',
            });
            $('#lampeb').width((X*10)/100)
            $('#lampeb').height((Y*10)/100)

              
            $('#lampec').css({
             
              'margin-top':'17%',
          });
          $('#lampec').width((X*15)/100)
          $('#lampec').height((Y*10)/100)

         
                 $('#divsuggererb').css({
                  //'float':'left',
                  
                   'position':'relative',
                   'margin':'2%',
                   'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                   'width':'100%',
                   'height':'100%',
                });
                 
             //   $('#divsuggererb').width((X*40)/100)
             //   $('#divsuggererb').height((Y*20)/100)
       
                 
             $('#divsuggerer').css({
               
           'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
               'text-align':'center',
              'position':'absolute',
              'width': '90%',
                'height': '53%',
        
                'top': '65%',
             'left': '50%',
                      '-ms-transform': 'translate(-50%,-50%)',
                       'transform': 'translate(-50% , -50%)',  
            
            });
            $('#labelsugerer').css({
              'position':'absolute',
              'width': '90%',
            'text-align':'center',
            'color':'black',
            'font-size': '12px',
             'font-style': 'italic',
             'font-weight': 'bold', 
             'top': '90%',
             'left': '50%',
                      '-ms-transform': 'translate(-50%,-50%)',
                       'transform': 'translate(-50% , -50%)',  
         
            
          });
            

            $('#labelsugererb').css({
               'text-align':'center',
               'position':'absolute',
             
               'font-size': '15px',
              // 'font-style': 'italic',
               'font-weight': 'bold',
                 
               //     'top': '5%',
                'left': '50%',
                '-ms-transform': 'translate(-50%)',
                'transform': 'translate(-50%)',  
             
           });
           $('#textasugerer').css({
            'margin':'auto',
            'margin-top':'15%',
            'margin-left':'3%',
            'margin-bottom':'10%',
            'text-align':'center',
            'color':'black',
            'font-size': '12px',
             'font-style': 'italic',
             'font-weight': 'bold',
           //  'width': '90%',
             'height': '70%',

               
         });
      //   $('#textasugerer').width((X*20)/100)
         $('#textasugerer').height((Y*8)/100)


         $('#valideridee').css({
          
          'text-align':'center',
          'position':'absolute',
          'text-align':'center',
          'color':'black',
          'font-size': '12px',
           'font-style': 'italic',
           'font-weight': 'bold', 
           'border-radius':'20px',
          //     'top': '5%',
           'left': '50%',
           '-ms-transform': 'translate(-50%)',
           'transform': 'translate(-50%)', 
            
       });
            



             $('.imgsuggerer').eq(0).css({
              // 'border-radius':'15%',
            
             
              'position':'absolute',
        
            'top': '-55%',
              'left': '13%',
       
              '-ms-transform': 'translate(-50%)',
              'transform': 'translate(-50%)', 
              'transform': 'rotate(-35deg)',
            });

                $('.imgsuggerer').eq(1).css({
                  'box-shadow': '1px 1px 3px #555',
                  'float':'left',
                });
                
     
              
                  $('.imgsuggerer').eq(0).width((X*8)/100)
                 $('.imgsuggerer').eq(0).height((Y*8)/100)
    
                 $('.imgsuggerer').eq(1).width((X*20)/100)
                 $('.imgsuggerer').eq(1).height((Y*8)/100)
    
                 
                 $('.trprojet').css({
           
                  'text-align':'center',
                  'color':'green',
                  'font-size': '12px',
                   'font-style': 'italic',
                   'font-weight': 'bold',
                     
               });
             
                 $('#tableconnect').css({
                  
                  'position':'absolute',
                  'top': '35%',
                  'left': '35%',
                  '-ms-transform': 'translate(-50%)',
                  'transform': 'translate(-50%)',
                });
                $('#tableconnect').width((X*30)/100)
              //  $('#tableconnect').height((Y*3)/100)
   
              $('#divvalidcon').css({
                
                'position':'absolute',
                'top': '70%',
                'left': '50%',
                'width': '85%',
                '-ms-transform': 'translate(-50%)',
                'transform': 'translate(-50%)',
              });
                
     

                 $('#labelconnect').css({
                  // 'border':'1px solid black',
                 //  'margin':'5%',
                 //  'margin-left':'8%',
                
                   'text-align':'center',
                   //   'padding':'auto',
                   'font-style':'italic',
                        'font-size':'14px',
                        'font-weight':'bold',
                 'position':'absolute',
                 'width':'100%',
              //  'top': '-25%',
               //   'left': '40%',
           
              //    '-ms-transform': 'translate(-50%)',
               //   'transform': 'translate(-50%)', 
               //   'transform': 'rotate(-35deg)',
                    });
                    
                    $('.tdproj').css({
                      'text-align':'center',
                    'border-radius':'20px',
                   'font-style':'italic',
                        'font-size':'10px',
                        'font-weight':'bold',
                    });

                    $('.validerconnect').css({
                      'text-align':'center',
                    'border-radius':'20px',
                   'font-style':'italic',
                        'font-size':'10px',
                        'font-weight':'bold',
                    });

                    $('.divtr').css({
                     
                   //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
                   'margin-top':'2%',
                   
                    });
                    
                   
                    $('.nomconnect').css({
                      
                    //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
                    'text-align':'center',
                    'border-radius':'20px',
                   'font-style':'italic',
                        'font-size':'10px',
                        'font-weight':'bold',
                        'margin-left':'5%',
                     });
                   $('.nomconnect').width((X*15)/100)
                  //  $('.nomconnect').height((Y*3)/100)
                   
                  $('.nomconnect').eq(0).css({
                      
                    //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
                         'margin-left':'8%',
                     });

                   
                    
                    
                 
  }
  
  function enStat(){
    $('#stat').css({
        'box-shadow': '1px 1px 3px #555',
        'border':'1px solid red',
        'border-radius':'10px',
        'position':'relative',
       // 'border-radius':'15%',
      //  'position':'absolute',
      //  'top':'25%',
     'margin':'1%',
     'margin-left':'8%',
     'float':'left',
     
    //    'background':'rgba(236,255,66,0.2)',
  
     
  
         });
  
        
  
         $('#stat').width((X*56)/100)
    
         $('#stat').height((Y*30)/100)

         $('#lampe').css({
          // 'border':'1px solid black',
          // 'border-radius':'15%',
          'position':'absolute',
            'height': '5%',
    
            'top': '45%',
         'left': '65%',
                  '-ms-transform': 'translate(-50%,-50%)',
                   'transform': 'translate(-50% , -50%)',  
        
        });
       
          
              $('#lampe').width((X*25)/100)
             $('#lampe').height((Y*25)/100)


             $('#lampeb,#lampec').css({
                 'float':'right',
              // 'border':'1px solid black',
              // 'border-radius':'15%',
            //  'position':'absolute',
             
        
           //     'top': '5%',
           //  'right': '2%',
            //          '-ms-transform': 'translate(-50%,-50%)',
            //           'transform': 'translate(-50% , -50%)',  
            
            });
           
              
                  $('#lampeb,#lampec').width((X*25)/100)
                 $('#lampeb,#lampec').height((Y*25)/100)
    
                 $('#divsuggererb').css({
                  'float':'left',
                   'position':'relative',
                   'margin':'2%',
                   'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                  
                });
                 
                $('#divsuggererb').width((X*20)/100)
                $('#divsuggererb').height((Y*23)/100)
       
                 
             $('#divsuggerer').css({
           //    'border':'1px solid black',
           'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
               'text-align':'center',
              'position':'absolute',
              'width': '30%',
                'height': '53%',
        
                'top': '65%',
             'left': '38%',
                      '-ms-transform': 'translate(-50%,-50%)',
                       'transform': 'translate(-50% , -50%)',  
            
            });

        $('#labelsugerer').css({
          'text-align':'center',
        
          'font-weight':'bold',
          'font-style':'italic',  
        
      });

            $('#labelsugererb').css({
               'text-align':'center',
               'position':'absolute',
             
               'font-size': '15px',
              // 'font-style': 'italic',
               'font-weight': 'bold',
                 
               //     'top': '5%',
                'left': '50%',
                '-ms-transform': 'translate(-50%)',
                'transform': 'translate(-50%)',  
             
           });
           $('#textasugerer').css({
            'text-align':'center',
            'margin':'5%',
         });
         $('#textasugerer').width((X*20)/100)
         $('#textasugerer').height((Y*12)/100)


         $('#valideridee').css({
          
          'text-align':'center',
          'color':'black',
          'font-size': '12px',
           'font-style': 'italic',
           'font-weight': 'bold', 
           'border-radius':'20px',
          'position':'absolute',
             
        
          //     'top': '5%',
           'left': '50%',
           '-ms-transform': 'translate(-50%)',
           'transform': 'translate(-50%)', 
            
       });
            
      



             $('.imgsuggerer').eq(0).css({
              // 'border':'1px solid black',
              // 'border-radius':'15%',
            
              
              'position':'absolute',
        
            'top': '-25%',
              'left': '40%',
       
              '-ms-transform': 'translate(-50%)',
              'transform': 'translate(-50%)', 
              'transform': 'rotate(-35deg)',
            });

                $('.imgsuggerer').eq(1).css({
                  'border-radius':'20px',
                  'box-shadow': '1px 1px 3px #555',
                });
                
     
              
                  $('.imgsuggerer').eq(0).width((X*5)/100)
                 $('.imgsuggerer').eq(0).height((Y*5)/100)
    
                 $('.imgsuggerer').eq(1).width((X*12)/100)
                 $('.imgsuggerer').eq(1).height((Y*12)/100)
    

             
                 $('#labelconnect').css({
                  // 'border':'1px solid black',
                   'margin':'5%',
                   'margin-left':'8%',
                
                   'text-align':'center',
                   //   'padding':'auto',
                        'font-size':'12px',
                        'font-weight':'bold',
              //    'position':'absolute',
            
              //  'top': '-25%',
               //   'left': '40%',
           
              //    '-ms-transform': 'translate(-50%)',
               //   'transform': 'translate(-50%)', 
               //   'transform': 'rotate(-35deg)',
                    });
                    $('.trprojet').css({
           
                      'text-align':'center',
                      'color':'green',
                      'font-size': '12px',
                       'font-style': 'italic',
                       'font-weight': 'bold',
                         
                   });
                 
                     $('#tableconnect').css({
                      
                      'position':'absolute',
                      'top': '35%',
                      'left': '35%',
                      '-ms-transform': 'translate(-50%)',
                      'transform': 'translate(-50%)',
                    });
                    $('#tableconnect').width((X*30)/100)
                  //  $('#tableconnect').height((Y*3)/100)
       
                  $('#divvalidcon').css({
                    
                    'position':'absolute',
                    'top': '70%',
                    'left': '50%',
                    'width': '85%',
                    '-ms-transform': 'translate(-50%)',
                    'transform': 'translate(-50%)',
                  });

                  
      $('.tdproj').css({
        'text-align':'center',
      'border-radius':'20px',
     'font-style':'italic',
          'font-size':'10px',
          'font-weight':'bold',
      });

      $('.validerconnect').css({
        'text-align':'center',
      'border-radius':'20px',
     'font-style':'italic',
          'font-size':'10px',
          'font-weight':'bold',
      });

      $('.divtr').css({
       
     //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
     'margin-top':'2%',
     
      });
      
     
      $('.nomconnect').css({
        
      //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
      'text-align':'center',
      'border-radius':'20px',
     'font-style':'italic',
          'font-size':'10px',
          'font-weight':'bold',
          'margin-left':'5%',
       });
     $('.nomconnect').width((X*15)/100)
    //  $('.nomconnect').height((Y*3)/100)
     
    $('.nomconnect').eq(0).css({
        
      //  'border': '0 0 35px rgba(0, 0, 0, 0.12)',
           'margin-left':'6%',
       });

     
    
                    
                    
                 
  }
  
  function cssNombreProjetResponse(){
    $('.imgprojet').css({
     // 'border':'1px solid black',
      'border-radius':'50%',
    //  'position':'absolute',
    //  'top':'25%',
   'margin':'1%',
  'float':'left',
 //  'margin-top':'10%',
  // 'margin-left':'8%',
  //    'background':'rgba(236,255,66,0.2)',
  'box-shadow': '1px 1px 3px #555',
   
   });
   $('.unitepro').css({
    'border':'1px solid black',
    'box-shadow': '1px 1px 3px #555',
    'border-radius':'10px',
    'margin':'3%',
    'width':'92%',
    'height':'11%',
    'text-align':'center',

     
  });

   $('.divdescrip').css({
   // 'border':'1px solid black',
   // 'border-radius':'15%',
  //  'position':'absolute',
  //  'top':'25%',
// 'margin':'1%',
//'float':'left',
//  'margin-top':'10%',
// 'margin-left':'8%',
//    'background':'rgba(236,255,66,0.2)',

 
 });

   
       $('.imgprojet').width((X*10)/100)
      $('.imgprojet').height((Y*4)/100)


      
      
      
    
     $('.nomp').css({
      'font-size':'10px',
      'font-weight':'bold',
      'font-style':'italic',
      
    });
    $('.typep').css({
      'font-size':'12px',
      'font-weight':'bold',
      'font-style':'italic',
      'width':'90%',
 //     'border':'1px solid black',
    });

    $('#labeltitle').css({
      'font-size':'15px',
      'font-weight':'bold',
      'font-style':'italic',
      'padding':'auto',
      'text-align':'center',
      'color':'black',
     
      'margin-bottom':'6%',
     
    });

    
    $('#recherchep').css({
    
      'width':'70%',
      'height':'8%',
      'padding':'auto',
     // 'border':'1px solid red',
      'margin':'auto',
      'margin-bottom':'6%',
    });



    $("#recherinpp").css({
          
          
      'font-size': '12px',
      'font-style': 'italic',
      'float': 'left',
      'margin':'2%',
  'border-left':'0',
  'border-top':'0',
  'border-right':'0',
  'border-bottom': '1px solid black',
  'outline':'none',
  'background': 'transparent',
  'width':'70%',
      }) ;



    $("#iconch").css({
      'float': 'left',
      'border-radius': '30px',
     
      }) ;
      $("#iconch").width( (6*X)/100 )

    }
  function cssNombreProjet(){
    $('.imgprojet').css({
    //  'border':'1px solid black',
      'border-radius':'50%',
     // 'border-radius':'15%',
    //  'position':'absolute',
    //  'top':'25%',
   'margin':'1%',
  'float':'left',
 //  'margin-top':'10%',
  // 'margin-left':'8%',
  //    'background':'rgba(236,255,66,0.2)',

   
   });
   $('.unitepro').css({
  //  'border':'1px solid black',
    'box-shadow': '1px 1px 3px #555',
    'border-radius':'20px',
    'margin':'3%',
    'width':'94%',
    'text-align':'center',
     
  });

   $('.divdescrip').css({
   // 'border':'1px solid black',
   // 'border-radius':'15%',
  //  'position':'absolute',
  //  'top':'25%',
// 'margin':'1%',
//'float':'left',
//  'margin-top':'10%',
// 'margin-left':'8%',
//    'background':'rgba(236,255,66,0.2)',

 
 });

   
       $('.imgprojet').width((X*5)/100)
      $('.imgprojet').height((Y*5)/100)


      
      
      
    
      $('.nomp').css({
        'font-size':'10px',
        'font-weight':'bold',
        'font-style':'italic',
        
      });
      $('.typep').css({
        'font-size':'12px',
        'font-weight':'bold',
        'font-style':'italic',
        'width':'90%',
   //     'border':'1px solid black',
      });
  
      $('#labeltitle').css({
        'font-size':'15px',
        'font-weight':'bold',
        'font-style':'italic',
        'padding':'auto',
        'text-align':'center',
        'color':'black',
       
        'margin-bottom':'6%',
       
      });

    
    $('#recherchep').css({
    
      'width':'70%',
      'height':'8%',
      'padding':'auto',
     // 'border':'1px solid red',
      'margin':'auto',
      'margin-bottom':'6%',
    });



    $("#recherinpp").css({
          
          
      'font-size': '12px',
      'font-style': 'italic',
      'float': 'left',
      'margin':'2%',
  'border-left':'0',
  'border-top':'0',
  'border-right':'0',
  'border-bottom': '1px solid black',
  'outline':'none',
  'background': 'transparent',
  'width':'70%',
      }) ;



    $("#iconch").css({
      'float': 'left',
      'border-radius': '30px',
     
      }) ;
      $("#iconch").width( (3*X)/100 )


  }