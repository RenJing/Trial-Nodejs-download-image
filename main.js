var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.png");
var request = http.get("http://cdn.jinshuju.net/assets/logo/logo_new_year-aba6995ee32ece5470867c05ea2321b1.png", function(response) {
    response.pipe(file);
});