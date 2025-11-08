"use client";
import ProfileHeader from '../../components/ui/ProfileHeader';
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type CardInputs = {
    cardOwner: string;
    cardNumber: string;
    exp: string;
    cvv: string;
};

const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CardInputs>();

    const onSubmit: SubmitHandler<CardInputs> = (data) => {
        console.log(data);
    };
    return (
        <div>
            <ProfileHeader title='Add New Card' description='Add your new credit or debit card information securely.'></ProfileHeader>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 bg-white/30 p-5 rounded-lg shadow-md mt-5"
                >
                    <div>
                        <label className="font-semibold">Card Owner</label>
                        <input
                            type="text"
                            className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                            {...register("cardOwner", { required: true })}
                        />
                        {errors.cardOwner && (
                            <p className="text-red-600 text-sm">Card owner is required</p>
                        )}
                    </div>
                    <div>
                        <label className="font-semibold">Card Number</label>
                        <input
                            type="text"
                            maxLength={19}
                            className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none tracking-widest"
                            {...register("cardNumber", { required: true })}
                        />
                        {errors.cardNumber && (
                            <p className="text-red-600 text-sm">Card number is required</p>
                        )}
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-full md:w-1/2">
                            <label className="font-semibold">Exp (MM/YY)</label>
                            <input
                                type="text"
                                maxLength={5}
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                {...register("exp", { required: true })}
                            />
                            {errors.exp && (
                                <p className="text-red-600 text-sm">Expiry date is required</p>
                            )}
                        </div>

                        <div className="w-full md:w-1/2">
                            <label className="font-semibold">CVV</label>
                            <input
                                type="password"
                                maxLength={4}
                                placeholder="123"
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                {...register("cvv", { required: true })}
                            />
                            {errors.cvv && (
                                <p className="text-red-600 text-sm">CVV is required</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-basic text-white py-2 rounded-lg font-semibold cursor-pointer hover:opacity-90"
                    >
                        Save Card
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;