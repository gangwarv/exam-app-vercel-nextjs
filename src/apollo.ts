import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'cross-fetch'


export const client = new ApolloClient({
    link: new HttpLink({ uri: `http://localhost:3000/api/graphql`, fetch }),//: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
    defaultOptions:{
        query:{
            fetchPolicy:'cache-first'
        }
    }
});

