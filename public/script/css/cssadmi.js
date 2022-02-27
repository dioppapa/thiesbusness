var w = $(window).width()

var h = $(window).width()


var a = $(window).width()

var b = $(window).height()

  
  
var X = (a* 98.5)/100
var Y = (b*97) / 100


cssDivHeader() 
cssbody()

csshoverbouton()
cssclickbouton()
curenntcssitem(0)
csshovermenu()
//cssArchive()
curenntcsstab(0)
cssApercu()
cssApercupub()
cssApercua()
cssApercupr()
cssApercuapr()
cssApercuprogram()
cssApercuprogramsup()


cssNew()
cssNewB()
cssPub()
cssAcceuil()

function cssAcceuil(){
    $('#labeltitre').css({
       
        'margin-top': '10%',
        'margin-left': '40%',
        'margin-bottom': '2%',
       // 'padding-bottom': '10%',
 
   'font-size':'12px',
   'font-weight':'bold',
   'font-style':'normal',
        });
        $('#info').css({
       
            'float': 'right',
           
            });
}
function cssNew(){
         
  $("#new").css({
    
    'position': 'absolute',
  //  'border': '1px solid blue',
    'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
    'border-radius': '10%',
   'right': '4%',
'top': '60%',

      }) ;
      $("#new").width((X*15)/100)
      $("#new").height((Y*35)/100)

      $("#imgnew").css({
        'margin': '10%',
        'margin-bottom': '3%',
       // 'border-radius': '10%',
      // 'box-shadow': '1px 1px 3px #555',
          }) ;
          $("#imgnew").width((X*12)/100)
          $("#imgnew").height((Y*15)/100)


          $("#descnew").css({
            'margin-top': '10%',
            'font-size': '10px',
            'text-align': 'center'

          }) ;

          $("#descnewt").css({
            'margin': '2%',
            'width': '92%',
            'font-size': '10px',
            'text-align': 'center'

          }) ;
        //  $("#remercimentimg").width((X*15)/100)
       //   $("#remercimentimg").height((Y*15)/100)

       $("#boutonnew").css({
    //    'margin-left': '6%',
    'margin-bottom': '8%',
         'float': 'left',
        // 'border-radius': '10%',
       // 'box-shadow': '1px 1px 3px #555',
           }) ;
           
           $(".boutonnewup").css({
            'margin-top': '4%',
              'margin-left': '20%',
              'font-style': 'normal',
              'font-size': '9px' , 
               'text-align': 'center' ,
               'border-radius': '20px' , 
               
                   }) ;
                   $(".boutonnew").eq(0).css({
                      //'margin-left': '0.03%',
                      
                           }) ;
                   $(".boutonnewup").eq(1).css({
                      'margin-left': '18%',
                      'margin-top': '8%',
                      'margin-bottom': '2%',
                      'opacity': '0.5' , 
                      
                           }) ;
           $(".boutonnew").css({
              'font-style': 'normal',
              'font-size': '9px' , 
               'text-align': 'center' ,
               'border-radius': '20px' , 
                   }) ;

                 
     

}



