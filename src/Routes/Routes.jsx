import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/apps",
                element:<Apps></Apps>
            },
            {
                path:"/installation",
                element:<Installation></Installation>
            }
        ]
    }
])

export default Routes;