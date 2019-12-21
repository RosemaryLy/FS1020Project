'use strict';

let express = require('express');
let app = express();
let port = 3000;
let router = express.Router();

let util = require('util');
let path = require('path');
let fs = require('fs');

// Apply middleware//
app.use(express.json()); // Allows us to read JSON sent in `req.body`//

app.use(router); // Apply our router as middleware


//Applicable coding for reading and writing to JSON //

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let contactlistingpath = path.resolve('src/db/contactlisting.json');

async function readContacts() {
  let filecontents = await readFile(contactlistingpath)
  let allContactInfo = JSON.parse(filecontents)
  return allContactInfo;
}


async function writeContacts(contactlisting) {
  let json = JSON.stringify(contactlisting, null, 2);
  await writeFile(contactlistingpath, json);
}

async function addItem(newInfo) {
  let allContactInfo = await readContacts();
  allContactInfo.push(newInfo)
  await writeContacts(allContactInfo);
}

//Tells User what fields are required... will add templating to make it prettier in next update(next course)//

function validateContactInfo(request, response, next) {
  // If we get an invalid  in `req.body` we want to respond with a 400 status code
  let dbItems = request.body;
  if (!dbItems.name) {
    response.status(400).send('"name" is a required field');
  } else if (!dbItems.email) {
    response.status(400).send('"email" is a required field');
  } else if (!dbItems.phonenumber) {
    response.status(400).send('"phonenumber" is a required field')
  } else {
    next();
  }
}


//Route to create an entry when the user submits their form.//

app.post('/generalenquiryform', validateContactInfo, async function (request, response, next) {
  await addItem(request.body)
  response.status(201).send('Form Submitted');
  next();
}
);

//Route to create or register a user.//
app.post('/User', validateContactInfo, async function (request, response, next) {
  await addItem(request.body)
  response.status(201).send('User Profile created')
  next();
}
);

//Route to log a registered user in to create a session.//

app.post('/Session', validateContactInfo, function (request, response) {

  response.status(200).send('New Session created!');
}
);

//Route to get a listing of all submissions.//

app.get('/ContactListing', async function (request, response) {
  response.status(200).json(await readContacts());
});

//default error handler// 
app.use(function (error, request, response, next) {
  console.error(error.stack)
  response.status(500).send('Oh No! Something broke! ')
})

function handleServerListen() {
  console.log(`Server is listening on port ${port}`);
}
app.listen(port, handleServerListen);
