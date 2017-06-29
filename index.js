var express = require('express');
var app = express();

var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'usuario',  
  password : 'password',  
  database : 'midb'    
});        

app.get('/json', function (req, res) {
  connection.connect();  

  connection.query('SELECT * FROM postres', function(err, rows, fields)   
  {  
      connection.end();

      if (err) throw err;  

      res.json(rows); 

  });
});

app.listen(3000, function () {
  console.log('Puerto 3000!');
});
