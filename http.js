const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if (req.url === '/about') {
        res.write('about')
        res.end()
    }
});

// server.on('connection', (socket) => {
//     console.log("Connecting...");
// })

server.listen(3000);
console.log('Listening on port 3000')