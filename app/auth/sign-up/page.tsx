"use client";
import { useSignUpMutation } from '@/app/redux/features/authApi';
import { addAuth } from '@/app/redux/features/authSlice';
import { useAppDispatch } from '@/app/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { toast } from 'react-toastify';

type Inputs = {
    first_name: string;
    email: string;
    username: string;
    password: string;
};

const page = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [signUp, { isLoading }] = useSignUpMutation();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await signUp(data).unwrap();
            dispatch(addAuth({ username: res?.data?.username }));
            toast.success('Sign up successful!');
            router.push('/auth/verify');
        } catch (error: any) {
            console.log(error.data);
            toast.error(error?.data?.username?.[0] || error?.data?.email?.[0]);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col min-h-screen py-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-10">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full md:w-1/3 bg-white p-3 md:p-5 rounded-lg shadow-md">
                <div>
                    <input
                        placeholder="First name"
                        className="appearance-none outline-none border-b text-gray-700 border-gray-5        00 w-full px-3 py-2"
                        {...register('first_name', { required: true })}
                    />
                    {errors.first_name && <span className='text-red-700 text-sm'>First Name is required</span>}
                </div>
                <div>
                    <input
                        placeholder="Email Address"
                        className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className='text-red-700 text-sm'>Email is required</span>}
                </div>
                <div>
                    <input
                        placeholder="Username"
                        className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2"
                        {...register('username', { required: true })}
                    />
                    {errors.username && <span className='text-red-700 text-sm'>Username is required</span>}
                </div>
                <div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2 pr-10"
                            {...register('password', { required: true })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 p-1"
                        >
                            {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                        </button>
                    </div>
                    {errors.password && <span className='text-red-700 text-sm'>Password is required</span>}
                </div>
                <button className="text-white w-full bg-basic px-4 py-2 rounded-lg cursor-pointer" type="submit">
                    {
                        isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Sign Up</span>
                    }
                </button>
                <p className="text-gray-700">
                    <span>Already have an account? </span>
                    <Link href="/auth/sign-in" className="text-basic hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default page;