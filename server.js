const staticServer = require("static-server");

let server = new staticServer({
 rootPath : './dist/',
 port : 8080
})

server.start(() => {
 console.log("server is start at port: " + server.port)
})