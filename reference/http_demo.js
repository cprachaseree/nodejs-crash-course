const http = require('http');

// create server object
http.createServer((req, res) => {
  // write response
  res.write("Hello World");
  res.end();
}).listen(5000, () => {
  console.log("Server port 5000 is running.");
});
