"use strict";

var path = require('path');
var fs = require('fs');
var http = require('http');

var staticBasePath = './out';

var staticServe = function(req, res) {
    var resolvedBase = path.resolve(staticBasePath);
    var safeSuffix = path.normalize(req.url=='/'?'/index.html':req.url).replace(/^(\.\.[\/\\])+/, '');
    var fileLoc = path.join(resolvedBase, safeSuffix);
    
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
        
        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
};
const basePath = 'D:\\Program Files\\certificates\\';
const options = {
    key: fs.readFileSync(basePath+'key.pem'),
    cert: fs.readFileSync(basePath+'cert.pem')
};
var httpServer = http.createServer(options, staticServe);

httpServer.listen(8080);