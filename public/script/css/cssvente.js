

  cssDiveAndInput()
  cssdivTable()
  function cssDiveAndInput(){
    
    


    $("#zonederecherche").css({
        'position': 'absolute',
  
        'border-left':'0',
        'border-top':'0',
        'border-right':'0',
        'border-bottom': '1px solid blue',
        'top': '7%',
        'left': '40%',
       
         
        }) ;
  
        $("#serchacceuil").css({
            
            
            'font-size': '12px',
            'font-style': 'italic',
            'float': 'left',
           
        'border-left':'0',
        'border-top':'0',
        'border-right':'0',
        'border-bottom': '0',
        'outline':'none',
        'background': 'transparent',
        'display': 'none',
            }) ;
  
  
            $("#imgserch").css({
                'float': 'left',
                'border-radius': '30px',
               
                }) ;
                $("#imgserch").width( (3*X)/100 )
    
                $("#lserch").css({
                  'float': 'right',
                //  'left': '15%',
              //    'top': '60%',
                  'margin-top': '5%',
                  'color': 'blue',
                  'font-size':'17px',
                  'font-weight': 'bold',
                  'font-style': 'italic',
                  
          
                   }) ;
  
  
  }
  
  
  function cssdivTable(){
    
    $("#tableventediv").css({
      'border': '1px solid blue',
      'margin-top': '10%',
      'margin-left': '15%',
       });
       $('#tableventediv').width((X*50)/100)
       $('#tableventediv').height((Y*55)/100)

 
       $("#tablevente").css({
        'border': '1px solid red',
      'position': 'relative',
        'width': '70%',
         'border-collapse': 'separate',
      'border-spacing': '8px 40px',
      'top': '2%',
      'left': '50%',
                '-ms-transform': 'translateX(-50%)',
                'transform': 'translateX(-50%)',

         });

        

       //  $('#tablevente').width((X*48)/100)
       //  $('#tablevente').height((Y*53)/100)
  

       $(".tabventeitem").css({
        'border': '1px solid blue',
        'position': 'relative',
           });

           $('.tabventeimg').width((X*10)/100)
           $('.tabventeimg').height((Y*14)/100)
        
    

           $(".tabventeimg").css({
            'border': '1px solid yellow',
         //   'position': 'relative',
         //   'top': '2%',
        //    'left': '50%',
        //              '-ms-transform': 'translateX(-50%)',
        //              'transform': 'translateX(-50%)',
                });
             $('.tabventeimg').width((X*10)/100)
            $('.tabventeimg').height((Y*10)/100)
         
     

        
      

         $(".tabventelab").css({
            'border': '1px solid blue',
           'position': 'absolute',
            'top': '90%',
           'left': '50%',
                    '-ms-transform': 'translateX(-50%)',
                     'transform': 'translateX(-50%)',
                });
             // $('.tabventelab').width((X*10)/100)
             // $('.tabventelab').height((Y*10)/100)
         

         

                
  }
  
  
  
  