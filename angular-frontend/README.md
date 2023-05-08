# Angular

Angular frontend depends on [NestJs-sequelize](../nestjs-sequelize/README.md) backend to be up and running.

Angular frontend will be running at port `4200` of your localhost.

XHR requests are made through a proxy configuration to `http://localhost:3000/api/` and `http://localhost:3000/auth`.

&nbsp;

### Installation
```bash
$ npm install
```

&nbsp;

## Running with [local-dev](../profiles/local-dev/README.md)<a name="local-dev-instructions"></a>

### Start the application
```bash
$ npm start
# visit http://localhost:4200/products
```

&nbsp;

## Running with [local-full](../profiles/local-full/README.md)<a name="local-full-instructions"></a>

### Docker build
```bash
$ npm run build # creates `dist` assets and artifacts
$ docker build -t products-frontend .
```