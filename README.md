# Simple Express + GraphQL + TypeScript server

Server running a simple GraphQL stack (`express` + `express-graphql` + `graphql`).

All documentation for GraphQL implementation is simple to digest here: https://graphql.org/graphql-js

---

## Starting and building the server

Server will start a GraphQL explorer at `localhost:8000/gql`

```bash
# Start server on localhost:8000
yarn start

# Just build TS files into "build/" directory
yarn build

# Start server with source maps on localhost:8000
yarn start:dev

# Just build TS files with source maps into "build/" directory
yarn build:dev

# Lint the TS files
yarn lint

# Lint the TS files and fix them where possible
yarn lint:fix
```
