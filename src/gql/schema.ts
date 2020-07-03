import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        healthcheck: {
            type: GraphQLString,
            resolve: () => {
                return 'Ok'
            },
            description: 'Simple healthcheck response',
        },
    },
})

export default new GraphQLSchema({
    query,
})
