
 
  var  curIdeeIndex = 0 ;
 
  var curIdeeId = idee[curIdeeIndex].id
 
  
  var li =  idee.length ;
 
 
  
   
   
  
//  cleackTableLineprogr()
  
  //updateDetailpr(projet[0])
  
  
  //validerannulerSupCli()
  visionIdee()
  clickHoverIdee()
  function clickHoverIdee(){
    $('#nota,#notaa').hover(function(){
        var i = $(this).index()
      
        $("#nota,#notaa").eq(i).css({
            'box-shadow': '1px 1px 3px #555 inset',
          }) ;

    
        },function(){
            $("#nota,#nota").css({
                'box-shadow': '1px 1px 3px #555',
               }) ;
            
      });

      $('#nota,#notaa').click(function(){
        createTableIdee(li)
        cleackTableLineidee()
        boutonControlidee()
        $("#notaa").text('')
        visionIdeeCheck()
        $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercupr").css({
            'display': 'none',
        }) ;
        $(".classflech").css({
            'display': 'none',
      }) ;
          $(".classflech").eq(3).css({
            'display': 'block',
      }) ;
        
      $(".partimenu").css({
        'display': 'none',
    }) ;
      $(".partimenu").eq(3).css({
        'display': 'block',
    }) ;
    
    });
  }
