cssDivpublication()
cssPublication()

cssReseaua()
cssannoncp()
cssannonceur()
function cssDivpublication(){
    
    


    $("#divpubglobale").css({
      
        'border': '1px solid blue',
        'border-radius': '15%',
        'margin': '11px',
        'overflow': 'auto',
       
         
        }) ;
        $('#divpubglobale').width((X*67)/100)
        $('#divpubglobale').height((Y*80)/100)
 
    }

    function cssPublication(){
    
        $(".divpublication").css({
          
            'border': '1px solid blue',
           // 'border-radius': '15%',
            'margin': '3%',
           
             
            }) ;
            $('.divpublication').width((X*63)/100)
            $('.divpublication').height((Y*38)/100)
     

            $(".divpublimage").css({
          
            //    'border': '1px solid blue',
               // 'border-radius': '15%',
                'margin': '1%',
                'float': 'left',
                 
                }) ;
                $('.divpublimage').width((X*43)/100)
                $('.divpublimage').height((Y*36)/100)
         
                $(".divannonceur").css({
          
                    'border': '1px solid blue',
                   // 'border-radius': '15%',
                    'margin': '1%',
                    'float': 'right',
                   
                   
                     
                    }) ;
                    $('.divannonceur').width((X*17)/100)
                    $('.divannonceur').height((Y*36)/100)
             

                    $(".tabpubimga").css({
          
                    //    'border': '1px solid blue',
                       // 'border-radius': '15%',
                        'margin': '1%',
                        'float': 'left',
                        
                         
                        }) ;
                        $('.tabpubimga').width((X*28)/100)
                        $('.tabpubimga').height((Y*35)/100)
                 
    
                        $(".tabpubimgb").css({
          
                            'border': '1px solid blue',
                           // 'border-radius': '15%',
                            'margin': '1%',
                            'float': 'right',
                            'transform': 'rotate(45deg)',
                       
                           
                             
                            }) ;
                            $('.tabpubimgb').width((X*12)/100)
                            $('.tabpubimgb').height((Y*16.5)/100)

                            $(".tabpubimgc").css({
          
                                'border': '1px solid blue',
                               // 'border-radius': '15%',
                                'margin': '1%',
                                'float': 'right',
                                'transform': 'rotate(45deg)',
                       
                               
                                 
                                }) ;
                                $('.tabpubimgc').width((X*12)/100)
                                $('.tabpubimgc').height((Y*16.5)/100)
                         
                     
        
                    
                                cssAnnonceur()
    
                
            
        }


        function cssAnnonceur(){
            $(".divannonceura").css({
          
                'border': '1px solid blue',
               // 'border-radius': '15%',
                'margin': '1%',
               
               
                 
                }) ;
                $('.divannonceura').eq(2).width((X*12)/100)
                $('.divannonceura').eq(2).height((Y*5)/100)
         
                $(".contactermoi").css({
                'color': '#00ffff' ,
                'padding-left': '23%' ,
                'cursor': 'pointer' ,
                'font-size': '15px',
                'text-decoration': 'underline',
            }) ;

            
            $(".annonceurtel").css({
            
          //  'padding-left': '23%' ,
            'cursor': 'pointer' ,
            'font-size': '12px',
            }) ;

             
            $(".annonceuremail").css({
            
                //  'padding-left': '23%' ,
                  'cursor': 'pointer' ,
                  'font-size': '9px',
                  }) ;
      

                  $(".spananonce").css({
            
                    //  'padding-left': '23%' ,
                       'color': 'blue',
                      }) ;

                  


            
        }


        function cssReseaua(){
            $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").width((X*2)/100)
              

            $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").css({
            
                'margin-left': '6%',
                }) ;



            $(".annonceuremail").css({
            
                //  'padding-left': '23%' ,
                  'cursor': 'pointer' ,
                  'font-size': '9px',
                  }) ;


                  $(".reseaua").css({
            
                    //  'padding-left': '23%' ,
                    'margin': '8%',
                    'border': '1px solid black',
                    'background':'rgba(0,191,255,0.3)',
                      }) ;
        }


        function cssannoncp(){
            $(".imgannonce").css({
            
                //  'padding-left': '23%' ,
                'margin-top': '18%',
                'margin-left': '35%',
                'border': '1px solid black',
                 'border-radius': '50%',
          
              //  'background':'rgba(0,191,255,0.3)',
                  }) ;
    
                  $('.imgannonce').width((X*5)/100)
                //  $('.imgannonce').height((Y*16.5)/100)
           

                $(".annoncnom").css({
            
                    //  'padding-left': '23%' ,
                    'margin-left': '23%',
                    'font-size': '14px',
                    'font-style': 'italic',
                    
                      }) ;
                
        }
        



        function cssannonceur(){
            $(".annonces").css({
            
                //  'padding-left': '23%' ,
                'margin-top': '3%',
               
                'margin-left': '3%',
                'border': '1px solid blue',
             //    'border-radius': '50%',
              //  'background':'rgba(0,191,255,0.3)',
                  }) ;
    
                  $('.annonces').width((X*63)/100)
                  $('.annonces').height((Y*30)/100)
           
                  $(".annonceslab").css({
            
                    //  'padding-left': '23%' ,
                    'position': 'relative',
                    'top': '24%',
                    'margin-left': '3%',
                   
                 //    'border-radius': '50%',
                 'text-align': 'center',
                 'font-size': '14px',
                 'font-style': 'italic',
                 'color': 'orange',
                  //  'background':'rgba(0,191,255,0.3)',
                      }) ;
        

                  

               
                
        }
        