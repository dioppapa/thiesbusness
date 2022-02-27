

if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
    cssTableProgrammeResponse()

    } else {
        cssTableProgramme()

   }
   hoverTdProgram()

   function cssTableProgrammeResponse(){

 

    $("#tableprogr").css({
                                        
         
       // 'width': '60%' , 
      //  'float': 'left' ,   
      // 'overflow': 'auto' ,   
      'margin': 'auto' ,     
        'margin-top': '5%' , 
      
      'border-collapse': 'none',
            'cursor':'pointer',
            'box-shadow': '1px 1px 3px #555',
     'position': 'absolute',
     'top': '25%',
    //  'left': '50%',
   //   '-ms-transform': 'translate(-50%,-50%)',
   //   'transform': 'translate(-50%,-50%)',
        
        }) ;
        
       
        $(".td , .tda , tdb").css({
                                        
            
          //  'border': '1px solid black',
            'box-shadow': '1px 1px 3px #555',
            'border-spacing': '1px',
            'text-align': 'center',
            'font-size':'8px',
            'font-weight':'bold',
            'cursor':'pointer',
            }) ;

           
                    $(".th").css({
                                        
            
                        //   'border': '1px solid black',
                         //  'border-spacing': '5px',
                         //  'text-align': 'center',
                         //  'font-size':'12px',
                         'box-shadow': '1px 1px 3px #555',
                         'border': '1px solid black',
                            
                         
                         'font-size':'8px',
                         
                           'cursor':'pointer',
                           }) ;
                    
                        $(".th").eq(0).css({
                                        
                           // 'box-shadow': '1px 1px 3px #555',
                           // 'border': '1px solid black',
                            'background': 'none',
                            'background-color': 'none',
                            'color': 'yellow',
                            'border': '',
                            'box-shadow': '',
                           
                            
                            }) ;

/**  
                        $("td").click(function(){
                            var  a = $(this).index()
                            var  b = $(this).parent().index()

                            alert('this index ' + a)
                            alert( 'this parent ' + b)
                        }) ;

                        */


                        $(".tda").css({
                                        
                            'border': '1px solid red',
                            'box-shadow': '1px 1px 3px #555',
                            'font-size':'8px',
                            'color':'black',
                            'font-weight':'bold',
                            }) ;

                            $(".tdb").css({
                                   
            'box-shadow': '1px 1px 3px #555',
          
                                           'font-size':'8px',
                                           'color':'black',
                                          
                                          
                                           'font-weight':'bold',
                                            'text-align':'center',
                       }) ;

                       $("#entete").css({
                        'position':'absolute',
                        'top':'20%',
                        'left':'50%',
                          '-ms-transform': 'translate(-50%,-50%)',
                 'transform': 'translate(-50%,-50%)',
               //  'box-shadow': '1px 1px 3px #555',
                 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.5)',
                 'border-radius':'20px',
              'font-size':'14px',
              'padding-top':'1%',
                        'text-align':'center',
                        'color':'black',
                        'width':'80%',
                        'height':'3%',
    }) ;

    //$("#entete").width((35*X)/100)
    //$("#entete").height((3*Y)/100)
     
                            $(".tda").eq(3).css({
                                        
            
                                
                                'color':'black',
                                'font-weight':'bold',
                               'font-size':'9px',
                              //  'width':'10%',
                              // 'height':'10%',
                                
                                }) ;




                                $(".tda").eq(0).width((8*X)/100)
                                $(".tda").eq(0).height((4*Y)/100)
                            
                                $(".tda").eq(1).width((8*X)/100)
                                $(".tda").eq(1).height((5*Y)/100)
                            
                                $(".tda").eq(2).width((8*X)/100)
                                $(".tda").eq(2).height((5*Y)/100)
                            

                                $(".tda").eq(3).width((8*X)/100)
                                $(".tda").eq(3).height((15*Y)/100)
                            
                            
                                $(".tda").eq(4).width((8*X)/100)
                                $(".tda").eq(4).height((15*Y)/100)
                            

                                $(".tda").eq(5).width((8*X)/100)
                                $(".tda").eq(5).height((8*Y)/100)
                            

                                $(".tr:nth-child(even)").css({
                                    'background-color': '#eee',
                                    }) ;

                                    $(".tr:nth-child(odd)").css({
                                        'background-color': 'rgba(233,0,0,0.1)',
                    
                                        }) ;

                                        $(".tdb:nth-child(even)").css({
                                            'background-color': '#eee',
                                            }) ;
        
                                            $(".tdb:nth-child(odd)").css({
                                                'background-color': 'rgba(233,0,0,0.1)',
                            
                                                }) ;

                                                $(".td:nth-child(even)").css({
                                                    'background-color': '#eee',
                                                    }) ;
                
                                                    $(".td:nth-child(odd)").css({
                                                        'background-color': 'rgba(233,0,0,0.1)',
                                    
                                                        }) ;

                                        $(".th:eq(0)").css({
                                         //   'background-color': 'white',
                                            'background-color':'#fff8dc',
                                            
                                        }) ;

}
    
       