function cssPub(){
    $("#selectcateg").css({
      
        'font-size':  '10px',   
        'font-style':  'italic',
        'font-weight':  'bold',
        'border-radius':  '20px',
            
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
function cssNewB(){
  
  $("#newb").css({
    
    'position': 'absolute',

    'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
    'border-radius': '10%',

'right': '3%',
'top': '20%',

      }) ;
      $("#newb").width((X*17)/100)
      $("#newb").height((Y*40)/100)

      $("#imgnewb").css({
     //   'margin-top': '-5%',
        'margin': 'auto',
        'margin-left': '14%',
       // 'border-radius': '10%',
      // 'box-shadow': '1px 1px 3px #555',
          }) ;
          $("#imgnewb").width((X*12)/100)
          $("#imgnewb").height((Y*12)/100)


          $("#imgnewdes").css({
            'margin-left': '12%',
          }) ;
          $("#imgnewdes").width((X*12)/100)
           $("#imgnewdes").height((Y*15)/100)
        
           $("#boutonnewb").css({
              'margin-left': '6%',
               'float': 'left',
              // 'border-radius': '10%',
             // 'box-shadow': '1px 1px 3px #555',
                 }) ;
                 
                 $(".boutonnewbup").css({
                    'margin-left': '25%',
                    'font-style': 'normal',
                    'font-size': '9px' , 
                     'text-align': 'center' ,
                     'border-radius': '20px' , 
                    
                         }) ;

                         
                         $(".boutonnewb").eq(0).css({
                            //'margin-left': '0.03%',
                            
                                 }) ;
                         $(".boutonnewbup").eq(2).css({
                            'margin-left': '20%',
                            'margin-top': '2%',
                            'margin-bottom': '4%',
                            'pointer-events': 'none',
                            'opacity': '0.5' ,
                                 }) ;
                 $(".boutonnewb").css({
                    'font-style': 'normal',
                    'font-size': '9px' , 
                     'text-align': 'center' ,
                     'border-radius': '20px' , 
                         }) ;

                        

           

}
function csshovermenu() {
    $('.classdivm').hover(function(){
        var i = $(this).index()
        
        $(".classdivm").eq(i).css({
                  'background-image': 'linear-gradient(#87cefa,white)',
            }) ;

    
        },function(){
            $(".classdivm").css({
                'background-image': 'linear-gradient(#c6ffec,white)',
          }) ;
            
      });
    
    }

    function clickSaveProgramme(){
        
    }
    function cssApercuprogramsup(){
    
        $('#tabapercuaprogram').css({
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '300px',
            'margin-right': '2%',
            'margin-top': '3%',
        });
        
        $('#titleprogrammels').css({
            'margin-left': '17%',
            'margin-top': '10%',
            'margin-bottom': '10%',
           // 'padding-bottom': '10%',
     
       'font-size':'12px',
       'font-weight':'bold',
       'font-style':'normal',
            });
            $('.divnameprogramme').css({
                     
                'height': '8%',
                'margin-bottom':'6%',
                });
                $('.divnameprogramme').eq(1).css({
                  'height': '13%',
                    
                    });
                    $('.divnameprogramme').eq(2).css({
                        'height': '13%',
                          
                          });
                          $('.divnameprogramme').eq(3).css({
                            'height': '13%',
                              
                              });

            $('#objetp,#objectifp,#avantagep,#remercimentp,#datep,#lieup').css({
                'margin': '1%',
                'color': 'blue',
                'padding-left': '3%',
                'font-size':'12px',
                'font-weight':'bold',
                'font-style':'italic',
                });
                $('#objectifp').css({
                    
                 //   'margin-top': '17px',
               //     'color': 'red',
                    });
                    $('#remercimentp').css({
                    
                        'font-size':'9px',
                        
                        });
               
                $('#objets,#objectifs,#avantages,#remerciments,#dates,#lieus').css({
                    'margin': '1%',
                    'width': '60%',
                    'float': 'right',
                    'font-size':'8px',
                    'font-weight':'bold',
                    'font-style':'normal',
                    'border-radius':  '20px',
                    });
                    
                   
                    
                        
                      
                       
    }
    function cssApercuprogram(){
    
        $('#tabapercuaprogsup').css({
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '370px',
            'margin-right': '2%',
            'margin-top': '3%',
        });
        
        $('#titleprogrammel').css({
            'margin-left': '25%',
            'margin-top': '10%',
            'margin-bottom': '10%',
           // 'padding-bottom': '10%',
     
       'font-size':'9px',
       'font-weight':'bold',
       'font-style':'normal',
            });
            $('.divnameprogramme').css({
                     
                'height': '8%',
                'margin-bottom':'6%',
                });
                $('.divnameprogramme').eq(1).css({
                  'height': '13%',
                    
                    });
                    $('.divnameprogramme').eq(2).css({
                        'height': '13%',
                          
                          });
                          $('.divnameprogramme').eq(3).css({
                            'height': '13%',
                              
                              });

            $('#objet,#objectif,#avantage,#remerciment,#date,#lieu').css({
                'margin': '1%',
                'color': 'blue',
                'padding-left': '3%',
                'font-size':'12px',
                'font-weight':'bold',
                'font-style':'italic',
                });
                $('#objectif').css({
                    
                 //   'margin-top': '17px',
               //     'color': 'red',
                    });
                    $('#remerciment').css({
                    
                        'font-size':'9px',
                        
                        });
               
                $('#objeti,#objectifi,#avantagei,#remercimenti,#datei,#lieui').css({
                    'margin': '1%',
                    'width': '60%',
                    'float': 'right',
                    'font-size':'12px',
                    'font-weight':'bold',
                    'font-style':'normal',
                    'border-radius':  '20px',
                    });
                    
                    $('#ajouterprogrammel').css({
                        'border': '2px solid black',
                        'margin-top': '10%',
                        'opacity': '0.5',
                        'margin-left': '20%',
                        'font-size':'10px',
                            'font-weight':'bold',
                            'font-style':'normal',
                            'border-radius':  '20px',
                        });
                    $('#ajouterprogramme').css({
                        'margin-top': '10%',
                        'margin-left': '13%',
                        'font-size':'12px',
                            'font-weight':'bold',
                            'font-style':'normal',
                            'border-radius':  '20px',
                        });
                        $("#divalidersupprog").css({
   
   
                            'margin': '3%' ,
                     
                            'margin-top': '10%' , 
                           
                         
                        }) 
                        $("#labelsupprog").css({
                        
                        
                         'font-style': 'normal',
                            'font-size': '11px' , 
                             'text-align': 'center' , 
                         
                        })
                        $("#inputvalidersupprog").css({
                        
                         'margin-left': '17%' , 
                         'margin-top': '10%' , 
                         'font-style': 'normal',
                            'font-size': '12px' , 
                             'text-align': 'center' ,
                             'border-radius': '20px' , 
                         
                        }) 
                        $("#inputannulersupprog").css({
                        
                        
                         'font-style': 'normal',
                            'font-size': '12px' , 
                             'text-align': 'center' ,
                             'border-radius': '20px' , 
                         
                        }) 
                        
    }
    function cssApercupub(){
    
        $('#tabapercupub').css({
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '300px',
            'margin-right': '2%',
            'margin-top': '3%',
        });
        
           $('.pubimgadmi').css({
           
            'box-shadow': '1px 1px 3px #555',
            'border-radius':  '10px',
           
        });
        $('.pubimgadmi').eq(0).css({
            'margin-left': '20%',
   'width': '60%',
   'height': '30%',
           
        });
        $('.pubimgadmi').eq(1).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.pubimgadmi').eq(2).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.pubimgadmi').eq(3).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.pubimgadmi').eq(4).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $("#divalidersuppub").css({
   
   
            'margin': '3%' ,
     
            'margin-top': '10%' , 
           
         
        }) 
        $("#labelsuppub").css({
        
        
         'font-style': 'normal',
            'font-size': '11px' , 
             'text-align': 'center' , 
         
        })
        $("#inputvalidersuppub").css({
        
         'margin-left': '17%' , 
         'margin-top': '10%' , 
         'font-style': 'normal',
            'font-size': '12px' , 
             'text-align': 'center' ,
             'border-radius': '20px' , 
         
        }) 
        $("#inputannulersuppub").css({
        
        
         'font-style': 'normal',
            'font-size': '12px' , 
             'text-align': 'center' ,
             'border-radius': '20px' , 
         
        }) 
        
     
    }
    
    function cssApercuapr(){
    
        $('#tabapercuapr').css({
                
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '480px',
            'margin-right': '2%',
            'margin-top': '3%',
        });

        
        $('.divunitepubimage').css({
            'margin': '1%',
            'margin-bottom': '5%',
       'width': '45%',
       'height': '70px',
            });
            $('#titlepublicationl').css({
                'margin-left': '23%',
                'margin-top': '10%',
                'margin-bottom': '10%',
               // 'padding-bottom': '10%',
         
           'font-size':'12px',
           'font-weight':'bold',
           'font-style':'normal',
                });

            

            $('.divunitepubimage').eq(0).css({
                //    'margin-left': '5%',
           
           'float': 'left',
                });
                $('.divunitepubimage').eq(1).css({
                    //    'margin-left': '5%',
               
               'float': 'right',
                    });

                    $('.divunitepubimage').eq(2).css({
                        //    'margin-left': '5%',
                   
                   'float': 'left',
                        });

                        $('.divunitepubimage').eq(3).css({
                            //    'margin-left': '5%',
                       
                       'float': 'right',
                            });
                            $('.divunitepubimage').eq(4).css({
                            'margin-left': '25%',
                           
                           'float': 'left',
                                });
                                $('#validerChangementl').css({
                                    'border': '2px solid black',
                                    'margin-top': '10%',
                                    'opacity': '0.5',
                                    'margin-left': '20%',
                                    'font-size':'10px',
                                        'font-weight':'bold',
                                        'font-style':'normal',
                                        'border-radius':  '20px',
                                    });
                                $('#validerChangement').css({
                                    'margin-top': '10%',
                                    'margin-left': '6%',
                                    'font-size':'12px',
                                        'font-weight':'bold',
                                        'font-style':'normal',
                                        'border-radius':  '20px',
                                    });

                                $('.divnamepublication').css({
                                  
                                    'height': '6%',
                                    });
                                    $('.divnamepublication').eq(1).css({
                                   
                                        'height': '8%',
                                        });
                                $('#namepublicationi').css({
                                    'margin': '1%',
                                   'width': '60%',
                                    'float': 'right',
                                    'font-size':'12px',
                                    'font-weight':'bold',
                                    'font-style':'normal',
                                    'border-radius':  '20px',
                                    });
                                    $('#lieupublicationi').css({
                                        'margin': '1%',
                                        'width': '60%',
                                        'float': 'right',
                                        'font-size':'12px',
                                        'font-weight':'bold',
                                        'font-style':'normal',
                                        'border-radius':  '20px',
                                        });
                                    $('#datepublicationi').css({
                                        'margin': '1%',
                                        'width': '60%',
                                        'float': 'right',
                                        'font-size':'12px',
                                        'font-weight':'bold',
                                        'font-style':'normal',
                                        'border-radius':  '20px',
                                        });
                                    $('#despublicationi').css({
                                        'margin': '1%',
                                        'width': '60%',
                                        'float': 'right',
                                        'font-size':'12px',
                                        'font-weight':'bold',
                                        'font-style':'normal',
                                        'border-radius':  '20px',
                                        });
                                $('#lieupublicationl').css({
                                    'margin': '1%',
                                    'color': 'blue',
                                    'padding-left': '3%',
                                    'font-size':'12px',
                                    'font-weight':'bold',
                                    'font-style':'italic',
                                    });
                                $('#datepublicationl').css({
                                    'color': 'blue',
                                    'padding-left': '3%',
                                    'margin': '1%',
                                    'font-size':'12px',
                                    'font-weight':'bold',
                                    'font-style':'italic',
                                    });
                                $('#namepublicationl').css({
                                    
                                    'margin': '1%',
                                    'color': 'blue',
                                    'padding-left': '3%',
                                    'font-size':'12px',
                                    'font-weight':'bold',
                                    'font-style':'italic',
                                    });
                                $('#despublicationl').css({
                                    'margin': '1%',
                                    'margin-top': '6%',
                                    'color': 'blue',
                                    'padding-left': '3%',
                                  //  'position': 'relative',
                                    'float': 'left',
                                   // 'padding-top': '45%',
                                    'font-size':'12px',
                                    'font-weight':'bold',
                                    'font-style':'italic',
                                    });

                                    $('.unitepubimage').eq(4).css({
                                    
                                   'border': '1px solid blue',
                                           
                                        });
        $('.unitepubimage').css({
        //    'margin-left': '5%',
   'width': '95%',
   'height': '75%',
   'border': '1px solid blue',
        });
        $('.buttonmodifie').css({
            'margin-left': '15%',
       //'width': '20%',
       //'height': '20%',
       'font-size':'8px',
       'width':'70%',
       'background':'white',
       'border-radius':  '20px',
            });

            $("#divalidersuppr").css({
   
   
                'margin': '3%' ,
         
                'margin-top': '10%' , 
               
             
            }) 
            $("#labelsuppr").css({
            
            
             'font-style': 'normal',
                'font-size': '11px' , 
                 'text-align': 'center' , 
             
            })
            $("#inputvalidersuppr").css({
            
             'margin-left': '17%' , 
             'margin-top': '10%' , 
             'font-style': 'normal',
                'font-size': '12px' , 
                 'text-align': 'center' ,
                 'border-radius': '20px' , 
             
            }) 
            $("#inputannulersuppr").css({
            
            
             'font-style': 'normal',
                'font-size': '12px' , 
                 'text-align': 'center' ,
                 'border-radius': '20px' , 
             
            }) 
            

        
    }
   
    function cssApercupr(){
    
        $('#tabapercupr').css({
                
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '300px',
            'margin-right': '2%',
            'margin-top': '3%',
        });
        
        $('.proimgadmi').css({
                
            
            'box-shadow': '1px 1px 3px #555',
            'border-radius':  '10px',
        
        });
        $('.proimgadmi').eq(0).css({
            'margin-left': '20%',
   'width': '60%',
   'height': '30%',
           
        });
        $('.proimgadmi').eq(1).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.proimgadmi').eq(2).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.proimgadmi').eq(3).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('.proimgadmi').eq(4).css({
            'margin-left': '5%',
   'width': '40%',
   'height': '30%',
           
        });
        $('#projettitle').css({
            'text-align': 'center',
            'font-weight': 'bold',
            'font-style': 'italic',
               'font-size': '12px' ,
               'margin-left': '23%' ,
           
        });
        $('#spantitle').css({
            'text-align': 'center',
            'font-weight': 'bold',
            'font-style': 'normal',
               'font-size': '14px' ,
               'color': 'blue' ,
           
        });
        
    }
    function cssApercua(){
    
        $('#tabapercuann').css({
                
            'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
            
            'padding-top':'1%',
            'border-radius': '10%',
            'width': '25%',
            'float': 'right',
            'height': '300px',
            'margin-right': '2%',
            'margin-top': '3%',
        });

        $('.annimgadmi').css({
                
            
            'box-shadow': '1px 1px 3px #555',
            'border-radius':  '10px',
        
        });
        $('.annimgadmi').eq(0).css({
                
            'float': 'left',
            'margin-left': '5%',
            'width': '40%',
            'height': '30%',
        });
        $('.annimgadmi').eq(1).css({
                
            'float': 'right',
            'margin-top': '1%',
            'margin-right': '5%',
            'width': '40%',
            'height': '30%',
        });
        $('#textannnce').css({
            
            'margin-top': '57%',
            'text-align': 'center',
            'font-weight': 'bold',
            'font-style': 'italic',
               'font-size': '12px' ,
            'width': '100%',
           // 'border': '1px solid blue',
            'box-shadow': '1px 1px 3px #555',
            'border-radius':  '10px',
            //'height': '30%',
        });

        $("#divalidersupa").css({
   
   
            'margin': '3%' ,
     
            'margin-top': '10%' , 
           
         
        }) 
        $("#labelsupa").css({
        
        
         'font-style': 'normal',
            'font-size': '11px' , 
             'text-align': 'center' , 
         
        })
        $("#inputvalidersupa").css({
        
         'margin-left': '17%' , 
         'margin-top': '10%' , 
         'font-style': 'normal',
            'font-size': '12px' , 
             'text-align': 'center' ,
             'border-radius': '20px' , 
         
        }) 
        $("#inputannulersupa").css({
        
        
         'font-style': 'normal',
            'font-size': '12px' , 
             'text-align': 'center' ,
             'border-radius': '20px' , 
         
        }) 
        
    }
