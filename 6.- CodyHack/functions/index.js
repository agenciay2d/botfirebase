const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//Funcion por default
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.confirm = functions.https.onRequest((request, response) => {
   let params = request.body.result.parameters;
   response.send({
     speech:
     `${params.name} tu registro para un equipo de ${params.hacker} con ${params.number} personas, que ${params.time} han ido a un hack se ha realizado con exito,
     te enviare tus boletos al correo ${params.email} de inmediato.
     `
   });
 });
