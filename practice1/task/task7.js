const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/api/time' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            time: new Date().toLocaleTimeString()
        }));
    }

    else if (req.url === '/api/date' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            date: new Date().toLocaleDateString()
        }));
    }

    else if (req.url === '/api/time' || req.url === '/api/date') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