function cssApercu(){
    
    $('#tabapercu').css({
            
        'box-shadow': '0 0 35px rgba(175,238,238,0.9) inset',
        
        'padding-top':'1%',
        'border-radius': '10%',
        'width': '25%',
        'float': 'right',
        'height': '300px',
        'margin-right': '2%',
        'margin-top': '3%',
    });

    $('#imgapercu').css({
            
       'width': '75%',
        'height': '30%',
        'margin-top': '2%',
        'margin-left': '12%',
      
    });

    $('#nomprenom').css({
            
        'font-style': 'italic',
         'font-weight': 'bold',
         'text-align': 'center',
        // 'margin': 'auto',
         //'margin-top': '15%',
        //'margin-left': '30%',
       
     });
     $(".pub").css({
        'margin': '8%',
        'text-align': 'center',
         'font-weight': 'bold',
     'font-style': 'italic',
        'font-size': '14px' , 
     
  }) 
  $(".spanap").css({
   
   
 'font-style': 'normal',
    'font-size': '16px' , 
    'color': 'blue' , 
    'padding': '15px' , 
 
}) 
$("#divalidersup").css({
   
   
       'margin': '3%' ,

       'margin-top': '10%' , 
      
    
   }) 
   $("#labelsup").css({
   
   
    'font-style': 'normal',
       'font-size': '11px' , 
        'text-align': 'center' , 
    
   })
   $("#inputvalidersup").css({
   
    'margin-left': '17%' , 
    'margin-top': '10%' , 
    'font-style': 'normal',
       'font-size': '12px' , 
        'text-align': 'center' ,
        'border-radius': '20px' , 
    
   }) 
   $("#inputannulersup").css({
   
   
    'font-style': 'normal',
       'font-size': '12px' , 
        'text-align': 'center' ,
        'border-radius': '20px' , 
    
   }) 
   

     cssclientreseau()
}

