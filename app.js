var  express = require('express') ;
var app = express() ;
var port = process.env.PORT || 8080;


app.set('view engine' , 'ejs') ;
app.use('/public' , express.static('public')) ;


app.get('/' , function ( req , res) {
   
  res.render( "thies")
 
});







    app.listen(port, function(){
        console.log("Listening on port : " + port); //it work
    });
