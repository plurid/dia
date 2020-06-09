import fetch from 'cross-fetch';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';



const client = new ApolloClient({
    link: createHttpLink({
        uri: '',
        credentials: 'include',
        fetch,
    }),
    cache: new InMemoryCache(),
});


export default client;
