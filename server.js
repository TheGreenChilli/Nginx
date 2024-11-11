const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  path.join(__dirname, req.url === '/' ? "index.html" : "req.url")

  const extName = string(path.extname(filePath)).tolowerCase()

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'text/png',
  }
 
 const contentType = mimeTypes[extName] || 'application/octate-stream'
 
 fs.readFile(filePath, (err, content) => {
  if(err) {
    if(err.code == "ENOENT"){
      res.writeHead
      (404, {'Content-Type': 'text/plain'});
      res.end("400: File Not Found");
    }

  } else {
    res.writeHead(200, {"content-Type": contentType});
    res.end(content, "utf-8");

  }
 });
}); 

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});