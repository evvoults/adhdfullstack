var http = require('http');

http.createServer(function (req,res) {
    res.write("Iam alive");
    res.end();
}).listen(7001);