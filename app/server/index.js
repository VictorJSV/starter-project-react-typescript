const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
	if (req.method === 'POST') {
		req.method = 'GET'
    req.query = req.body
  }
  next()
})

server.use(jsonServer.rewriter({
	'/v1/*': '/$1',
  '/tyc/login': '/login'
}))
server.use(router)
server.listen(4040, () => {
  console.log('JSON Server is running')
})