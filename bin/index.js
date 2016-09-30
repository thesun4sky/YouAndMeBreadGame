var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type" : "text/html;charset-utf-8" });
  res.write("YouAndMeBreadGame_Running");
  res.end();
}).listen(process.env.PORT,process.env.IP,function(){
    console.log('Coawesome Sever Running');
});
