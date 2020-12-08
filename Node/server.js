var http = require('http');
var os = require("os");

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
    // // CPU 的字节序
    // response.end('endianness : \n' + os.endianness());
    // // 操作系统名
    // response.end('type : \n' + os.type());
    // // 操作系统名
    // response.end('platform : \n' + os.platform());
    // // 系统内存总量
    // response.end('total memory : \n' + os.totalmem() + " bytes.");
    // // 操作系统空闲内存量
    // response.end('free memory : \n' + os.freemem() + " bytes.");
}).listen(8888);




// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

console.log('free memory : \n' + os.freemem() + " bytes.")