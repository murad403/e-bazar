"use client";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    first_name: string;
    email: string;
    username: string;
    password: string;
}

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <div className="flex justify-center items-center flex-col min-h-screen">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-20">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full md:w-1/3">
                <div>
                    <input placeholder="First name" className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2" {...register("first_name", { required: true })} />
                    {errors.first_name && <span>First Name is required</span>}
                </div>
                <div>
                    <input placeholder="Email Address" className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2" {...register("email", { required: true })} />
                    {errors.email && <span>Email is required</span>}
                </div>
                <div>
                    <input placeholder="Username" className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2" {...register("username", { required: true })} />
                    {errors.username && <span>Username is required</span>}
                </div>
                <div>
                    <input placeholder="Password" className="appearance-none outline-none border-b text-gray-700 border-gray-500 w-full px-3 py-2" {...register("password", { required: true })} />
                    {errors.password && <span>Password is required</span>}
                </div>
                <button className="text-white w-full bg-basic px-4 py-2 rounded" type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default page;