"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import authImage from "../../../public/auth/auth.png";
import Image from "next/image";
import NavigateButton from "@/app/components/ui/NavigateButton";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "@/app/redux/features/authApi";

type TInputs = {
    password: string;
    confirmPassword: string;
};

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const router = useRouter();
    const [resetPassword, {isLoading}] = useResetPasswordMutation();

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        if(data.password !== data.confirmPassword){
            toast.error("Inter same password");
            return;
        }
        try {
            const res = await resetPassword({new_password: data.password}).unwrap();
            toast.success(res.message);
            router.push("/shop")
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.detail);
        }
    };

    return (
        <div className="py-10">
            <NavigateButton />
            <div className="flex justify-center flex-col items-center min-h-screen gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold">New Password</h1>
                <Image className="size-60" src={authImage} loading="eager" alt="Authentication Image" width={500} height={500}></Image>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full md:w-1/3 bg-white p-5 rounded-lg shadow-md">
                    <div className="space-y-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Password"
                                className="appearance-none outline-none border-b text-gray-700 border-gray-400 w-full px-3 py-2"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-700 text-sm">Password is required</span>}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Confirm Password"
                                className="appearance-none outline-none border-b text-gray-700 border-gray-400 w-full px-3 py-2"
                                {...register("confirmPassword", { required: true })}
                            />
                            {errors.confirmPassword && <span className="text-red-700 text-sm">Confirm Password is required</span>}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-700 text-sm text-center">Please write your new password.</p>
                        <button
                            type="submit"
                            className="text-white w-full bg-basic px-4 py-2 rounded-lg cursor-pointer flex justify-center items-center"
                        >
                            {isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Reset Password</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;