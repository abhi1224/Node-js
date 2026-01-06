const http = require('http');

const PORT = 3000;


const server = http.createServer((req, res) => {

    if(req.url == '/data' && req.method == 'POST'){
        let body = ''
        req.on('data', (chunk) =>{
            console.log(chunk);            
            body += chunk.toString()
        })
        req.on('end', () => {
            console.log('Received Data : ', body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Data received successfully");
        })
    }
    else if(req.url == '/data'){
        res.writeHead(405, {'Content-Type' : 'text/plain'})
        res.end('Method Not Allowed')
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/plain'})
        res.end('404 page not found')
    }
    

});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
