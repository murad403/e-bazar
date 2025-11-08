"use client";
import React from 'react';
import NavigateButton from '../components/ui/NavigateButton';
import { useForm, SubmitHandler } from "react-hook-form";

type ReviewInputs = {
    name: string;
    experience: string;
    rating: number;
};

const page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<ReviewInputs>();
    const rating = watch("rating", 0);

    const onSubmit: SubmitHandler<ReviewInputs> = (data) => {
        const reviewData = {
            ...data, rating: Number(rating)
        }
        console.log("Review submitted:", reviewData);
        reset();
    };
    return (
        <div className='py-10'>
            <div className='w-full md:w-[50%] mx-auto'>
                <div className='flex justify-between'>
                    <NavigateButton></NavigateButton>
                    <h2 className='text-2xl font-semibold'>Add Review</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5 bg-white/30 p-5 rounded-lg shadow-md">
                    <div>
                        <label htmlFor="name" className='font-semibold'>Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border bg-gray-200 rounded-lg border-gray-300 px-2 py-2 outline-none text-gray-700"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm">Name is required</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="name" className='font-semibold'>How was your experience ?</label>
                        <textarea
                            placeholder="How was your experience?"
                            className="w-full border border-gray-300 bg-gray-200 rounded-md px-3 py-2 h-28 outline-none text-gray-700"
                            {...register("experience", { required: true })}
                        ></textarea>
                        {errors.experience && (
                            <p className="text-red-600 text-sm">Experience is required</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Star: <span className="font-bold">{rating}</span> / 5
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="5"
                            step="0.5"
                            className="w-full accent-purple-600"
                            {...register("rating", { required: true })}
                        />
                        {errors.rating && (
                            <p className="text-red-600 text-sm mt-1">Rating is required</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-basic text-white py-2 rounded-lg font-semibold cursor-pointer hover:opacity-90"
                    >
                        Submit Review
                    </button>

                </form>
            </div>
        </div>
    );
};

export default page;