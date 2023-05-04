const http = require('http'); //'http' module required for creating server so we are accessing 'http' module

const server = http.createServer((req, res) => { //creating server, it takes callback function consists of
  //request which takes request from object to server
  //response will provide response back from the server to object
  console.log('My name is Shreyas');
  res.end(); //if you didnt write this browser will always be loading
});

server.listen(4000); //This line starts the server and listens on port 4000 for incoming requests
//whenever we make an request in the browser to the server(http://localhost:4000)
//name shoud be get printed on the console
//steps here
//after writng code:
//open terminal write node filename.js(server.js as an eg)
//open browser write http://localhost:4000
//comes to terminal where you see your name gets printed
//if you refresh page again in terminal your name will be repeatedly printed
