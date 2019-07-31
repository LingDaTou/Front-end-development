// 1. 引入自定义模块
/*
let stuff = require("./stuff");
console.log(stuff.counter([1, 2, 3]));
*/


// 2. 引入事件模块events
/*
var events = require("events");

let myEmitter = new events.EventEmitter();

myEmitter.on("myEvent",function (data) {
    // 使异步执行
    setImmediate(function () {
        console.log(data);
    })
})
myEmitter.emit("myEvent","传递到回调函数中的值");
*/

// 3. 文件系统
/*3.1 读取和写入
var fs = require("fs");

// 同步读取
let read1 = fs.readFileSync("readFile.txt","utf8");
console.log(read1);

// 同步写入
// fs.writeFileSync("write1.txt","这是写入的内容");

// 异步读取
fs.readFile("readFile.txt","utf8",function (err, data) {
    if(err) throw err;
    console.log(data);
    // 异步写入
    fs.writeFile("write2.txt",data,function (err) {
        if(err) throw err;
    });
})
*/

// var fs = require("fs");

// 删除文件
// fs.unlink("write1.txt",function (err) {
//     if(err) throw  err;
// })

// 同步创建文件夹
// fs.mkdirSync("stuff");
// 同步删除文件夹
// fs.rmdirSync("stuff");


// 异步创建文件夹
// fs.mkdir("stuff",function (err) {
//     if(err) throw  err;
//     fs.readFile("write2.txt","utf8",function (err,data) {
//         if(err) throw  err;
//         fs.writeFile("./stuff/write.txt",data,function (err) {
//             if(err) throw err;
//         })
//     })
// })

// 异步删除文件夹
// fs.unlink("./stuff/write.txt",function (err) {
//     if(err) throw  err;
//     fs.rmdir("stuff",function (err) {
//         if(err) throw err;
//     })
// })

// 创建服务器
// var http = require("http");
//
// var server  = http.createServer(function (request, response) {
//     console.log("客户端向服务端发送请求"+request.url);
//     // 服务端返回数据
//     response.writeHead(200,{"Content-type":"text/plain","Charset":"UTF-8"});
//     // response.end("server is working");
//     response.end("服务器已经运行");
// })
//
// server.listen(8888,"127.0.0.1");
// console.log("server in running.....");


// 读取数据流
var fs = require("fs");

// let readStream = fs.createReadStream(__dirname+"/write2.txt","utf8");
// // 写入数据流
// let writeStream = fs.createWriteStream(__dirname+"/write3.txt");
//
// // pipe()方法
// // readStream.pipe(writeStream);
//
// // 读取到数据
// readStream.on("data",function (chunk) {
//     console.log(chunk);
//     // writeStream.write(chunk);
// })

// 写入到html上
var http = require("http");
var server = http.createServer(function (request, response) {
    if(request.url !== '/favicon.ico'){
        if(request.url === "/"){
            response.writeHead(200,{"Content-type":"text/html"});
            // response.writeHead(200,{"Content-type":"application/json"});
            fs.createReadStream(__dirname+"/index.html","utf8").pipe(response);
        }
        else if(request.url ==="/contact"){
            response.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname+"/contact.html").pipe(response);
        }
    }
})

server.listen(8888,"127.0.0.1");
console.log("server is running...");




