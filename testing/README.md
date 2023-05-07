# Testing

## Cypress e2e testing

- Currently can test both [`local-dev`](../profiles/local-dev/README.md) and [`local-full`](../profiles/local-full/README.md) profiles
- Must have `local-dev` or `local-full` running
- Uses [Keycloak inital users](../keycloak/README.md) for tests

```bash
$ npm install
$ npx cypress run --spec cypress/e2e/*
```