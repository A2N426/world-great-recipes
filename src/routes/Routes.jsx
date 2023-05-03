import {  createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout.jsx/LoginLayout'
import Main from '../layouts/Main/Main'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Details from '../Pages/Details/Details';
import DetailsLayout from '../layouts/DetailsLayout/DetailsLayout';
import ChefBanner from '../components/ChefBanner/ChefBanner';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'view',
        element:<DetailsLayout></DetailsLayout>,
        children:[
            {
                path:':id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
            }
        ]
    }
])

export default router;