function cssTableProgramme(){

 

    $("#tableprogr").css({
                                        
         
       // 'width': '60%' , 
      //  'float': 'left' ,   
      // 'overflow': 'auto' ,       
        'margin': '5%' , 
    //  'border': '1px solid black',
      'border-collapse': 'collapse',
      'border-collapse': 'none',
            'cursor':'pointer',
            'box-shadow': '1px 1px 3px #555',
    // 'position': 'absolute',
    //  'top': '50%',
    //  'left': '50%',
   //   '-ms-transform': 'translate(-50%,-50%)',
   //   'transform': 'translate(-50%,-50%)',
        
        }) ;
        
       
        $(".td , .tda , tdb").css({
                                        
            
          //  'border': '1px solid black',
            'box-shadow': '1px 1px 3px #555',
            'border-spacing': '5px',
            'text-align': 'center',
            'font-size':'12px',
            'font-weight':'bold',
            'cursor':'pointer',
            }) ;

           
                    $(".th").css({
                                        
            
                        //   'border': '1px solid black',
                         //  'border-spacing': '5px',
                         //  'text-align': 'center',
                         //  'font-size':'12px',
                         'box-shadow': '1px 1px 3px #555',
                         'border': '1px solid black',
                            
                         
                         'font-size':'18px',
                         
                           'cursor':'pointer',
                           }) ;
                    
                        $(".th").eq(0).css({
                                        
                           // 'box-shadow': '1px 1px 3px #555',
                           // 'border': '1px solid black',
                            'background': 'none',
                            'background-color': 'none',
                            'color': 'yellow',
                            'border': '',
                            'box-shadow': '',
                           
                            
                            }) ;

/**  
                        $("td").click(function(){
                            var  a = $(this).index()
                            var  b = $(this).parent().index()

                            alert('this index ' + a)
                            alert( 'this parent ' + b)
                        }) ;

                        */


                        $(".tda").css({
                                        
                            'border': '1px solid black',
                            'box-shadow': '1px 1px 3px #555',
                            'font-size':'18px',
                            'color':'black',
                            'font-weight':'bold',
                            }) ;

                            $(".tdb").css({
                                   
            'box-shadow': '1px 1px 3px #555',
          
                                           'font-size':'14px',
                                           'color':'black',
                                          
                                          
                                           'font-weight':'bold',
                                            'text-align':'center',
                       }) ;

                       $("#entete").css({
                        'position':'absolute',
                        'top':'17%',
                        'left':'50%',
                           '-ms-transform': 'translate(-50%,-50%)',
                 'transform': 'translate(-50%,-50%)',
               //  'box-shadow': '1px 1px 3px #555',
                 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.5)',
                 'border-radius':'20px',
              'font-size':'14px',
              'padding-top':'1%',
                        'text-align':'center',
                        'color':'black',
    }) ;

    $("#entete").width((35*X)/100)
    $("#entete").height((3*Y)/100)
     
                            $(".tda").eq(3).css({
                                        
            
                                
                                'color':'black',
                                'font-weight':'bold',
                               'font-size':'18px',
                              //  'width':'10%',
                              // 'height':'10%',
                                
                                }) ;




                                $(".tda").eq(0).width((10*X)/100)
                                $(".tda").eq(0).height((4*Y)/100)
                            
                                $(".tda").eq(1).width((10*X)/100)
                                $(".tda").eq(1).height((5*Y)/100)
                            
                                $(".tda").eq(2).width((10*X)/100)
                                $(".tda").eq(2).height((5*Y)/100)
                            

                                $(".tda").eq(3).width((10*X)/100)
                                $(".tda").eq(3).height((15*Y)/100)
                            
                            
                                $(".tda").eq(4).width((10*X)/100)
                                $(".tda").eq(4).height((15*Y)/100)
                            

                                $(".tda").eq(5).width((8*X)/100)
                                $(".tda").eq(5).height((8*Y)/100)
                            

                                $(".tr:nth-child(even)").css({
                                    'background-color': '#eee',
                                    }) ;

                                    $(".tr:nth-child(odd)").css({
                                        'background-color': 'rgba(233,0,0,0.1)',
                    
                                        }) ;

                                        $(".tdb:nth-child(even)").css({
                                            'background-color': '#eee',
                                            }) ;
        
                                            $(".tdb:nth-child(odd)").css({
                                                'background-color': 'rgba(233,0,0,0.1)',
                            
                                                }) ;

                                                $(".td:nth-child(even)").css({
                                                    'background-color': '#eee',
                                                    }) ;
                
                                                    $(".td:nth-child(odd)").css({
                                                        'background-color': 'rgba(233,0,0,0.1)',
                                    
                                                        }) ;

                                        $(".th:eq(0)").css({
                                         //   'background-color': 'white',
                                            'background-color':'#fff8dc',
                                            
                                        }) ;

}
    
       


