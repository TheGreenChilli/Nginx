const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((req, res) => {
  path.join(__dirname, req.url === '/' ? "index.html" : "req.url")

  string(path.extname(filePath)).tolowerCase()

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'text/png'
  }
 
  mimeTypes[extName] || 'application/octate-stream'

}); 

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});