const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);


    if(req.url === "/"){
       fs.readFile("index.html","utf8",(err,data)=>{
         

        if(err){
          res.writeHead(500,{ 'Content-Type': 'text/plain' });
          res.end("internal server Error");
          return;
        }
        res.writeHead(500,{ 'Content-Type': 'text/html' });
        res.end(data);
       })
    }
    else if(req.url === "/submit"){
        let body = "";
        req.on("data",chunk=>{
          console.log(chunk.toString());
          body = chunk.toString();
        })
        //console.log(body);
        req.on("end",()=>{
          const formData = querystring.parse(body);
          console.log(formData);
           let Name = formData.name;
           let Email = formData.email;

           console.log(Name,Email);
          
        })


        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("submit");
    }