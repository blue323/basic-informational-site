const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'public/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'public/about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'public/contact-me.html';
            res.statusCode = 200;
            break;
        default :
            path += 'public/404.html';
            res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }

        res.end(data)
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})
