const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";

const port = 3000;



const server = http.createServer((req, res)=>{

if(req.url == '/inicio'){

    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

    }) 
}else{
    return res.end();
}

})

server.listen(port, hostname,()=>{
    console.log("O server está rodando");
})