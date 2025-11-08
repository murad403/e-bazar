"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NavigateButton from "../components/ui/NavigateButton";
import { useRouter } from "next/navigation";

type CheckoutInputs = {
    country: string;
    city: string;
    phone: string;
    address: string;
};

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutInputs>();
    const router = useRouter();

    const onSubmit: SubmitHandler<CheckoutInputs> = (data) => {
        console.log("Checkout Data:", data);
        router.push("/profile/card")
    };
    return (
        <div className="flex justify-center items-center w-full py-10 flex-col">
            <div className="flex justify-between w-full">
                <NavigateButton></NavigateButton>
                <h2 className="text-2xl font-semibold">Checkout</h2>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-5"
            >
                <div className="flex gap-5 items-center">
                    <div className="w-full md:w-1/2">
                        <label className="font-semibold">Country</label>
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full border bg-gray-200 rounded-lg border-gray-300 px-3 py-2 outline-none"
                            {...register("country", { required: true })}
                        />
                        {errors.country && <p className="text-red-600 text-sm mt-1">Country is required</p>}
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="font-semibold">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full border bg-gray-200 rounded-lg border-gray-300 px-3 py-2 outline-none"
                            {...register("city", { required: true })}
                        />
                        {errors.city && <p className="text-red-600 text-sm mt-1">City is required</p>}
                    </div>
                </div>



                <div>
                    <label className="font-semibold">Phone Number</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full border bg-gray-200 rounded-lg border-gray-300 px-3 py-2 outline-none"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">Phone number is required</p>}
                </div>

                <div>
                    <label className="font-semibold">Address</label>
                    <textarea
                        placeholder="Full Address"
                        className="w-full border bg-gray-200 rounded-lg border-gray-300 px-3 py-2 h-24 outline-none"
                        {...register("address", { required: true })}
                    ></textarea>
                    {errors.address && <p className="text-red-600 text-sm mt-1">Address is required</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-basic text-white py-2 rounded-lg font-semibold hover:opacity-90"
                >
                    Save Address
                </button>
            </form>
        </div>
    );
};

export default page;