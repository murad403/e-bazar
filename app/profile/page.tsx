"use client";
import React, { useState } from 'react';
import NavigateButton from '../components/ui/NavigateButton';
import { useForm, SubmitHandler } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

type FormInputs = {
    name: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    address: string;
};

const page = () => {
    const [userData, setUserData] = useState<FormInputs>({
        name: "John Doe",
        email: "john@example.com",
        phone: "+880123456789",
        country: "Bangladesh",
        city: "Dhaka",
        address: "House-10, Road-5, Dhanmondi",
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Form Submitted:", data);
        setUserData(data);
        setIsEditing(false);
        reset();
    };

    return (
        <div className="">
            <div className="w-full">
                {!isEditing && (
                    <div className="bg-white/30 p-5 rounded-lg shadow-md space-y-4 w-full">
                        <div>
                            <p className='text-lg text-gray-700'>Name</p>
                            <h2 className='font-semibold text-gray-900'>{userData.name}</h2>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>Email</p>
                            <h2 className='font-semibold text-gray-900'>{userData.email}</h2>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>Phone</p>
                            <h2 className='font-semibold text-gray-900'>{userData.phone}</h2>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>Country</p>
                            <h2 className='font-semibold text-gray-900'>{userData.country}</h2>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>City</p>
                            <h2 className='font-semibold text-gray-900'>{userData.city}</h2>
                        </div>
                        <div>
                            <p className='text-lg text-gray-700'>Address</p>
                            <h2 className='font-semibold text-gray-900'>{userData.address}</h2>
                        </div>

                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-basic text-white py-2 px-5 rounded-lg font-semibold w-full flex items-center gap-3 justify-center cursor-pointer"
                        >
                           <FiEdit/> Edit
                        </button>
                    </div>
                )}

                {isEditing && (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5 bg-white/30 p-5 rounded-lg shadow-md"
                    >
                        <div>
                            <label className="font-semibold">Name</label>
                            <input
                                type="text"
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-600 text-sm">Name is required</p>}
                        </div>
                        <div>
                            <label className="font-semibold">Email</label>
                            <input
                                type="email"
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
                        </div>

                        <div>
                            <label className="font-semibold">Phone Number</label>
                            <input
                                type="text"
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <p className="text-red-600 text-sm">Phone number is required</p>}
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-full md:w-1/2">
                                <label className="font-semibold">Country</label>
                                <input
                                    type="text"
                                    className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                    {...register("country", { required: true })}
                                />
                                {errors.country && <p className="text-red-600 text-sm">Country is required</p>}
                            </div>

                            <div className="w-full md:w-1/2">
                                <label className="font-semibold">City</label>
                                <input
                                    type="text"
                                    className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none"
                                    {...register("city", { required: true })}
                                />
                                {errors.city && <p className="text-red-600 text-sm">City is required</p>}
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold">Address</label>
                            <textarea
                                className="w-full border bg-gray-200 rounded-lg border-gray-300 px-3 py-2 h-28 outline-none"
                                {...register("address", { required: true })}
                            ></textarea>
                            {errors.address && <p className="text-red-600 text-sm">Address is required</p>}
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-400 text-white py-2 px-5 rounded-lg cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="bg-basic text-white py-2 px-5 rounded-lg font-semibold cursor-pointer"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default page;
