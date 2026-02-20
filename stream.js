const http = require("http");


async function* logGenerator(){
    let time = new Date().toISOString();
    while(true){
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield `Log entry at ${time}`;
    }
}

http.createServer(async (req, res) => {
    if(req.url == "/logs"){
        res.writeHead(200, {
            'content-type': 'text/plain',
            'transfer-encoding': 'chunked'
        });

        req.on("close", ()=> {
            logs.return()
            console.log("client closed connection");
        })
        const logs = logGenerator();
        for await(const log of logs){
            res.write(log + "\n");
        }
    }else{
        res.writeHead(404, {'message': 'route not found'})
    }
}).listen(3000);
console.log("Server running on localhost:3000");
