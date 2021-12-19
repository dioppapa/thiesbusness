function clickSerch() {
    
    $('#lserch, #imgserch').click(function(i){
    
        showInputSerch()
          
      });
   }
  
   function showInputSerch() {
    $("#serchacceuil").css({
        'display': 'block',
        
       
        }) ; 
  
    $("#lserch").css({
        'display': 'none',
        
       
        }) ; 
        
  
        $('#serchacceuil')
  .css('width', '0px')
  
  .animate({
  width : (30*X)/100 
  
  },{
  duration : 1500
  , queue : true  // ici peu importe sa valeur
  , complete : function(){
    
  }
  });
   }
  
  
  
  
  
  
   
  function animeSerch() {
         
    var refre =   setInterval( function() {
        writeSerch()
         }, 500);
    
         
   
   }
  
  
   function writeSerch() {
       text = text + tt.charAt(ic)
    $("#lserch").text( text)
  
    if( ic >= tl - 1){
      ic  = 0
      text = ''
    }
      else
      ic = ic + 1
  
   }
  
   
  
  
        
  
  