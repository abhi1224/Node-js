const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome');
    }

    else if (req.url === '/login' && req.method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Login Successfully');
    }

    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }

});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
