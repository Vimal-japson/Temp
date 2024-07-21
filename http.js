const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to our webpage");
    }
    if(req.url === "/about"){
        res.end("This is Our about page");
    }
    res.end(
        `<h1>Opps</h1>
        <p>Error 404</p>
        <a href="/">Back Home</a>`
    )
});

server.listen(5000);