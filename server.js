import http from 'http';

const PORT = process.env.PORT;
const server  = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 404;

    res.writeHead(200, {'content-type': 'text/html'});
    // res.end(JSON.stringify(({message: 'Server Error'})))
    res.end('<h1>Hello Server</h1>')
    // res.end('Hello World!');
        // res.setHeader('Content-Type', 'text/plain')

})

server.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})