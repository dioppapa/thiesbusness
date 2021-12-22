cssimage()
csstitre()
cssPageQui()
csstext()

function csstext(){
    $('.p').css({
        'font-style': 'italic' ,
        'font-weight': 'bold' ,
    'font-size': '12px' ,
 //   'background-color': 'transparent' ,

});
}
function cssPageQui(){
    $('#pagequi').css({
        'margin':'1%',
        'overflow': 'auto',
      
            });

            $('#pagequi').width((X*69)/100)

            $('#pagequi').height((Y*75)/100)
  
}
 function cssimage(){
    $('#thiesa').css({
          
    'float': 'left',
 'margin':'2%',
 'border-top-left-radius': '25%',
 'border':'1px solid blue',
    //'top':'52%',
// '-ms-transform': 'translate(-50%,-50%)',
  //'transform': 'translate(-50%,-50%)',
        });

        $('#thiesa').width((X*35)/100)

          $('#thiesa').height((Y*32)/100)


          $('#thiesb').css({
          
            'float': 'right',
         'margin':'2%',
         'border':'1px solid blue',
            //'top':'52%',
        // '-ms-transform': 'translate(-50%,-50%)',
          //'transform': 'translate(-50%,-50%)',
                });
        
                $('#thiesb').width((X*20)/100)
        
                  $('#thiesb').height((Y*20)/100)


                  $('#thiesc').css({
          
                    'float': 'left',
                 'margin':'2%',
                 'border':'1px solid blue',
                    //'top':'52%',
                // '-ms-transform': 'translate(-50%,-50%)',
                  //'transform': 'translate(-50%,-50%)',
                        });

                  $('#thiesc').width((X*20)/100)
        
                  $('#thiesc').height((Y*30)/100)



                  $('#thiesd').width((X*15)/100)
        
                  $('#thiesd').height((Y*15)/100)
       
                  $('#thiesf').css({
          
                    'float': 'right',
                 'margin':'2%',
                 'border':'1px solid blue',
                          });

                  $('#thiesf').width((X*20)/100)
        
                  $('#thiesf').height((Y*23)/100)
       


                  $('#thiese').css({
                    'border':'1px solid blue',
                 //   'margin':'3%',
                    'float': 'left',
                
                          });
                  $('#thiese').width((X*20)/100)
        
                  $('#thiese').height((Y*30)/100)
       
       
 }

 function csstitre(){
    $('h3').css({
        'border':'1px solid blue',
 'margin-top':'10%',
 'margin-bottom':'1%',
 'margin-right':'7%',
 'float': 'right',
    //'top':'52%',
// '-ms-transform': 'translate(-50%,-50%)',
  //'transform': 'translate(-50%,-50%)',
        });

     //   $('#thiesa').width((X*40)/100)

         // $('#thiesa').height((Y*35)/100)


         $('.p').eq(0).css({
 
            
            'padding-top':'14%',
            'float': 'rigth',
               //'top':'52%',
           // '-ms-transform': 'translate(-50%,-50%)',
             //'transform': 'translate(-50%,-50%)',
                   });


         $('.p').eq(1).css({
 
            
            'margin':'3%',
            'float': 'left',
               //'top':'52%',
           // '-ms-transform': 'translate(-50%,-50%)',
             //'transform': 'translate(-50%,-50%)',
                   });

                   $('.p').eq(1).width((X*40)/100)

         // $('#thiesa').height((Y*35)/100)



          $('.p').eq(2).css({
 
            
            'margin':'3%',
            'float': 'left',
               //'top':'52%',
           // '-ms-transform': 'translate(-50%,-50%)',
             //'transform': 'translate(-50%,-50%)',
                   });

               //    $('.p').eq(1).width((X*40)/100)


               $('.p').eq(3).css({
 
            
                'margin':'3%',
                'float': 'right',
                       });
    
                   //    $('.p').eq(1).width((X*40)/100)
    

                   $('.p').eq(6).css({
 
                   
                   // 'margin':'3%',
                    'float': 'right',
                
                           });
                           $('.p').eq(6).width((X*45)/100)
                           $('.p').eq(7).css({
 
            
                           // 'margin':'3%',
                            'float': 'right',
                                   });
        
 }