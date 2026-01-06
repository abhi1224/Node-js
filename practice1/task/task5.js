const http = require('http');

const PORT = 3000;

const data = {
    name: 'Abhishek',
    course: 'MCA',
    college: 'KNIT'
};

const server = http.createServer((req, res) => {

    if (req.url === '/api/user' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }

    else if (req.url === '/api/user') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route Not Found');
    }

});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
