const http = require('http')
const port = 3000

const server = http.createServer(function(request,response){
    if(request.url == '/')
    {
        response.end('Hello')
    }
    else if(request.url == '/contact')
    {
        response.end('Contact') 
    }
    else if(request.url == '/users')
    {
        response.setHeader('Content-Type' , 'text/html')
        response.end(`<ul><li>Ramesh</li></ul>`)
    }
    else if(request.url == '/products'){
        const products = [{id :1, name:'marker'},{id:2,name:'pencil'}]
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(products))
    }
    else
    {
        response.end('page not found')
    }
    
}) 

server.listen(port,function(){
    console.log('Listening on the port ' , port)
})