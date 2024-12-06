# REST-FULL-API
A RESTful API (Representational State Transfer API) is an architectural style for designing networked applications. It uses HTTP requests to access and manipulate data. RESTful APIs are stateless, scalable, and flexible, allowing for easy integration between different systems.


USE COMMAND FOR NODE MODULE :

1.install node js from https://nodejs.org/ 

2.Run the file using the node command:
  node app.js.


3.Run a Simple HTTP Server:
  Write the following code in a file, e.g., server.js

  const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

4. Run the file:
 node server.js

5. Install Packages:
6. Use the Node.js package manager (NPM) to install external libraries. For example, to install express:
7. npm install express



  
