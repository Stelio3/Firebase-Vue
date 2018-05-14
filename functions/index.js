const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!!");
 });

exports.addMessage = functions.https.onRequest((req, res) => {
  const var1 = req.query.var1;
  const var2 = req.query.var2;

  return admin.firestore().collection('messages').add({titulo: var1, cuerpo: var2}).then((writeResult) => {
    return res.json({result: `Messages with ID: ${writeResult.id} added.`});
  });
});
