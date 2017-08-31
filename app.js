
var http = require('http'),
    fs = require('fs');

const server = http.createServer ((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        });

    } else {
        res.writeHead(404, {'Content-Type': 'image/png'});
        fs.readFile('./error.png', (err, data) =>{
            res.write(data);
            res.end();
        });
    }
}).listen(8080);
