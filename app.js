var  express = require('express') ;
var app = express() ;
const session = require("express-session");


var todoCont = require('./routes/controller') ;

var port = process.env.PORT || 8080;

app.set('view engine' , 'ejs') ;
app.use('/public' , express.static('public')) ;
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  
  })
);


todoCont(app);
app.get('/deconnection' , function ( req , res) {
       
 
req.session.destroy(function(){

  res.send ('destroy')
  
      
   });
  
  


});

app.get('/cnt' , function ( req , res) {

  var us = {}
  var data = {}

    us.name = req.query.name
    us.prenom = req.query.prenom
    us.id = req.query.id
    us.image = req.query.image

  
  req.session.isAuth = true
 // req.session.admi = false

  req.session.user  = us;
  
  
  data.connected = true
  data.user = us

  console.log(data.user)
 
  res.send(data)
    

});


app.get('/testconnection' , function ( req , res) {

  var data = {}
  
  if( req.session.isAuth == true){

    data.connected = true
    data.user = req.session.user
  }
  else {
    data.connected = false
    data.user = req.session.user
  }
     
       
  res.send(data)
    

});




app.get('/' , function ( req , res) {
   
  res.render( "thies")
 
});

app.get('/resp' , function ( req , res) {
   
  res.render( "resp")
 
});
app.get('/admi' , function ( req , res) {

  if(req.session.isAuth == true && req.session.admi == true){
    res.render('admi' ); 
    console.log('session admi '+ req.session.admi)
  }
  else
  
  res.render('login' ); 
         
    


});
 
app.get('/test' , function ( req , res) {

    res.render('test' ); 
 


});

 

 

 
app.post('/admi' , function ( req , res) {
 
  
  var admi = req.query.admi

  var passe = req.query.passe

  console.log(admi,passe)

 if (/admi/.test(admi) &&  /passe/.test(passe)){
    
   req.session.isAuth = true
    req.session.admi = true


    console.log('administrateur connected ')

    res.render('admi')
 
  // res.send(req.session.admi)

  }
  
  else{
    req.session.admi = false

    res.render('login')
  }
 
});










app.listen(port, function(){
  console.log("Listening on port : " + port); //it work
});

