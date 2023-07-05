const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    const filepath ='index.html';
    
    if(req.url == '/Home'){
        fs.readFile(filepath,'utf8',(err,data)=>{
            if(err){
                console.log(err);
                res.writeHead(500,{'Content-Type':'text/html'});
                res.end('intrer server error');
                return;
            }
           
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                const modifiedco = data.replace('name','sonu');
                res.end(modifiedco);
            }
        })
    }
    else if(req.url == '/submit'){
        res.end('data sumite')

    }
})
server.listen(4000,()=>{
    console.log('server open')
})
