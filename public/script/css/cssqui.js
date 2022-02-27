
csstitre()


if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
   cssPageQuiResponse()
  
   createhtmlQui()
   $('p').css({
    
     'font-size': '8px' ,
//   'background-color': 'transparent' ,

});
   csstextResponse()
   cssimageResponse()
   } else {
      cssPageQui()
      cssimage()
      csstext()

  }

  function csstextResponse(){
    
   $('.pr').css({
     
     'font-size': '8px' ,
//   'background-color': 'transparent' ,

});

    
}

function csstext(){
   $('.pp').css({
    
  'font-size': '12px' ,
//   'background-color': 'transparent' ,

});

    $('.p').css({
        'font-style': 'italic' ,
        'font-weight': 'bold' ,
    'font-size': '12px' ,
 //   'background-color': 'transparent' ,

});
}

function cssPageQuiResponse(){
   $(".page").eq(4).css({
      'box-shadow': '1px 1px 3px #555',
        'border-radius':'20px',
        'border':'1px solid red',
      // 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
      'margin-left':'2%',
      'margin-top':'2%',
     
    });
    $(".page").eq(4).width( (X*98)/100)
   $(".page").eq(4).height(1.6*Y)

  
    $('#pagequi').css({
      
        'margin':'1%',
        'width':'98%',
         'overflow': 'auto',
       //'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',

            });

           // $('#pagequi').width((X*69)/100)

         //   $('#pagequi').height((Y*75)/100)
  
}
function cssPageQui(){

   $(".page").eq(4).css({
      'border':'1px solid red',
     //  'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
       'box-shadow': '1px 1px 3px #555',
      'margin-left':'17%',
      'margin-top':'2%',
      'border-radius':'20px',
     
    });
    $(".page").eq(4).width( (X*70)/100)
  /$(".page").eq(4).height(2.3*Y)

    
    $('#pagequi').css({
        'margin':'1%',
     //   'overflow': 'auto',
       //'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',

            });

            $('#pagequi').width((X*69)/100)

         //   $('#pagequi').height((Y*75)/100)
  
}
 function createhtmlQui(){
   $('#pagequi').html('')

   var p1  = '<p class="pr"> <img id="thiesa"  src ="public/image/acceuil/thies/a.jpg"/> </p>'
   var p2  = '   <h3>THIES EN MARCHE</h3> '
 var p3 = ' <p class="pr"> edu text du text  edu text du text edu text du text edu text du text edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte</p>  </br> '
var p4 = '<p class="pr"> edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte</p> <img id="thiesb"  src ="public/image/acceuil/thies/b.jpg"/> '

var p5 = '<p class="pr"> edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte</p>'
var p6 = ' <p class="pr"> edu dut du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte <img id="thiesc"  src ="public/image/acceuil/thies/c.jpg"/>   edu dut du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte</p>'  

var p7 = ' <p class="pr"><img id="thiesd"  src ="public/image/acceuil/thies/d.jpg"/>  edu dut du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu <img id="thiesf"  src ="public/image/acceuil/thies/f.jpg"/> text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte  </p>'

var p8 = '<h4>collaboration</h4>'

var p9 = '<p class="pr"> <img id="thiese"  src ="public/image/acceuil/thies/e.jpg"/>  edu dut du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text du text edu text du text  edu text dtext edu text du text edu text du textedu text du text edu text du text edu text du text  edu text du text edu text du text edu text du text blabla blabla encor blala du texte du texte du texte du texte</p> '


$('#pagequi').append(p1)
   $('#pagequi').append(p2)
   $('#pagequi').append(p3)
   $('#pagequi').append(p4)
   $('#pagequi').append(p5)
   $('#pagequi').append(p6)
   $('#pagequi').append(p7)
   $('#pagequi').append(p8)
   $('#pagequi').append(p9)
}
 function cssimageResponse(){
    $('#thiesa').css({
      'border':'1px solid red',
    'float': 'left',
 'margin':'2%',
 'border-top-left-radius': '25%',
 'box-shadow': '1px 1px 3px #555',
     
 //'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                
 //'border':'1px solid blue',
    //'top':'52%',
// '-ms-transform': 'translate(-50%,-50%)',
  //'transform': 'translate(-50%,-50%)',
        });

        $('#thiesa').width((X*45)/100)

          $('#thiesa').height((Y*18)/100)

        

          $('#thiesb').css({
            'border':'1px solid red',
            'float': 'right',
         'margin':'2%',
         'box-shadow': '1px 1px 3px #555',
        // 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',

       //  'border':'1px solid blue',
            //'top':'52%',
        // '-ms-transform': 'translate(-50%,-50%)',
          //'transform': 'translate(-50%,-50%)',
                });
        
                $('#thiesb').width((X*30)/100)
        
                  $('#thiesb').height((Y*15)/100)


                  $('#thiesc').css({
                     'border':'1px solid red',
                    'float': 'left',
                 'margin':'2%',
                 'box-shadow': '1px 1px 3px #555',
                 'border':'1px solid red',
                    //'top':'52%',
                // '-ms-transform': 'translate(-50%,-50%)',
                  //'transform': 'translate(-50%,-50%)',
                        });

                  $('#thiesc').width((X*35)/100)
        
                  $('#thiesc').height((Y*15)/100)

                  $('#thiesd').css({
                     'border':'1px solid red',
                    'float': 'left',
                 'margin':'2%',
                 'box-shadow': '1px 1px 3px #555',
 
                          });


                  $('#thiesd').width((X*25)/100)
        
                  $('#thiesd').height((Y*12)/100)
       
                  $('#thiesf').css({
                     'border':'1px solid red',
                    'float': 'right',
                 'margin':'2%',
                 'box-shadow': '1px 1px 3px #555',
 
                          });

                  $('#thiesf').width((X*25)/100)
        
                  $('#thiesf').height((Y*12)/100)
       


                  $('#thiese').css({
                     'box-shadow': '1px 1px 3px #555',
                     'border':'1px solid red',
                    'margin':'3%',
                    'float': 'left',
                
                          });
                  $('#thiese').width((X*35)/100)
        
                  $('#thiese').height((Y*15)/100)
       
       
 }
 function cssimage(){
   $('#thiesa').css({
      'border':'1px solid red',
   'float': 'left',
'margin':'2%',
'border-top-left-radius': '25%',
'box-shadow': '1px 1px 3px #555',
    
//'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
               
//'border':'1px solid blue',
   //'top':'52%',
// '-ms-transform': 'translate(-50%,-50%)',
 //'transform': 'translate(-50%,-50%)',
       });

       $('#thiesa').width((X*35)/100)

         $('#thiesa').height((Y*32)/100)


         $('#thiesb').css({
            'border':'1px solid red',
           'float': 'right',
        'margin':'2%',
        'box-shadow': '1px 1px 3px #555',
       // 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',

      //  'border':'1px solid blue',
           //'top':'52%',
       // '-ms-transform': 'translate(-50%,-50%)',
         //'transform': 'translate(-50%,-50%)',
               });
       
               $('#thiesb').width((X*25)/100)
       
                 $('#thiesb').height((Y*20)/100)


                 $('#thiesc').css({
                  'border':'1px solid red',
                   'float': 'left',
                'margin':'2%',
                'box-shadow': '1px 1px 3px #555',

                   //'top':'52%',
               // '-ms-transform': 'translate(-50%,-50%)',
                 //'transform': 'translate(-50%,-50%)',
                       });

                 $('#thiesc').width((X*20)/100)
       
                 $('#thiesc').height((Y*30)/100)

                 $('#thiesd').css({
                  'border':'1px solid red',
                   'float': 'left',
                'margin':'2%',
                'box-shadow': '1px 1px 3px #555',

                         });

                 $('#thiesd').width((X*15)/100)
       
                 $('#thiesd').height((Y*15)/100)
      
                 $('#thiesf').css({
                  'border':'1px solid red',
                   'float': 'right',
                'margin':'2%',
                'box-shadow': '1px 1px 3px #555',

                         });

                 $('#thiesf').width((X*15)/100)
       
                 $('#thiesf').height((Y*15)/100)
      


                 $('#thiese').css({
                    'box-shadow': '1px 1px 3px #555',
                    'border':'1px solid red',
                   'margin':'3%',
                   'float': 'left',
               
                         });
                 $('#thiese').width((X*20)/100)
       
                 $('#thiese').height((Y*30)/100)
      
      
}

 function csstitre(){
    $('h3').css({
      //  'border':'1px solid blue',
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