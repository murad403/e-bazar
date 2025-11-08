"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSignInMutation } from "@/app/redux/features/authApi";
import { useAppDispatch } from "@/app/redux/hooks";
import { addAuth } from "@/app/redux/features/authSlice";

type TInputs = {
    username: string;
    password: string;
    rememberMe: boolean;
};

const page = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const router = useRouter();
    const [signIn, {isLoading}] = useSignInMutation();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        try {
          const res = await signIn(data).unwrap();
          toast.success(res.message);
          dispatch(addAuth({ user_id: res.data.user_id, access: res.data.access, refresh: res.data.refresh }));
          router.push("/shop");
        } catch (error: any) {
          toast.error("Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center flex-col min-h-screen py-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Welcome</h2>
                <p className="text-sm text-gray-700">Please enter your data to continue</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full md:w-1/3 bg-white p-5 rounded-lg shadow-md">

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        className="appearance-none outline-none border-b text-gray-700 border-gray-400 w-full px-3 py-2"
                        {...register("username", { required: true })}
                    />
                    {errors.username && <span className="text-red-700 text-sm">Username is required</span>}
                </div>
                <div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="appearance-none outline-none border-b text-gray-700 border-gray-400 w-full px-3 py-2 pr-10"
                            {...register("password", { required: true })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 p-1"
                        >
                            {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-700 text-sm">Password is required</span>}
                </div>

                <div className="flex justify-end items-center">
                    <Link
                        href={'/auth/forgot-password'}
                        className="text-red-600 hover:underline text-sm"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="rememberMe" className="text-gray-700 text-sm">Remember me</label>
                    <input
                        type="checkbox"
                        className="toggle border-gray-500 bg-gray-300 checked:bg-green-500 checked:text-white toggle-sm"
                    />
                </div>

                <p className="text-sm text-gray-600 text-center">
                    By connecting your account confirm that you agree with our{" "}
                    <Link href="/terms-and-conditions"
                        className="text-gray-800 hover:underline"
                    >
                        Term and Condition
                    </Link>.
                </p>

                <button
                    type="submit"
                    className="text-white w-full bg-basic px-4 py-2 rounded-lg cursor-pointer flex justify-center items-center"
                >
                    {isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Sign In</span>}
                </button>
                <p className="text-gray-700">
                    <span>Don't have an account? </span>
                    <Link href="/auth/sign-up" className="text-basic hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>

        </div>
    );
};

export default page;