function cssclientreseau(){
    $("#divreseauso").css({
        //  '-ms-transform': 'translate(-50%, -50%)',
       //   'transform': 'translate(-50%, -50%)',
       //      'transform': 'translate(-50%, -50%)',
        //     'font-size':  '12px',   
          'margin':  'auto',
           'width':  '85%',
           'height':  '20%',
         //  'box-shadow': '0 0 15px rgba(0, 0, 0, 0.12)',
          // 'box-shadow': '0 0 15px rgba(233,0,0,0.5)',
           'box-shadow': '0 0 15px rgba(175,238,238,0.9) inset',
       
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
               //    'margin':  '3%',
                   'margin-bottom':  '1%',
                   'border-radius':  '50%',
                   'box-shadow': '1px 1px 3px #555 ',  
                   '-webkit-transition': '.8s ease-in-out',
                   'transition': '.8s ease-in-out ', 
                   'height':  '0%',
                        });
            $(".iconreseau").height((2*h)/100)

            $(".iconreseaub").height((2*h)/100)
            $(".divreseauso").eq(0).css({
                 'font-style':  'italic',
                 '-webkit-transition': '.8s ease-in-out',
                 'transition': '.8s ease-in-out ', 
                 'height':  '20%',
                 'margin-left':  '10%',
               
                  });
                  $(".divreseauso").eq(1).css({
                    '-webkit-transition': '.8s ease-in-out',
            'transition': '.8s ease-in-out ', 
          'box-shadow': '0 0 5px rgba(0, 0, 0, 1)',
          'height':  '35%',
          'margin-top':  '10%'
                   //'border':  '1px solid blue',
                        });

                              
                              $("#inputresaeu").css({
                                '-webkit-transition': '.8s ease-in-out',
                                'transition': '.8s ease-in-out ', 
                                'font-size':  '10px', 
                               'width':  '73%',
                               'float':  'right',
                              // 'margin':  '2%',
                               'margin-top':  '1%',
                              
                              });
                             //       $("#inputresaeu").height((0*Y)/100)

}
function csshoverbouton() {
    $('.bt').hover(function(){
        var i = $(this).index()
        
        $('.bt').eq(i).css({
            
        'box-shadow': '1px 1px 12px #555',
    });

        },function(){
          $('.bt').css({
            'box-shadow': '1px 1px 3px #555',

          });
      });
    
    }

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
          if( i == 1 && curParti == 1){
            
            $('.divsup').eq(0).css({
                'display': 'block',
                
            });
          }
          else if( i == 1 && curParti == 2){
           
            $('.divsup').eq(1).css({
                'display': 'block',
                
            });
          }

          else if( i == 5 && curParti == 2){
           
            changementPourAjout(2)
            $('.ajvalider').eq(1).css({
                
                'margin-left':'20%',
            });
            $('.ajvalider').eq(2).css({
                'display': 'inline',

            });
            $('.ajvalider').eq(0).css({
                'display': 'none',
                

            });
            $('.ajvalider').eq(2).attr("disabled", true)
           
          }

          else if( i == 6 && curParti == 2){
           
            changementPourAjout(1)
            $('.bt').eq(6).attr("disabled", true)
           
            $('.ajvalider').eq(2).css({
                'display': 'none',
                
            });
            $('.ajvalider').eq(0).css({
                'display': 'inline',
                'margin-left':'20%',

            });
            $('.ajvalider').eq(1).css({
                
                'margin-left':'',
            });
 
       }

       else if( i == 0 ){
           
        $(".partimenu").css({
            'display': 'none',
        }) ;
          $(".partimenu").eq(7).css({
            'display': 'block',
        }) ;
  
   }

          
           
    
    })


       
            }


              

              function cssinputa(){
                  $(".inputa").css({
                  'position': 'absolute' , 
                'left': '50%',
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
             'margin-left': '20%' , 
                'font-weight': 'bold',
               'font-style': 'italic',
                  'font-size': '10px' , 
                    'width': '50%' ,
            
            }) 

           
                  
              }

              function cssinputannuler(){
                $(".clientdlabb").css({
                'position': 'absolute' , 
                                
                'left': '50%',
                
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',
            
            
                'margin-left': '20%' , 
                'font-weight': 'bold',
'font-style': 'italic',

}) 

                $(".clientdlabb").eq(8).css({
                        'font-weight': 'bold',
                        'font-style': 'italic',

                            'font-size': '10px' , 
                       'width': '50%' ,
          
          }) 
                
            }