function visionIdee(){
    $.ajax( {
      type: 'GET',
   url: '/vision',
   success: function(data){
     var v = data.length
     if(v==0)
    $('#notaa').text('')
    else
    $('#notaa').text(v)
    }  
  
   });
  
  }

  function visionIdeeCheck(){
    $.ajax( {
      type: 'GET',
   url: '/visioncheck',
   success: function(data){
     
    
    }  
  
   });
  
  }

 
  function updateDetailpr(data) {
  
   
     var tabimg = textImgToTab( data.image)
     
     $('#spantitle').text(data.typep)
     $('.proimgadmi').eq(0).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[0]);
     $('.proimgadmi').eq(1).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[1]);
     $('.proimgadmi').eq(2).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[2]);
     $('.proimgadmi').eq(3).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[3]);
     $('.proimgadmi').eq(4).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[4]);
    
     
  
  }
  
  
 
    function publicationToid( produit , i){
     var data = []
    
       for( var a = 0 ; a < produit.length ; a++){
   if(produit[a].idc==i)
         data.push(produit[a])
       }
      
       return data ;
   
   }
  
  function chercherpro() {
 
    
      $('#idinputsercha').off()
      $('#idinputsercha').keyup(function(event){
  
        var a = $(this).val()
        chercherProjet( a)
         
     
      });
    
 
  }
 
  function curClientReturn(){
 
    return curClientid ;
  }
 
  function autocomplpro(data , chart){
    $('#serchtableapercu').html('')
    for( var a = 0 ; a < data.length ; a++){
     var t = data[a].description
 
     var i = t.indexOf(chart)
     var av = t.substring(i-22,i)
     var ap = t.substring(i,i + 22)
     
         var tx = av + ap
 
    var type = '<span class="spant"> nature  :</span>  <span class="spanv">'   + textToSpan( data[a].typep, chart) +' </span>  </br>'
    var descrip = '<span class="spant"> description  :</span>  <span class="spanv">'   + textToSpan( tx , chart) +' </span>  </br>'
    var datelieu = '<span class="spant"> date et lieu  :</span>  <span class="spanv">'   + textToSpan( data[a].dateetlieu, chart) +' </span>  </br>'
 
   
    $('#serchtableapercu').append('<div class="divserchpro">' + type + descrip + datelieu + ' </div>' );
   
    }
  }
  function cssDivAutoComplpro() {
    $(".divserchpro").css({
      'border-bottom': '1px solid blue' ,
      'padding-left':'15px',
      'cursor':'pointer',
 
      'background-image': 'linear-gradient(#c6ffec,white)',
      
         
    }) ;
    $("#serchtableapercu").css({
      'display': 'block',
      'padding-top':'50px',
      }) ;
      $(".spant").css({
        'font-size': '8px',
        'font-style': 'normal',
        
        
      }) ;
      $(".spantv").css({
        'font-size': '9px',
        'font-style': 'normal',
        
        
      }) ;
 
      $(".spanv").css({
        'font-size': '10px',
        'font-style': 'italic',
        'font-weight': 'bold',
        'padding-left':'15px',
        
      }) ;
      $(".spanvv").css({
                
        'font-size': '11px',
        'font-style': 'italic',
        'font-weight': 'bold',
        'padding-left':'45px',
       
        
      }) ;
      $(".spanvc").css({
                
        'font-size': '12px',
        'font-style': 'italic',
        'font-weight': 'bold',
        'padding-left':'2px',
        'padding-right':'5px',
       
        
      }) ;
      $(".mark").css({
           'color':'blue',
       
       }) ;
     
       $('.divserchpro').hover(function(){
            
        var a = $(this).index()
        $(".divserch").eq(a).css({
        
          'background-image': 'linear-gradient(#87cefa,white)',
      
             
        }) ;
 
        },function(){
          
          $(".divserchpro").css({
        
            'background-image': 'linear-gradient(#c6ffec,white)',
            
               
          }) ;
      });
      
    
  }
 
  function textToSpan( text , chart) {
    var result
   
      result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
     
     
     return result
    
  
   }
  
   function updateCssTableFromserchpro( id , table) {
      
    var a = idToindex( id , table) + 1
    curProjetIndex = a
    curenntcsstab( curProjetIndex)
        
  }
 
  
  
  function idToindex( id , table) {
  
    var index = 0 ;
  
    for( var a = 0 ; a < table.length ; a++){
      if( table[a].id == id)
      index = a 
  
  }
      
     return index - 1;
   
    
  }
 
  
  function supprimerClient() {
  
  
    $.ajax( {
                   
      type: 'GET',
      url: '/supprimerUnClient?client=' + curClientid,
      success: function(data){
        var index  = idToindex( curClientid , tableDonne)
  
        tableDonne.splice(index, 1)
        
        $('table .tableline').eq(index + 1).remove()
        curClientindex = 0
 
       
      }  
         
  });
  
  }
  
  
 
  
   function divSearchClickpro(data) {
 
    $(".divserchpro").click(function(){
      curProjetId = data[$(this).index()].id
  
     
    updateDetailpr( data[ $(this).index() ])
    $("#serchtableapercu").css({
      'display': 'none', 
     
      }) ;
      updateCssTableFromserchpro(curProjetId , projet)
      $('#idinputsercha').val('')
 
    });
   
   }
  
   
 
  
  
  function chercherProjet( a) {
    $.ajax( {
                 
      type: 'GET',
      url: '/chercherpro?p=' + a,
      success: function(data){
         autocomplpro(data,a)
         cssDivAutoComplpro()
       divSearchClickpro(data)
      }  
         
  });
  }
  
  
 
  function boutonControlidee() {
    $(document).off()
    $(document).keyup(function(event){
  
      
  
      var keycode = (event.keycode ? event.keycode:event.which) 
    
     if(keycode=='38'){
      if( curIdeeIndex <=0)
      curIdeeIndex = 0 ;
      else
      curIdeeIndex --
    
     
      curenntcsstabi( curIdeeIndex)
  
    // updateDetailpr(projet[ curProjetIndex])
     curIdeeId = idee[curIdeeIndex].id
  
        
       }
      else if (keycode=='40'){
        if(curIdeeIndex>= li-1)
        curIdeeIndex=  li -1
          else
          curIdeeIndex ++
          
          curenntcsstabi( curIdeeIndex)
        
      //  updateDetailpr(programme[ curProgrammeIndex])
        curIdeeId = idee[curIdeeIndex].id
    
    
    }
    
     });
    
    
  }
 
  function validerannulerSupCli(){
   $('#inputvalidersup').click(function(){
   alert('suppression indefini')
 
   $(".pub").css({
     'display': 'block', 
    
     }) ;
     $("#divalidersup").css({
       'display': 'none', 
      
       }) ;
 });
   $('#inputannulersup').click(function(){
     $(".pub").css({
       'display': 'block', 
      
       }) ;
       $("#divalidersup").css({
         'display': 'none', 
        
         }) ;
   });
   
  }
  
  function cleackTableLineidee() {
  
    $('.tablelinei').click(function(){
 
      
   
      curIdeeIndex = $(this).index() - 1
      
      curIdeeId = idee[curIdeeIndex].id
 
      
 
   //updateDetailpr(projet[curProjetIndex])
   curenntcsstabi( curIdeeIndex)
   
  
 });
 
    
  }
 
 
 
 
 function tableDonneInitial() {
  var result={};
  $.ajax({
    url:"/client",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
 }
 
 
 function curenntcsstabi(i) {
 
   $(".tablelinei").css({
       'background-image': '',
       'cursor':'pointer'
   }) ;
 
   $(".tablelinei").eq(i).css({
                   
       
           
       'background-image': 'linear-gradient(#87cefa,white)',
       'cursor':'pointer'
   }) ;
 
       cssDivClient()
    
           }         
 
 function createTableIdee(li) {
 
       
   $('.partimenu').eq(3).html('')
   $('.partimenu').eq(3).html('<label id="ideelabel"> tableau des idées et suggestions </label>')
   $('.partimenu').eq(3).append('<table id="tabidee"></table>')
   $('#tabidee').append('<tr> <th>id</th> <th> client</th>  <th> text </th>    <th> date  </th>    </tr>')
  
 
  for( var a = 0 ; a < li ; a++){
    
    $('#tabidee').append('<tr class="tablelinei"> <td> ' + (a+1)+ ' </td> <td> ' + idee[a].idc+ ' </td>     <td> ' + idee[a].texta+ ' </td>          <td> ' + idee[a].datep + ' </td>    </tr>' );
     
  
 }   
  
 
 curenntcsstabi(0)
 
 }  
 
 
 