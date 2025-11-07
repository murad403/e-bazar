"use client";
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from "react-icons/io";

const NavigateButton = () => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.back()} className='text-gray-800 bg-gray-300 p-2 hover:text-basic rounded-full mb-5 cursor-pointer'>
                <IoMdArrowBack size={28}/>
            </button>
        </div>
    );
};

export default NavigateButton;