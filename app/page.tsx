"use client"

import { useState } from 'react'
import InputText from '@/components/InputText';

import Loader from '@/components/Loader/Loader';
import Link from 'next/link';
import { AlertOctagon, Eye, EyeClosed } from 'lucide-react';
import Image from 'next/image';
import { signIn } from '@/requests/auth';
import Button from '@/components/Button';

function SignIn() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    function show() {
        return <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl cursor-pointer" onClick={() => toggle()} />
    }
    function hide() {
        return <EyeClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl cursor-pointer" onClick={() => toggle()} />
    }
    const [icon, setIcon] = useState(show());
    function toggle() {
        setShowPassword((prev) => !prev);
        setIcon(!showPassword ? hide() : show());
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        if (values.email === '' || values.password === '') {
            if (values.email === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your email.')
            }
            else if (values.password === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your password.')
            }
        } else {
            setErrorMessage('')
            return signIn(values, setIsLoading, setErrorMessage)
        }
    };

    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center relative">
            <form className="flex flex-col justify-center items-center  w-full md:w-1/2 h-full py-10 px-20 overflow-auto" onSubmit={handleSubmit}>

                <h1 className="text-6xl font-extrabold bg-clip-text text-blue-500 mb-8 text-start w-full">
                    Sign Up
                </h1>

                <section className="w-full">
                    <InputText
                        label='Email'
                        helper='Enter your email'
                        type="text"
                        name='email'
                        handler={handleChange} />
                    <InputText
                        label="Password"
                        identifier='password-text'
                        helper="Enter your password"
                        icon={icon}
                        type={showPassword ? "text" : "password"}
                        name='password'
                        handler={handleChange} />
                </section>

                {errorMessage !== '' &&
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded relative mt-5 cursor-pointer w-full flex gap-2.5" onClick={() => setErrorMessage('')}>
                        <AlertOctagon className='w-auto' />
                        <p className="text-red-700 whitespace-nowrap overflow-hidden text-ellipsis">{errorMessage}</p>
                    </div>
                }

                <div className="flex flex-col justify-center w-full mt-8">
                    <Button
                        type="submit"
                    >
                        {isLoading ? <Loader /> : 'Sign In'}
                    </Button>
                    <div className="flex justify-end items-center mt-5 gap-5">
                        <p> Don&apos;t have an account?</p>
                        <Link className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200 transition" href='/register'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
            <div className="max-md:hidden md:w-1/2 h-full bg-blue-400 flex items-center justify-center relative">
                <Image src="/assets/gamepad.jpg" alt="Sign Up" width={500} height={500} className="w-full h-full object-cover" />
            </div>
        </div>
    )
}

export default SignIn;