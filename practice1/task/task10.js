const http = require('http');

const server = http.createServer((req, res) => {

    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);

    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from server");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
