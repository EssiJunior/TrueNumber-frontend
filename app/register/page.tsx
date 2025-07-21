"use client"

import { useState } from 'react'
import InputText from '@/components/InputText';
import PhoneNumberInput from '@/components/PhoneNumberInput';

import Loader from '@/components/Loader/Loader';
import serverURL from '@/utils/server';
import Link from 'next/link';
import { AlertOctagon, Eye, EyeClosed } from 'lucide-react';
import Image from 'next/image';

function SignUp() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    function show() {
        return <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl cursor-pointer" onClick={() => toggle()} />
    }
    function hide() {
        return <EyeClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 text-xl cursor-pointer" onClick={() => toggle()} />
    }
    const [icon, setIcon] = useState(show());
    function toggle() {
        const x = document.getElementById('password-text');
        if (x.type === 'password') {
            x.type = 'text';
            setIcon(hide())
        } else {
            x.type = 'password';
            setIcon(show())
        }
    }
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (values.firstName === '' || values.lastName === '' || values.email === '' || values.password === '') {
            if (values.firstName === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your first name(s).')
            }
            else if (values.lastName === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your last name(s).')
            }
            else if (values.email === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your email.')
            }
            else if (values.password === "") {
                setIsLoading(false)
                setErrorMessage('Please enter your password.')
            }
            else {
                setErrorMessage('')
            }
        } else {
            setErrorMessage('')
            return signUp()
        }
    };
    const signUp = () => {
        serverURL.post('/auth', values).then((response) => {
            setIsLoading(false);
        })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage('There was an error please try later.')
            });
    }

    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center relative">
            <form className="flex flex-col  w-full md:w-1/2 h-full py-10 px-20 overflow-auto">

                <h1 className="text-6xl font-extrabold bg-clip-text text-blue-500 mb-8 text-start w-full">
                    Sign Up
                </h1>

                <section className="w-full">
                    <InputText label='Username' helper='Enter your username' type="text" name='userName' value={values.username} handler={handleChange} />
                    <InputText label='Email' helper='Enter your email' type="text" name='email' value={values.email} handler={handleChange} />
                    <PhoneNumberInput label='PhoneNumber' name='lastName' value={values.phoneNumber}  handler={handleChange} />
                    <InputText label="Password" identifier='password-text' helper="Enter your password" icon={icon} type="password" name='password' value={values.password} handler={handleChange} />
                </section>

                {errorMessage !== '' &&
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded relative mt-5 cursor-pointer w-full flex gap-2.5" onClick={() => setErrorMessage('')}>
                        <AlertOctagon className='w-auto' />
                        <p className="text-red-700 whitespace-nowrap overflow-hidden text-ellipsis">{errorMessage}</p>
                    </div>
                }

                <div className="flex flex-col justify-center w-full mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition" onClick={handleSubmit}>
                        {isLoading ? <Loader size='40px' marginTop='0' bg='#fff' /> : 'Sign Up'}
                    </button>
                    <div className="flex justify-end items-center mt-5 gap-5">
                        <p>Already have an account?</p>
                        <Link className="bg-blue-100 text-blue-700 py-1 px-3 rounded hover:bg-blue-200 transition" href='/'>
                            Sign In
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

export default SignUp;