import {  createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout.jsx/LoginLayout'
import Main from '../layouts/Main/Main'
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;