//This is a node module, this is a core module so we dont need npm
const http = require("http");

//This is the file sharing module
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

//This reads a file, if there is an err, throw the error, otherwise run the file
fs.readFile("src/blob.html", (err, html) => {
  if (err) {
    throw err;
  } else {
    const server = http.createServer((req, res) => {
      //This code says everything is okay
      res.statusCode = 200;

      //This sets the content type in the header
      res.setHeader("Content-type", "text/html");

      //Reads the html file that has been given
      res.write(html);
      res.end();
    });

    //Tells the console log what to do
    server.listen(port, hostname, () => {
      console.log("Server Started on Port " + port);
    });
  }
});
