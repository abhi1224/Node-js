const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log(`Requested URL: ${req.url}`);
    console.log(`Requested Method: ${req.method}`);

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello from home page');
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello from about page');
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Page does not exist');
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
