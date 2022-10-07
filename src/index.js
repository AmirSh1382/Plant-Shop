import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// Graphql
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// React-router-dom
import { BrowserRouter } from 'react-router-dom';

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Styles
import './styles/index.css';

// YEKANBAKH Font
import "./styles/font.css"

const client = new ApolloClient({
    uri: "https://api-us-east-1.hygraph.com/v2/cl8ea8o9d2h4v01ulewac7p5g/master",
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
);