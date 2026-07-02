const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Active CORS pour toutes les origines et tous les projets externes
server.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Intègre les middlewares par défaut de json-server
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
