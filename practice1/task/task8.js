const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    const url = req.url

    switch (url) {
        case '/success':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Success')
            break

        case '/notfound':
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('404 Page Not Found')
            break

        case '/error':
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Internal Server Error')
            break

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Route Not Found')
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
