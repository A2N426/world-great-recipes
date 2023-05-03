import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { UserContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const { logIn, googleLogIn, gitHubLogIn, } = useContext(UserContext)
    const handleLogin = event => {
        event.preventDefault()
        setError("")
        setSuccess("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess("Successfully Login")
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }

    const handleGoogle = ()=>{
        googleLogIn()
    }
    const handleGitHub = ()=>{
        gitHubLogIn()
    }
    return (
        <div>
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleLogin} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-yellow-400 hover:text-yellow-300">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" />
                                </div>
                                <p><small className='text-red-600'>{error}</small></p>
                                <p><small className='text-green-600'>{success}</small></p>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">Login</button>
                            </div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Don't Have an account?
                                <Link to='/sign-up' className="font-semibold leading-6 text-yellow-400 hover:text-yellow-300"> Please sign up</Link>
                            </p>
                        </form>
                        <p className='text-center mb-3 mt-1 font-semibold'>Or Continue with</p>
                        <div className='flex lg:gap-4 justify-between'>
                            <button onClick={handleGoogle} className='bg-cyan-500 py-2 rounded-xl font-semibold hover:bg-cyan-400 lg:px-14 px-10 items-center gap-2 text-white flex'><FaTwitter className='text-xl' /> Twitter</button>
                            <button onClick={handleGitHub} className='bg-gray-700 lg:px-14
                                px-10 py-2 flex rounded-xl font-semibold text-white hover:bg-gray-600 items-center gap-2'><FaGithub className='text-xl' /> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;