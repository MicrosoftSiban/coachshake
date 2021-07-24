var mysql = require("mysql");
var configuration = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bebcf346c77b24',
  password: 'fdfb288b',
  database: 'heroku_2113f3ce5ec2950'
};

var connection = mysql.createConnection(configuration);

connection.connect(function(error) {
  if(error) {
    return console.error('error: ' + error.message);
  }

  console.log('Connected to the MySQL serer.');
});

var query = "select * from menu";
var file = { 
  'name': 'message.json',
  'system': require('fs') 
};

connection.query(query, function(error, results, fields) {
  if(error) {
    console.log(error.message);
  }

  file.system.writeFile(file.name, JSON.stringify(results), function(error) {
    if(error) throw error;
    console.log('It saved!');
  });
});

file.system.readFile(file.name, function(error, data) {
  if(error) throw error;
  console.log(JSON.parse(data)[0]);
});

connection.end();