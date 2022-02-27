var mysql = require('mysql');

 var connection= mysql.createConnection({
   host:'sql11.freemysqlhosting.net',
   user:'sql11475624',
   password:'Xs2tPimLAf',
  
   database:'sql11475624'
 });
 
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!: to ecomerce)');
   }
 });  
module.exports = connection; 


