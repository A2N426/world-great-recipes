import {  createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout.jsx/LoginLayout'
import Main from '../layouts/Main/Main'
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Details from '../Pages/Details/Details';
import DetailsLayout from '../layouts/DetailsLayout/DetailsLayout';
import ChefBanner from '../components/ChefBanner/ChefBanner';
import PrivateRoute from './PrivateRoute';
import Error from '../Pages/Error/Error';
import Blog from '../Pages/Blog/Blog';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
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
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path:'view',
        element:<PrivateRoute><DetailsLayout></DetailsLayout></PrivateRoute>,
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