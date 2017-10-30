const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  console.log(url);

  if (url === '/translations') {
    const translations = { 1: 'one', 2: 'two', 3: 'three' };

    res.setHeader('Content-Type', 'application/json');

    res.write(JSON.stringify(translations));

    res.end();
  }

  res.end('Welcome to Node!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});