function cssbody() {
    $("#body").css({
                                        
        
        'width': '100%' , 
        'margin-top': '3%' , 
        'box-shadow': '1px 1px 12px #555',
        'border-radius': '2%' , 
        }) ;
       
        $("#body").height((h*50)/100)
        cssmenu()
        csscorps()
}

function cssDivClient() {
    $("#tabclient,#tabannonce,#tabpub,#tabprogr,#tabidee").css({
        
        'width': '85%' , 
        'float': 'left' ,   
        'overflow': 'auto' ,       
        'margin-top': '5%' , 
        'margin-left': '4%' , 
'border-collapse': 'collapse',

        }) ;
        //$("#tabprojet").width((w*20)/100)
       
        
        $("#ideelabel").css({
                                        
            
           
            'text-align': 'center',
            'font-size':'12px',
            'font-weight':'bold',
           'margin-left':'35%',
            }) ;

            $("td,th").css({
                                        
            
                'border': '1px solid black',
                'border-spacing': '1px',
                'text-align': 'center',
                'font-size':'12px',
                'cursor':'pointer',
               // 'height':'5%',
                }) ;
              //  $("tr").css({
               //  'height':'15px',
               //     }) ;

               //     $("td").width((5*w)/100)
                 //   $("td").height((0.2*h)/100)
                

                        
                  
                          
      
        
          
                           
                        
           
                   $('.tableline').hover(function(){
            
                    var a = $(this).index() -1
                    $(".tableline").eq(a).css({
                    
                      'background-image': 'linear-gradient(#87cefa,white)',
                  
                         
                    }) ;
            
                    },function(){
                        curenntcsstab( curClientindex)
  
                  });
                  
                }

               
                
                          
     function curenntcssitem(i) {
         
        $(".classdivm").eq(i).css({
         'background-image': 'linear-gradient(#87cefa,white)',
            'cursor':'pointer',
            }) ;

            $(".classflech").eq(i).css({
                     'display': 'block',
                }) ;
         
                }
                function  cssDivHeader()  {

                    $("#header").css({
                      
                     
                             
                       'width': 'wrap-content' ,      
                      
              
                      }) ;
                      $("#header").height((h*10)/100)
                      $("#htitre").css({
                          
                           'width': 'wrap-content' ,      
                           'height': '50%' ,     
                           
                'background-image': 'linear-gradient(white,#c6ffec)',
                     
                          }) ;
                          $('.bt').css({
                          
                      'box-shadow': '1px 1px 3px #555',
                      'border-radius': '5%',
                  });
                          $("#houtil").css({
                              
                             
                'background-color': '#eee',
                'box-shadow': '1px 1px 12px #555',
                'margin-top': '1%' ,
                               'width': 'wrap-content' ,      
                               'height': '50%' ,  
                               'background-image': 'linear-gradient(white,#eee)',
                          
                              }) ;
                     
                              $("#logoetlabel").css({
                                  'position': 'relative',
                                     
                                  'float':  'left' ,
                                 
                                 }) ;
                                 $("#logoetlabel").width((w*25)/100)
                                 $("#logoetlabel").height(((h*10)/100)/2)
              
                                 $("#idlogo").css({
                              
                                  'float': 'left' ,
                                     
                                 
                                 }) ;
                                 $("#idlogo").width((w*5)/100)
                                 $("#idlogo").height((h*5)/100)
                              
                                 $("#idlab").css({
                              
                                 
                                  'position': 'absolute',
                                  'top': '50%',
                                  'left': '50%',
                                  'transform': 'translate(-50% , -50%)',
                                  'color':'blue',
                                  
                     
                     'font-family': 'Courier New Courier, monospace',
              
                     'font-weight': 'bold',
                     'font-size': '17px',
                     'font-style': 'oblique',
              
                         
                                 }) ;
              
                                 $("#iduser").css({
                              
                                 'float':  'right' ,
                                 'border-radius':  '50%' ,
                                 }) ;
                                 $("#iduser").width((w*5)/100)
                                 $("#iduser").height((h*5)/100)
              
                                 $("#iddivnot").css({
                                  'position':  'relative' ,
                                  'display':  'inline' ,
                                  'border-left': '2px solid #c6ffec' ,  
                                  'float':  'right' ,  
                                  'margin-right':  '5%' ,    
                                  }) ;
                                  $("#iddivnot").width((w*15)/100)
                                  $("#iddivnot").height((h*5)/100)
                              
              
                                  $("#nota").css({
                                      'position': 'absolute',
                                  'top': '50%',
                                  'left': '35%',
                                  'padding': '2%',
                                  'transform': 'translate(-50% , -50%)',
                                  'box-radius': '20px',
                                  'box-shadow': '1px 1px 3px #555',
                                  'cursor': 'pointer',
                                      }) ;
                                      $("#nota").width((w*3)/100)
                                      $("#nota").height((w*3)/100)
              
                                      $("#notb").css({
                                          'position': 'absolute',
                                      'top': '50%',
                                      'cursor': 'pointer',
                                      'left': '65%',
                                      'padding': '2%',
                                      'transform': 'translate(-50% , -50%)',
                                      'box-shadow': '1px 1px 3px #555',
                                      'box-radius': '20px',
                                          }) ;
                                          $("#notb").width((w*3)/100)
                                                                          $("#notb").height((w*3)/100)
              
                                                                          $("#notaa").css({
                                                                            'cursor': 'pointer',
                                                                              'position': 'absolute',
                                                                          'top': '30%',
                                                                          'left': '37%',
                                                                          'font-size': '14px',
                                                                          'font-weight': 'bold',
                                                                          'color': 'blue',
                                                                          'padding': '2%',
                                                                          'transform': 'translate(-50% , -50%)',
                                                                          'border-radius':  '50%' ,
                                                                          'text-align':  'center' ,
                                                                          'font-family': 'Courier New, Courier, monospace',
                                                                          'box-shadow': '1px 1px 3px #555',
                                                                             
                                                                              }) ;
                                                                              $("#notaa").width((w*2)/100)
                                                                              $("#notaa").height((w*2)/100)
              
                                                                              $("#notbb").css({
                                                                                'cursor': 'pointer',
                                                                                  'position': 'absolute',
                                                                              'top': '30%',
                                                                              'box-shadow': '1px 1px 3px #555',
                                                                              'left': '67%',
                                                                              'padding': '2%',
                                                                              'transform': 'translate(-50% , -50%)',
                                                                              'border-radius':  '50%' ,
                                                                              'text-align':  'center' ,
                                                                              'font-family': 'Courier New, Courier, monospace',
              
                                                                                 
                                                                                  }) ;
                                                                                  $("#notbb").width((w*2)/100)
                                                                                  $("#notbb").height((w*2)/100)
                  
              
                      
                                          $("#divserch").css({
                                              'position':  'relative' ,
                                              'display':  'inline' ,
                                              
                                              'border-left':'2px solid #c6ffec' ,  
                                              'float':  'right' ,  
                                              'margin-right':  '5%' ,    
                                              }) ;
                                              $("#divserch").width((w*30)/100)
                                              $("#divserch").height((h*5)/100)
              
                                              $("#idimgserch").css({
                                                      
                                                  'display':  'inline' ,
                                                  
                                                  'float':  'left' ,  
                                                  'margin-top':  '5%' , 
                                                  }) ;
                                                  $("#idimgserch").width((w*2)/100)
                                                  $("#idimgserch").height((w*2)/100)
              
                                                  
                                                  $("#idinputsercha").css({
                                                      
                                                      'display':  'inline' ,
                                                        
                                                      'float':  'right' ,  
                                                      'margin-top':  '6%' , 
                                                      'border-left':'0',
                                                      'border-top':'0',
                                                      'border-right':'0',
                                                      'border-bottom': '1px solid white',
                                                      'background':'rgba(0,0,0,0.1)',
                                                      }) ;
                                                     
                                                      
                                              $("#divsercha").css({
                                                  'position':  'absolute' ,
                                                  'top': '50%',
                                      'left': '50%',
                                      
                                      'transform': 'translate(-50% , -50%)',
                                                  'display':  'inline' ,
                                                  
                                                  'float':  'right' ,  
                                                  'background-color':'white' , 
                                                  'border-radius':  '10%' ,
                                                   'background':'rgba(0,0,0,0.3)',
                                                  }) ;
                                                  $("#divsercha").width((w*20)/100)
                                                  $("#divsercha").height((h*4)/100)
                                                
              
                                                  $("#divbouton").css({
                                                       'float':  'right' ,  
                                                      'position':  'relative' ,  
                                                      
                                                      'border-left': '2px solid #c6ffec' ,
                                                      'height': '100%' ,
                                                      
                                                      
                                                      }) ;
                                                      $("#divbouton").width((w*40)/100)
                                                      
              
                                                      $("#idparam").css({
                                                          
                                                          'position':  'absolute' ,  
                                                          'top': '50%',
                                                          'left': '95%',
                                                          
                                                          'transform': 'translate(-50% , -50%)',
                                                         
                                                         
                                                          
                                                          }) ;
                                                          $("#idparam").width((w*2)/100)
                                                          $("#idparam").height((w*2)/100)
              
                                                          
              
                                                      $("#idsup").css({
                                                          
                                                         'position':  'absolute' ,  
                                                         'top': '50%',
                                                         'left': '85%',
                                                         
                                                         'transform': 'translate(-50% , -50%)',
                                                        
                                                        
                                                         
                                                         }) ;
                                                         $("#idsup").width((w*2)/100)
                                                         $("#idsup").height((w*2)/100)
              
                                                         $("#idnp").css({
                                                          
                                                          'position':  'absolute' ,  
                                                          'top': '50%',
                                                          'left': '65%',
                                                          
                                                          'transform': 'translate(-50% , -50%)',
                                                         
                                                         
                                                          
                                                          }) ;
                                                          $("#idnp").width((w*2)/100)
                                                          $("#idnp").height((w*2)/100)
                                                         
                                                  
              
                
              
                 
              
                                                          $("#idarch").css({
                                                          
                                                              'position':  'absolute' ,  
                                                              'top': '50%',
                                                              'left': '75%',
                                                              
                                                              'transform': 'translate(-50% , -50%)',
                                                             
                                                             
                                                              
                                                              }) ;
                                                              $("#idarch").width((w*2)/100)
                                                              $("#idarch").height((w*2)/100)
              
              
                                                              $("#idact").css({
                                                          
                                                                  'position':  'absolute' ,  
                                                                  'top': '50%',
                                                                  'left': '55%',
                                                                  
                                                                  'transform': 'translate(-50% , -50%)',
                                                                 
                                                                 
                                                                  
                                                                  }) ;
                                                                  $("#idact").width((w*2)/100)
                                                                  $("#idact").height((w*2)/100)
              
                                                                  $("#idedit").css({
                                                          
                                                                      'position':  'absolute' ,  
                                                                      'top': '50%',
                                                                      'left': '45%',
                                                                      
                                                                      'transform': 'translate(-50% , -50%)',
                                                                     
                                                                     
                                                                      
                                                                      }) ;
                                                                      $("#idedit").width((w*2)/100)
                                                                      $("#idedit").height((w*2)/100)
                       
                                                                      $("#idplus").css({
                                                          
                                                                          'position':  'absolute' ,  
                                                                          'top': '50%',
                                                                          'left': '35%',
                                                                          
                                                                          'transform': 'translate(-50% , -50%)',
                                                                         
                                                                         
                                                                          
                                                                          }) ;
                                                                          $("#idplus").width((w*2)/100)
                                                                          $("#idplus").height((w*2)/100)
                           
                                                                          $("#divgain").css({
                                                          
                                                                              'display':  'inline' ,
                                                                              'position':  'relative' , 
                                                                              'border-right': '2px solid #c6ffec' ,
                                                                              'float':  'left' , 
                                                                              'height':  '100%' ,  
                                                                             
                                                                              
                                                                              }) ;
              
                                                                              $("#divgain").width((w*35)/100)
                                                                             
                                                                              $("#idlabgaina").css({
                                                          
                                                                                  'position':  'absolute' ,  
                                                                                  'top': '50%',
                                                                                  'left': '20%',
                                                                                  
                                                                                  'transform': 'translate(-50% , -50%)',
                                                                                 
                                                                                  'font-weight': 'bold',
                  'font-style': 'italic',
                                                                                  'font-family': 'Courier New, Courier, monospace',
              
                                                                                  
                                                                                  }) ;
                                                                                  $("#idlabgainb").css({
                                                          
                                                                                      'position':  'absolute' ,  
                                                                                      'top': '50%',
                                                                                      'left': '60%',
                                                                                      
                                                                                      'transform': 'translate(-50% , -50%)',
                                                                                     
                  'font-size': '20px',
                  'font-weight': 'bold',
                  'font-style': 'italic',
                                                                                     
                
                                                                                      }) ;
                                                                                      $("#idhide").css({
                                                          
                                                                                          'position':  'absolute' ,  
                                                                                          'top': '50%',
                                                                                          'left': '90%',
                                                                                          
                                                                                          'transform': 'translate(-50% , -50%)',
                                                                                         
                                                                                         
                                                                                          
                                                                                          }) ;
                                                                                          $("#idhide").width((w*2)/100)
                                                                          $("#idhide").height((w*2)/100)
                                                                          
              
                                                                          $("#hidegain").css({
                                                          
                                                                              'position':  'absolute' ,  
                                                                              'top': '50%',
                                                                              'left': '95%',
                                                                              
              
              
                 'background-image': 'linear-gradient(white,#eee)',
              
                                                                              'transform': 'translate(-50% , -50%)',
                                                                             
                                                                             
                                                                              
                                                                              }) ;
              
                                                                              $("#hidegain").width((w*10)/100)
                                                                              $("#hidegain").height((w*2)/100)
                                                                              
                                                                          }
                 
              
              
