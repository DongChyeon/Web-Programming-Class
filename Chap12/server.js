const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

const app = http.createServer(function(request,response){
    var url = request.url;
    if(url == '/'){
      url = '/2020-2-WebProg-3-HW13-Main1-김동현-32190473.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});