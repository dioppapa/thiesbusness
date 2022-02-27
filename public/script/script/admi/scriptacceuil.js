
var affichnewb = true
var affichnew = true

var indexi 

var nameiaa = ''
var nameia = ''
var nameib = ''

var vimgaa =  false
var vtxt =  false
var vimga =  false
var vimgb =  false

var New = listeNew()


clickBoutonNewB()
clickBoutonNew()


clickBoutonUpload()
clickBoutonUploadNew()

inputFileChangednew()

validerNew()

choiOrdrePub()

updateNewDisplay()




function greenValiderNew(){
  if(vimgaa==true && vtxt == true){
    $(".boutonnewup").eq(1).css({
      'pointer-events': 'auto',
      'opacity': '1' , 
           }) ;
    
  }
 else {
    $(".boutonnewup").eq(1).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
  }
 
}

function listeNew() {
  var result={};
  $.ajax({
    url:"/new",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}

function greenValiderNewB(){
  if(vimga==true && vimgb == true){
    $(".boutonnewbup").eq(2).css({
      'pointer-events': 'auto',
      'opacity': '1' , 
           }) ;
    
  }
 else {
    $(".boutonnewbup").eq(2).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
  }
 
}

function inputFileChangednew(){
    $("#fileupdatenew").change(function(){
      
     //  alert('somthing')
        uploadImageTemporelnew()
    
        $("#submitnew").click()
      
   
  
    });
  
    
  }
function uploadImageTemporelnew() {
    $("#myFormnew").submit(function (e) {
    
      e.preventDefault();
      var formData = new FormData(this);
      var n =  $("#fileupdatenew").val()
  
      
      var b  =  n.lastIndexOf('\\')
  
      var name = n.substring(b + 1)
    
      $.ajax({
          type: "POST",
          url: "/uploadnew?name="+ name,
          data: formData,
      
        
          processData: false,
          contentType: false,
          success: function(r){

              if( indexi==1){
                  nameia =r
                  vimga = true
                  $("#imgnewb").attr('src', "public/image/temporel/" + r) ;

              }

              if( indexi==2){
                nameib =r
                $("#imgnewdes").attr('src', "public/image/temporel/" + r) ;
       vimgb = true
            }

            if( indexi==3){
             
              nameiaa = r
              $("#imgnew").attr('src', "public/image/temporel/" + r) ;
     vimgaa = true
          }

            greenValiderNewB()
            greenValiderNew()
         //   nameimgb = r
         //      imgb = true 

         //   apercuImageChange()
         //   greenValider()
       
     
   
//    $("#profa").remove()
   
//    $("#li").append(' <img id="profa"  src ="public/image/temporel/' + r + '"/>')
  
          
     

           },
          error: function (e) {
              
          }
      });
  
  });
  
  }
function clickBoutonUpload(){
    $('.boutonnewbup').click(function(){
  
  var i =  $( this).index()
 
  if(i==1){

    
    $('#fileupdatenew').click()
      indexi = 1
  } 
  else if(i==3){

    $('#fileupdatenew').click()
    indexi = 2
  }

  else {
   
    validerChangementNewB()
     
  }

}) ;

}


function clickBoutonUploadNew(){
  $('.boutonnewup').click(function(){

var i =  $( this).index()
if(i==1){

  
  indexi = 3
  $('#fileupdatenew').click()
  
} 

else {
 
  validerChangementNew()
   
}

}) ;

}


function ChangeNewDisplayB(){
  
  $.ajax({
      
    url:"/updatenew?display=" + affichnewb  + "&index=" + 2,
        async: false,  
     success:function(data) {
     
      //   result = data
         

      //   $(".unitepubimage").eq(0).attr("src", "public/image/logo/1.png") ;
         
    
        }
  }); 
}

function updateNewDisplay(){
  var a = New[0].display
  var b = New[1].display
  
  var img = textImgToTabA(New[1].image)

   $("#imgnewb").attr("src", "public/image/acceuil/remerciment/" + img[0]  ) ;
   $("#imgnewdes").attr("src", "public/image/acceuil/remerciment/" + img[1]  ) ;
     
   $("#imgnew").attr("src", "public/image/acceuil/remerciment/" + New[0].image  ) ;
  
   $("#descnew").text(New[0].texta)
   
 
   if(a){
    

    $(".boutonnew").eq(0).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
    $(".boutonnew").eq(1).css({
      'pointer-events': 'auto',
      'opacity': '1' , 
           }) ;

          
  }
  else {
    $(".boutonnew").eq(1).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
    $(".boutonnew").eq(0).css({
      'pointer-events': 'auto',
      'opacity': '1' , 
           }) ;
  }

  if(b){
    $(".boutonnewb").eq(0).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
           $(".boutonnewb").eq(1).css({
            'pointer-events': 'auto',
            'opacity': '1' , 
                 }) ;
  }
  else {
    $(".boutonnewb").eq(1).css({
      'pointer-events': 'none',
      'opacity': '0.5' , 
           }) ;
           $(".boutonnewb").eq(0).css({
            'pointer-events': 'auto',
            'opacity': '1' , 
                 }) ;
  }
}

function textImgToTabA(imgg){

  var tabi = []

  for(var a = 0 ;a < 2 ; a++){
    var b  =  imgg.indexOf(',')

    var im = imgg.substring(0,b )
  
    tabi.push(im)

    imgg = imgg.substring(b + 1 )
  }
   
  return tabi 
}

function ChangeNewDisplay(){
  
  $.ajax({
      
    url:"/updatenew?display=" + affichnew  + "&index=" + 1,
        async: false,  
     success:function(data) {
      //   result = data
         

      //   $(".unitepubimage").eq(0).attr("src", "public/image/logo/1.png") ;
         
    
        }
  }); 
}

function validerChangementNewB(){
  
  $.ajax({
      
    url:"/validerChangementNewB?imga=" +nameia + "&imgb=" + nameib,
        async: false,  
     success:function(data) {
      $(".boutonnewbup").css({
        'display': 'none',
       
             }) ;

             $(".boutonnewb").eq(2).css({
                'pointer-events': 'auto',
                'opacity': '1' , 
                     }) ;

                     $("#imgnewb").css({
                       
                          'box-shadow': '',
                           'border-radius': '',
                             }) ;
                          
                   
                             $("#imgnewdes").css({
                                'box-shadow': '',
                                'border-radius': '',
                             }) ;

                             vimga =  false
                              vimgb =  false

                             greenValiderB()
      //   result = data
         

        $("#imgnewb").attr("src", "public/image/acceuil/remerciment/" + nameia) ;
        $("#imgnewdes").attr("src", "public/image/acceuil/remerciment/" + nameib) ;
        
       
    
        }
  }); 
}


function validerChangementNew(){

  var text = $('#descnewt').val()
  
  $.ajax({
      
    url:"/validerChangementNew?imga=" +nameiaa + "&text=" + text,
        async: false,  
     success:function(data) {
     


      $(".boutonnewup").css({
        'display': 'none',
       
             }) ;

             $(".boutonnew").eq(2).css({
                'pointer-events': 'auto',
                'opacity': '1' , 
                     }) ;


                     $("#descnew").css({
                      'display': 'block',
                      
                           }) ;

                           $("#descnew").text( $('#descnewt').val())
      $('#descnewt').val('')


      $("#descnewt").css({
        'display': 'none',
        
             }) ;
      
      $("#imgnew").css({
        'box-shadow': '',
        'border-radius': '',
     }) ;

      vimgaa =  false
      vtxt =  false

     greenValiderNew()

        }
  }); 
}

function choiOrdrePub(){
  $("#selectcateg").change(function(){
    
  
   $.ajax({
      
    url:"/choipub?choi=" +  $("#selectcateg").val(),
        async: false,  
     success:function(data) {
     
      //   result = data
         

      //   $(".unitepubimage").eq(0).attr("src", "public/image/logo/1.png") ;
         
    
        }
  });
  
  });
}



function clickBoutonNewB(){
    $('.boutonnewb').click(function(){
  
  var i =  $( this).index()

  if(i==0){

    
        $(".boutonnewb").eq(0).css({
            'pointer-events': 'none',
            'opacity': '0.5' , 
                 }) ;
                 $(".boutonnewb").eq(1).css({
                    'pointer-events': 'auto',
                    'opacity': '1' , 
                         }) ;
    
                 affichnewb = true
                 ChangeNewDisplayB()

  } else if(i==1){
     
    $(".boutonnewb").eq(0).css({
        'pointer-events': 'auto',
        'opacity': '1' ,
             }) ;
             $(".boutonnewb").eq(1).css({
                'pointer-events': 'none',
                'opacity': '0.5' , 
                     }) ;
             affichnewb = false
             ChangeNewDisplayB()
  }
 else if(i==2){
  
    $(".boutonnewbup").css({
        'display': 'block',
       
             }) ;

             $(".boutonnewbup").eq(2).css({
                'pointer-events': 'none',
                'opacity': '0.5' , 
                     }) ;

                     $("#imgnewb").css({
                       
                          'box-shadow': '1px 1px 3px #555',
                           'border-radius': '10%',
                             }) ;
                          
                   
                             $("#imgnewdes").css({
                                'box-shadow': '1px 1px 3px #555',
                                'border-radius': '10%',
                             }) ;


  }
      
    });
}

function validerNew(){
 
  
  $('#descnewt').keyup( function () {

    var  passe = $(this).val()

   
      if( passe.length >= 3 &&  passe.length <= 300 ){
        vtxt = true
      
      }
      else {
        vtxt = false
       
      }
      greenValiderNew()
    });


   

  
}



function clickBoutonNew(){
  $('.boutonnew').click(function(){
    
var i =  $( this).index()

if(i==0){

 
      $(".boutonnew").eq(0).css({
          'pointer-events': 'none',
          'opacity': '0.5' , 
               }) ;
               $(".boutonnew").eq(1).css({
                  'pointer-events': 'auto',
                  'opacity': '1' , 
                       }) ;
  
               affichnew = true
               ChangeNewDisplay()
} else if(i==1){
   
  $(".boutonnew").eq(0).css({
      'pointer-events': 'auto',
      'opacity': '1' ,
           }) ;
           $(".boutonnew").eq(1).css({
              'pointer-events': 'none',
              'opacity': '0.5' , 
                   }) ;
           affichnew = false
           ChangeNewDisplay()
}
else if(i==2){

 // var text = $("#descnew").text()

 // $("#descnewt").val(text)

  $(".boutonnewup,#descnewt").css({
      'display': 'block',
     
           }) ;
           $("#descnew").css({
            'display': 'none',
           
                 }) ;
           

           $(".boutonnew").eq(2).css({
              'pointer-events': 'none',
              'opacity': '0.5' , 
                   }) ;

                   $("#imgnew").css({
                     
                        'box-shadow': '1px 1px 3px #555',
                         'border-radius': '10%',
                           }) ;
                        
                 


}
    
  });
}