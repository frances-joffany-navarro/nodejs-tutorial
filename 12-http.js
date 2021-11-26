const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Homepage')
  }
  else if (req.url === '/about') {
    res.end('Here is a short history')
  }
  else { res.end('404') }

})

server.listen(5000)