var aa = 0.001
        var aap = 0.001

        var a = 0.1
        var ap = 0.08


      function  curveGlobale( ) {
    
       
     
      var tab =   spana($('.pdescription'))
      
      curva(tab[0]  , tab[1]  )
    
     
    
    
    
       }
    
    
    


function textt(txt ) {
     
  var text = txt.text();
 


$('.pdescription').html('')

    
    $('.pdescription').html( text)


$('.pdescription').css({
 
'position': 'relative',
'border': '1px solid blue',
'margin-left': '25%' ,
'margin-top': '35%' ,
});



}



     



  
 


    

  
    function spana( txt ) {
      
    var tab = []
      var text = txt.text();
     var ts = text.length
     
     var mt = ts/2 
   
   if(ts%2 == 0)
   
   mt = (ts/2)  
   else
   mt = (ts/2)  - 1
   
   
   
   var texta = text.substring(0,mt)
   var textb = text.substring(mt)
   
     
    var html = "";
   
  
    
    for( var a = 0 ; a < texta.length ; a++){
      html += '<span class="aa">' + texta.charAt(a) + '</span>';

     }
    
 
     for( var a = 0 ; a < textb.length ; a++){
      html += '<span class="b">' + textb.charAt(a) + '</span>';

     }
   
     
     

   txt.html(html);
     
   
   $('.aa').css({
    'position':"absolute",
    'color':"red",
    
      
   });
 
   $('.b').css({
    'position':"absolute",
    'color':"green",
      
   });

     
     tab.push(texta) 
     tab.push(textb) 
     
      return tab ;
       }
    
      
  
     
       function curva(texta , textb ) {
    
        var tsa = texta.length 
        var tsb = textb.length 
      
        var ll = $('.pdescription').text().length 

       
          for( var i = 0 ; i < tsb ; i ++){
              var tx = 0
              var ty = 0
      

           if( ll == 40){
             if(is.ie())
                tx = 5*i + 100
                else
                tx = 5*i 
              

                ty =  a* Math.pow(i,2) 
          
              }
               
                else {

                  if(is.ie())
                  tx = 5*i  - 5  + 100
                else
                  tx = 5*i - 5
                 
               ty =  ap* Math.pow(i,2) 
               
              }
      
      
          $('.b').eq(i).css({
          
           //  transform:`translate(${tx}px,${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
        
      
      
        for( var i = 0 ; i < tsa ; i ++){
          

          var tx = 0
           

               
          if(is.ie())
          tx = 5*i  
        else
        tx = 5*i - 100


          var ty =  a * Math.pow((tsa -i),2)
        
      
         
          $('.aa').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
          
      
        
      
         
      
        
      
      
      
      }
      
      function curvb(texta , textb , index) {
    

  

        var tsa = texta.length 
        var tsb = textb.length 
    
        var ll = $('.pdescription:eq('+index+')  .line').eq( 1).text().length 
        
       
        

      
    
          for( var i = 0 ; i < tsb ; i ++){
            var tx = 0
            var ty = 0
    
            if( ll == 40){

              if(is.ie())
              tx = 5*i + 100
              else
              tx = 5*i 

              ty =  a* Math.pow(i,2) - 12
        
            }
             
              else {

                if(is.ie())
                tx = 5*i - 5 + 100
                else
             tx = 5*i  - 5

             ty =  ap* Math.pow(i,2) - 12
             
            }
    
    
         
      
         
          $('.pdescription:eq('+index+')  .bb').eq(i).css({
          
            // transform:`translate(${tx}px,${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
        for( var i = 0 ; i < tsa ; i ++){
          
          var tx  = 0
          
          if(is.ie())
          tx = 5*i 
          else
          tx = 5*i - 100


          var ty =  a * Math.pow((tsa -i),2) - 12
        
      
         
          $('.pdescription:eq('+index+')  .aa').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
             'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
      }
        
      
     
      
      
      }
    
        
      
      function curvc(texta , textb , index) {
    
        var tsa = texta.length 
        var tsb = textb.length 
      
        var ll = $('.pdescription:eq('+index+') .line').eq( 2).text().length 
        
      
    
       
        for( var i = 0 ; i < tsb ; i ++){
    
        
       
          var tx = 0
            var ty = 0
    
            if( ll == 40){


              if(is.ie())
              tx = 5*i + 100
              else
              tx = 5*i 
            

              ty =  a* Math.pow(i,2) - 23
        
            }
             
              else {

                if(is.ie())
                tx = 5*i - 5 + 100
                else
             tx = 5*i  - 5
             ty =  ap* Math.pow(i,2) - 23
             
            }
    
          
        
      
         
          $('.pdescription:eq('+index+')  .bbb').eq(i).css({
          
           //  transform:`translate(${tx}px,${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
        for( var i = 0 ; i < tsa ; i ++){
          
          var tx  = 0

          if(is.ie())
          tx = 5*i 
          else
           tx = 5*i - 100
          var ty =  a * Math.pow((tsa -i),2) - 23
        
      
         
          $('.pdescription:eq('+index+')  .aaa').eq(i).css({
          
           //  transform:`translate(${tx}px, ${-ty}px)`
           'transform':"translate(" +tx + "px,"+ -ty + "px)"
      
      
        })
        }
      
     
      
      }
    
      
        
      
        
        
        
      
       
       
      
      

  