function cssmenu() {
    $("#menu").css({
        'float': 'left' ,                
        
        'width': '25%' , 
        
        'background-image': 'linear-gradient(white,#eee)',
        'cursor':'pointer',
        'margin-top': '5%' , 
        'padding-top': '5%' ,
        }) ;
       
        $("#menu").height((h*30)/100)

        $(".classdivm").css({
                        
            
            'position': 'relative' , 
            'width': '100%' ,
            'height': '9%' ,
            'margin-bottom': '2%' , 
            'background-image': 'linear-gradient(#c6ffec,white)',
            'cursor':'pointer',
            }) ;

           
           

         
            $(".classicone").css({
                        
                 
                'position': 'absolute' ,
                'top': '50%',
                'left': '13%',
                'transform': 'translate(-50% , -50%)',
                'cursor':'pointer',
                }) ;
                $(".classicone").width((w*2)/100)
                $(".classicone").height((w*2)/100)
  
                $(".classflech").css({
                        
                 
                    'position': 'absolute' ,
                    'top': '50%',
                    'left': '90%',
                    'transform': 'translate(-50% , -50%)',
                    'cursor':'pointer',
                    }) ;
                    $(".classflech").width((w*2)/100)
                    $(".classflech").height((w*2)/100)
      

                $(".classlab").css({
                        
                      
                    'position': 'left' ,
                    'margin-left': '35%' ,
                    'margin-top': '2%' ,
                    
                     
                    'text-align': 'left' ,
                    'font-weight': 'bold',
    'font-style': 'italic',
    'color':'blue',
    'cursor':'pointer',

                   
                    }) ;
                    $(".classlab").height((w*2)/100)
  

}

