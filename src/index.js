'use strict';

let express = require('express');
let app = express();
let port = 3000;

let util = require('util');
let path = require('path');
let fs = require('fs');

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let filePath=path.resolve('server/db/contactlisting.json'); 

async function readContacts(){
  let json= await readFile(filePath);
  return JSON.parse(json)
}

async function writeContacts(contactlisting){
  let json=JSON.stringify(contactlisting); 
  await writeContacts(filePath, json);
}

app.post('/generalenquiryform', function(request,response){

  response.status(200).send('Form submitted');
}
);

app.post ('/User' , function (request, response) {

  response.status(201).send ('User Created');
}
);

app.post('/Session' , function (request,response) {

  response.status(200).send ('New Session created!');
}
);
app.get('/ContactListing' , function (request, response) {
  
  response.status(200).send('contacts')
}
);
app.use(function (error, request, response, next) {
  console.error(error.stack)
  response.status(500).send('Oh No! Something broke! ')
})

function handleServerListen() {
    console.log(`Server is listening on port ${port}`);
  }
  app.listen(port, handleServerListen);
