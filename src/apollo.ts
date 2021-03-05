import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'cross-fetch'


export const client = new ApolloClient({
    link: new HttpLink({ uri: `https://exam-app-vercel.vercel.app/api/graphql`, fetch }),//: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
    defaultOptions:{
        query:{
            fetchPolicy:'cache-first'
        }
    }
});

