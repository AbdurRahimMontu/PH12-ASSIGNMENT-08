import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import Error from '../Pages/Error';
import ProductDetails from '../Pages/ProductDetails';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        hydrateFallbackElement: <p>Loading...</p>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
             

            },
            {
                path:"/apps",
                element:<Apps></Apps>
            },
            {
                path:"/installation",
                element:<Installation></Installation>
            },
            {
                path:"/apps/:id",
                element:<ProductDetails></ProductDetails>
            },
              
           
        ]
    },

])

export default Routes;