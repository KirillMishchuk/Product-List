/* practice */
import "../practice/index.js";

import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema/index.js";
import { rootResolver } from "./resolvers";

const app = express();
app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: rootResolver,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("🚀 Server running at http://localhost:4000/graphql");
});
