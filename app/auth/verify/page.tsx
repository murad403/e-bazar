"use client";
import Image from "next/image";
import authImage from "../../../public/auth/auth.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useVerifyOtpMutation } from "@/app/redux/features/authApi";
import { toast } from "react-toastify";
import { useAppSelector } from "@/app/redux/hooks";
import { useRouter } from "next/navigation";
import NavigateButton from "@/app/components/ui/NavigateButton";

type Inputs = {
    otp0: string;
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
};

const page = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
    const {username} = useAppSelector((state) => state.auth);
    const router = useRouter();
    const otp = watch();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        const fullOtp = data.otp0 + data.otp1 + data.otp2 + data.otp3 + data.otp4;
        // console.log("OTP:", typeof fullOtp);
        try {
            const result = await verifyOtp({username: username, payload: fullOtp}).unwrap();
            toast.success(result.message);
            router.push('/auth/sign-in');
        } catch (error: any) {
            console.log(error);
            toast.error(error?.response?.message);
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (!/^[0-9]$/.test(value) && value !== "") return;
        setValue(`otp${index}` as keyof Inputs, value);
        if (value && index < 4) {
            const next = document.getElementById(`otp-${index + 1}`);
            next?.focus();
        }
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[`otp${index}` as keyof Inputs] && index > 0) {
            const prev = document.getElementById(`otp-${index - 1}`);
            prev?.focus();
        }
    };

    return (
        <div className="py-10">
            <NavigateButton />
            <div className="min-h-screen flex flex-col gap-5  justify-center items-center px-4">
            <Image className="size-60" src={authImage} loading="eager" alt="Authentication Image" width={500} height={500}></Image>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-md p-6 bg-white rounded-lg w-full max-w-sm space-y-6"
            >
                <div className="flex justify-center gap-3">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <input
                            key={i}
                            id={`otp-${i}`}
                            maxLength={1}
                            type="text"
                            {...register(`otp${i}` as keyof Inputs, { required: true })}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleBackspace(e, i)}
                            className="w-12 h-14 text-2xl text-center font-bold 
                         border-2 rounded-xl 
                         border-gray-200 text-gray-700
                         focus:border-basic focus:ring-2 
                         focus:ring-purple-300 outline-none
                         transition-all duration-200"
                        />
                    ))}
                </div>

                {(errors.otp0 ||
                    errors.otp1 ||
                    errors.otp2 ||
                    errors.otp3 ||
                    errors.otp4) && (
                        <p className="text-red-600 text-center text-sm">
                            All 5 digits are required.
                        </p>
                    )}

                <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-white font-semibold 
                     bg-basic cursor-pointer"
                >
                    {
                        isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Confirm Code</span>
                    }
                </button>
            </form>
        </div>
        </div>
    );
};

export default page;