function csscorps() {
    $("#corps").css({
        'float': 'right' ,                    
        'background-image': 'linear-gradient(#eee,white)',
        'width': '70%' , 
        'margin-top': '1%' , 
        
        }) ;

        $(".partimenu").css({
           
           // 'border': '1px solid blue' , 
            'overflow': 'auto' , 
            'height': '95%' , 
            'width': '70%' , 
            'float': 'left',
            }) ;
            $(".partimenu").eq(3).css({
           
                
                'width': '70%' , 
               
                }) ;
            $(".partimenu").eq(4).css({
           
                 
                 'width': '100%' , 
                
                 }) ;

                 $("#statistique").css({
           
                    // 'border': '1px solid blue' ,
                    'font-size': '27px' , 
                    'position': 'absolute' ,
                    'color': 'blue', 
                    'top': '50%',
                    'left': '50%',
                    'transform': 'translate(-50% , -50%)',
                   
                     }) ;
                     
                 $("#archive").css({
           
                    // 'border': '1px solid blue' ,
                    'font-size': '27px' , 
                    'color': 'blue', 
                    'position': 'absolute' ,
                    'top': '50%',
                    'left': '50%',
                    'transform': 'translate(-50% , -50%)',
                   
                     }) ;
       
        $("#corps").height((h*49)/100)
      cssDivClient()
       
}


         function curenntcsstab(i) {
                    $(".tableline").css({
                        'background-image': '',
                        'cursor':'pointer'
                    }) ;
                  
                    $(".tableline").eq(i).css({
                                    
                        
                            
                        'background-image': 'linear-gradient(#87cefa,white)',
                        'cursor':'pointer'
                    }) ;
                  
                        
                     
                            }