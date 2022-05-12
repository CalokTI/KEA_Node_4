import express from "express";
const app = express();

app.use(express.static("public"));

import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        description: "The Root Query Type", // for documentation 
        fields: {
            hello: {
                type: GraphQLString,
                description: "Returns the word 'world'",
                resolve() {         //this contains database query or code
                    return 'world';
                }
            },
            hello2: {
                type: GraphQLString,
                description: "Returns the word 'world'",
                resolve: () => "world2"
            },
        }
    })
})



app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema  //same key and name - schema: schema
}))





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("running on port", PORT))