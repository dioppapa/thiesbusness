
var programme = listeTousProgramme()
createViewProgramme()

function createViewProgramme(){

   $('#tableprogr').html('')

  var head  = ' <tr>  <th class="th"> </th> <th class="th" th>activite un </th> <th class="th" >activite deux </th> <th class="th">activite trois </th> <th class="th">activite quatre </th> <th class="th">activite cinq </th></tr>'
 

  $('#tableprogr').append(head)
  
  var object =  '<tr><td  class="tda"> objet </td> <td class="tdb"> ' + programme[0].objet +'</td> <td class="tdb"> ' + programme[1].objet +' </td> <td class="tdb"> ' + programme[2].objet +' </td> <td class="tdb"> ' + programme[3].objet +' </td> <td class="tdb"> ' + programme[4].objet +' </td></tr>'

  var date = '<tr><td class="tda"> date </td> <td class="td"> ' + programme[0].etdate +' </td> <td class="td"> ' + programme[1].etdate +' </td> <td class="td"> ' + programme[2].etdate +' </td> <td class="td"> ' + programme[3].etdate +' </td> <td class="td"> ' + programme[4].etdate +' </td></tr>'
  
  var lieu = '<tr><td class="tda"> lieu </td> <td class="td"> ' + programme[0].lieu +'  </td> <td class="td"> ' + programme[1].lieu +'  </td> <td class="td"> ' + programme[2].lieu +' </td> <td class="td"> ' + programme[3].lieu +' </td> <td class="td"> ' + programme[4].lieu +'  </td></tr>'
  
  var objectif = '<tr><td class="tda"> objectif </td> <td class="td">' + programme[0].objectif +'  </td> <td class="td">  ' + programme[1].objectif +' </td> <td class="td"> ' + programme[2].objectif +' </td> <td class="td"> ' + programme[3].objectif +' </td> <td class="td"> ' + programme[4].objectif +' </td></tr>'
  
  var avantag = '<tr><td class="tda"> avantage </td> <td class="td"> ' + programme[0].avantage +'  </td> <td class="td"> ' + programme[1].avantage +' </td> <td class="td"> ' + programme[2].avantage +' </td> <td class="td"> ' + programme[3].avantage +' </td> <td class="td"> ' + programme[4].avantage +'</td></tr>'
  var rem = '<tr> <td class="tda"> remerciment </td> <td class="td"> ' + programme[0].remerciment +'   </td> <td class="td"> ' + programme[1].remerciment +' </td> <td class="td"> ' + programme[2].remerciment +' </td> <td class="td"> ' + programme[3].remerciment +' </td> <td class="td"> ' + programme[4].remerciment +' </td></tr>'
 
  $('#tableprogr').append(object)
  $('#tableprogr').append(date)
  $('#tableprogr').append(lieu)
  $('#tableprogr').append(objectif)
  $('#tableprogr').append(avantag)
  $('#tableprogr').append(rem)
  
 // for( var a = 0 ; a < programme.length ; a++){
 //var tr = '<tr><td  class="tda"> object </td> <td class="tdb"> reboisement</td> <td class="tdb"> nettoiement </td> <td class="tdb"> dont de sang </td> <td class="tdb"> sensiblisation </td> <td class="tdb"> recolte de fond </td></tr>'
 //$('#tableprogr').append(tr)
  
  //}
}


function listeTousProgramme() {
    var result={};
    $.ajax({
      url:"/programme",
      async: false,  
      success:function(data) {
         result = data; 
      }
   });
   return result;
  }