function hoverTdProgram(){

    $('.th').hover(function(){ 
        var i = $(this).index() 
      
        
        $('.th').eq(i).css({
            'box-shadow': '1px 1px 3px #555 inset',
        });
        
       },function(){
        var i = $(this).index()
      
        $('.th').css({
            'box-shadow': '1px 1px 3px #555',
        });

    
     });

     $('.tda').hover(function(){ 
        var i = $(this).parent().index() -1
      
        
        $('.tda').eq(i).css({
            'box-shadow': '1px 1px 3px #555 inset',
        });
        
       },function(){
        var i = $(this).index()
      
        $('.tda').css({
            'box-shadow': '1px 1px 3px #555',
        });

    
     });
    
     

     $('.tdb').hover(function(){ 
     //   var i = $(this).parent().index() 
     var i = $(this).index() - 1
      
       
     if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
        $('.tdb').eq(i).css({
            'box-shadow': '1px 1px 3px #555 inset',
             'color':'black',
            'font-weight':'bold',
            'font-style':'italic',
        });
        } else {
            $('.tdb').eq(i).css({
                'box-shadow': '1px 1px 3px #555 inset',
                'font-size':'16px',
                'color':'black',
                'font-weight':'bold',
                'font-style':'italic',
            });
       }
        
        
       },function(){
        var i = $(this).index()
      
        $('.tdb').css({
            'box-shadow': '1px 1px 3px #555',
            'font-style':'normal',
        });

       
    
     });


     $('.td').hover(function(){ 
        //   var i = $(this).parent().index() 
        var ind = $(this).index() - 1
         
        var p = $(this).parent().index() - 1
        
    //    alert('ind' + ind)
     //   alert('p' + p)
     var i   = 0
     if(p==1){
         i = ind 
        }
        else if(p==2){
            i = ind + 5
        }
        else if(p==3){
            i = ind + 10
        }
        else if(p==4){
            i = ind + 15
        }
        else if(p==5){
            i = ind + 20
        }
           
           $(' .td').eq(i).css({
               'box-shadow': '1px 1px 3px #555 inset',
              // 'font-size':'16px',
               'color':'black',
               'font-weight':'bold',
               'font-style':'italic',
           });
           
          },function(){
           var i = $(this).index()
         
           $('.td').css({
               'box-shadow': '1px 1px 3px #555',
               'font-style':'normal',
           });
   
          
       
        });
}