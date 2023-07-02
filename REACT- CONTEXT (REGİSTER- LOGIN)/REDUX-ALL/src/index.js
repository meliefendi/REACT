import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./reset.css"
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
//context
import { AuthProvider } from "./context/AuthContext";

//react query(api)
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>

    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
