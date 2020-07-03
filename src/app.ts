import 'module-alias/register'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '@/gql/schema'

const app = express()
const port = 8000

app.use(
    '/gql',
    graphqlHTTP({
        graphiql: true,
        schema,
    })
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
