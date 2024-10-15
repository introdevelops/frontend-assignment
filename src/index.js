import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Utils/store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Cart from './Components/Cart';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
  },
  {
    path:"/cart",
    element:<Cart/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Provider store={store}><RouterProvider router={appRouter} /></Provider>);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
