const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;
const home=fs.readFileSync('index.html');
const features=fs.readFileSync('Features.html');
const about=fs.readFileSync('About.html');
const signUpLogin=fs.readFileSync('signUpAndLogin.html');

const server=http.createServer((req,res)=>{
  console.log(req.url);
  res.setHeader('Content-Type','text/html');
  res.end(home);
  if(url == 'Features.html')
  {
    res.end(features);
  }
  

});

server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});

