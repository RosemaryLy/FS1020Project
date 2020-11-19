# FS1020Project

## Objective
For this course project,the objective was to build a backend application consisting of a RESTful JSON API for a contact us form  All persistent data is to be stored in a simple JSON file that’s operated on through Node’s fs module.

User should be able to login in order to use the API and users must be able to register and login via the JSON API as well. 
Authetication is nice to have feature but was not a must for this particular project. 

### Route Breakdown

* Route to create an entry when the user submits their form.
* Route to create or register a user.
* Route to log a registered user in to create a session.
* Route to get a listing of all submissions.


### Required Fields
These fields represent fields that will be submitted in the form. They will be represented in the JSON as object propreties. They must be validated against the server else respond with an appropriate HTTP status code and does not write the entry to the JSON file (the database).

* Name
* Email
* Phone number

### Bonus
Respond with templated HTML for the listing of all submissions.


## Resources
- [Contact Form Examples](https://www.jotform.com/form-templates/category/contact-form)
- [Default error handler](https://expressjs.com/en/guide/error-handling.html#the-default-error-handler)
- [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

#### ExpressJS
- [Official Documentation](https://expressjs.com/)
- [Official Tutorial](https://expressjs.com/en/starter/installing.html)
- [ExpressJS Crash Course](https://www.youtube.com/watch?time_continue=1441&v=L72fhGm1tfE)

#### Modules
- [**The Modern JavaScript Tutorial:** Modules](https://javascript.info/modules)
- [**Eloquent JavaScript:** Modules](https://eloquentjavascript.net/10_modules.html)
- [CJS Modules we're using in class](https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

#### Asyncronous Programming
- [**The Modern JavaScript Tutorial:** async (promises)](https://javascript.info/async)
- [**Eloquent JavaScript: async**](https://eloquentjavascript.net/11_async.html)
- [JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)

