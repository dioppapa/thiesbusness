
//createHeaderMoble()
//createSerchMoble()

function createHeaderMoble(){
    $('#headerb').html('')

    var contactdiv = '<div id="contactdiv"><label id="a"> contacter nous</label> <img id="cimg"   src="public/image/acceuil/basb.png"></img> </div>'
  
    var contact  = ' <div id="contacter"  style="display: none;">  <label    id="contactlemail"> email : <span class="spancontact">  thiesbusness@gmail.com </span> </label> </br>  <label   id="contactltel"> nom : <span class="spancontact"> 221774422647</span></label> </div>'

    var divre =  '<div id="reseau">  <img id="imgf" class="res" src="public/image/acceuil/facebook.png"></img> <img id="imgt" class="res"  src="public/image/acceuil/twitter.png"></img> <img id="imgi" class="res"  src="public/image/acceuil/insta.png"></img> <img id="imgw" class="res"  src="public/image/acceuil/youtube.png"></img>  </div>'
  
    
  
  $('#headerb').append(divre)
    $('#headerb').append( contactdiv)
    $('#headerb').append( contact)

     
}

function createSerchMoble(){
    $('#zonederecherche').remove()

   // alert('')
    var inputserch = ' <div id="zonederecherche"> <input id="serchacceuil" type="text" ></input><img   id="imgserch" src ="public/image/acceuil/search.png" /></div><div id="apercuacceuil" style="display: none;"></div>'
  
    $('#headerc').append(inputserch)  
}


function cssautocompl() {
  cssItem()
    $("#apercuacceuil").css({
      'position': 'absolute',
      'top':'5%',
      'left':'45%',
   '-ms-transform': 'translateX(-50%)' ,
      'transform': 'translateX(-50%)', 
      'width':'30%',
      'z-index':'4',
    //  'height':'65%',
    'border-radius':'15px',
      'padding':'1%',
    //  'background':'rgba(236,255,66,0.3)',
    'background-image':'linear-gradient(white , rgba(0,0,0,0.5))' ,
                       
 //'border': '1px solid #bafff0',

   }) ;

    

    
     
 }

 function cssItem() {


  $(".ca").css({
      
      
    'font-size': '10px',
    'font-weight': 'normal',
    'font-style': 'italic',
      'margin-right': '10px',
      }) ;

  $(".classe").css({
      
     
    'font-weight': 'bold',
    'float': 'left',
      'font-size': '12px',
      'margin-left': '3%',
     
      }) ;
      $(".marque").css({
      
        
        'float': 'left',
              'font-size': '12px',
              'margin-left': '3%',
              'font-weight': 'bold',
              
          }) ;
          $(".description").css({
      
             
              'margin-left': '20px',
              'font-size': '9px',
              'font-style': 'italic',
              
              }) ;

 
              $(".imgautocomp").css({
                  
                  'height': '30px',
                  'width':'30px',
                  
                  'position': 'absolute',
                  'right': '5%',
                  'top': '8%',
                  
                   '-ms-transform': 'translateX(-50%)',
                  'transform': 'translateX(-50%)',
                  'border-radius': '50px',
                  }) ;

                  
                    
                
                  $(".mark").css({
                      'color': 'blue',
                      'font-size': '14px',
                     
                      }) ;
  

                      $(".totalitem").css({
                         
                          'height':'10%',
                          'position': 'relative',
                          'box-shadow': '1px 1px 3px #555' ,
                          'margin':'auto',
                          'cursor':'pointer',
                          'margin-bottom':'2%',
                          'background-image':'linear-gradient(white , rgba(233,0,0,0.3))' ,
                          'width':'90%',
                         // 'border-radius': '8%',
                          'border-radius': '14px',
                          }) ;          
                      


              
     
 }
