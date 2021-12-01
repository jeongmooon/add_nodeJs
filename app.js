const http =require('http');
const express =require("express");
const app = express();

app.get('/', (req, res) =>{
    res.end("<h1>Hello node.js server</h1>");
})

const server = http.createServer(app);
server.listen(4000, () =>{
    console.log("서버 실행 중 : http://localhost:3000")
})
