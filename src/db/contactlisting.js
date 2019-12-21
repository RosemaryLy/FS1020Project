'use strict';

let util = require('util');
let fs = require('fs');
let path = require('path');

// Create versions of `fs` methods we'll be using to return promises
let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

// Declare where the DB path is relative from where our `package.json` is
let contactlisting=path.resolve('src/db/contactlisting.json'); 

/**
 *
 */

 // 
 async function readContacts(){
    let json= await readFile(contactlisting);
    return JSON.parse(json)
  }


  async function writeContacts(contactlisting){
    let json=JSON.stringify(contactlisting, null, 2); 
    await writeFile(contactlisting, json);
  }



/**
 *
 */
async function addItem(newInfo) {
  let addItem=await readContacts();
  addItem.push(newInfo)
  await writeFile(addItem);
}

module.exports = {
  read: contactlisting,
  addItem: addItem,
}
