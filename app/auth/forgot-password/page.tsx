"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import authImage from "../../../public/auth/auth.png";
import Image from "next/image";
import NavigateButton from "@/app/components/ui/NavigateButton";
import { useForgotPasswordMutation } from "@/app/redux/features/authApi";
import { toast } from "react-toastify";

type TInputs = {
    username: string;
};

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const router = useRouter();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        try {
            const res = await forgotPassword(data).unwrap();
            toast.success(res.message);
            router.push("/change-password")
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message);
        }
    };

    return (
        <div className="py-10">
            <NavigateButton />
            <div className="flex justify-center flex-col items-center min-h-screen gap-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold">Forgot Password</h1>
                <Image className="size-60" src={authImage} loading="eager" alt="Authentication Image" width={500} height={500}></Image>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full md:w-1/3 bg-white p-5 rounded-lg shadow-md">
                    <div>
                        <input
                            type="text"
                            placeholder="User Name"
                            className="appearance-none outline-none border-b text-gray-700 border-gray-400 w-full px-3 py-2"
                            {...register("username", { required: true })}
                        />
                        {errors.username && <span className="text-red-700 text-sm">username is required</span>}
                    </div>

                    <div className="space-y-5">
                        <p className="text-gray-700 text-sm text-center">Please write your email to receive a confirmation code to set a new password.</p>
                        <button
                            type="submit"
                            className="text-white w-full bg-basic px-4 py-2 rounded-lg cursor-pointer flex justify-center items-center"
                        >
                            {isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Confirm User Name</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;