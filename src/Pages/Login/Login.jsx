import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div>
            <form>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-yellow-400 hover:text-yellow-300">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">Sign in</button>
                            </div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Don't Have an account?
                                <Link to='/sign-up' className="font-semibold leading-6 text-yellow-400 hover:text-yellow-300"> Please sign up</Link>
                            </p>
                            <p className='text-center font-semibold'>Or Continue with</p>
                            <div className='flex gap-3'>
                                <button className='bg-cyan-500 px-9 py-2 rounded-xl font-semibold hover:bg-cyan-400 w-[50%] text-white'>Twitter</button>
                                <button className='bg-gray-700 w-[50%] py-2 rounded-xl font-semibold text-white hover:bg-gray-600'>Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;