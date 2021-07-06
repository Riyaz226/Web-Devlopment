const http = require('http');   // http module require - new instance 
 
const hostname = '127.0.0.1';  // hostname - localhost domain
const port = 3000;  // port number 

const server = http.createServer((req, res) => { //createServer method takes 2 params (req,res)
  res.statusCode = 200; // return success response so that client indicate (200)
  res.setHeader('Content-Type', 'text/plain'); // content type that your server is going to return
  res.end(S.Mohamed); //end the server and pass data 
});


// make the server listen in a particular port 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});






