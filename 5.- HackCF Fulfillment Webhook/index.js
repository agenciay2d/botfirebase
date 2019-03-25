const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//Hola mundo desde el webhook Firebase
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send({
    speech: "Hola mundo desde mi webhook - cambiando desde local"
  });
 });
