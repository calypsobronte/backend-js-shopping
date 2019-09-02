# Workshop Fullstack JS Developer

¡Una introducción divertida para FullStack Javascript, creando una aplicación de carrito de compras usando Node.js, Express.js, MongoDB, React.js y GraphQL.

## Backend
Taller Fullstack en la parte de backend usando Express.js, MongodDB.

## Instalar y ejecutar
```bash
# Install
$ npm install

# Run
npm run dev
```
## Estructura del proyecto
```
backend-js-shopping
├── api
│    ├── helloWorld
│    │    ├── helloWorld.controller.js
│    │    └── index.js
│    ├── product
│    │    ├── product.controller.js
│    │    ├── product.model.js
│    │    └── index.js
│    └── user
│         ├── user.controller.js
│         ├── user.model.js
│         └── index.js
├── auth
│    ├── facebook
│    ├── google
│    ├── local
│    │    ├── passport.js
│    │    └── index.js
│    ├── auth.service.js
│    └── index.js
├── config
│    ├── environment
│    │    ├── development.js
│    │    ├── production.js
│    │    ├── shared.js
│    │    └── index.js
│    ├── express.js
│    └── local.env.js
├── app.js
├── routes.js
└── index.js
```
# License

[**MIT**]

[**MIT**]: https://github.com/calypsobronte/backend-js-shopping/blob/master/LICENSE
