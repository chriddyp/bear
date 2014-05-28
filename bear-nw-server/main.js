var http = require("http");

var server = http.createServer(function(req, res) {

    console.log('headers: ', req.headers);

    res.writeHead(200);
    response = JSON.stringify(
        {
            "data": [
                {
                    "a": [1,2,3],
                    "b": [10, 20, 30]
                },
                {
                    "a": [1,2,3],
                    "b": [15, 25, 35]
                }
            ]
        }
    );
    res.end(response);

});

server.listen(8080);
