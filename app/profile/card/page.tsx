import React from 'react';
import ProfileHeader from "../../components/ui/ProfileHeader";
import card1 from "../../../public/card/card1.jpeg";
import card2 from "../../../public/card/card2.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { IoAddCircleOutline } from "react-icons/io5";
import ProductCard from '@/app/components/ui/ProductCard';

const page = () => {
    return (
        <div>
            <ProfileHeader title='My Cart' description='Review your selected items below'></ProfileHeader>
            <div className='flex items-center gap-5 flex-col md:flex-row'>
                <Image src={card1} alt='Card 1' width={500} height={500} />
                <Image src={card2} alt='Card 2' width={500} height={500} />
            </div>
            <Link href={"/profile/add-card"} className='flex justify-center items-center px-4 py-2 text-basic border border-basic rounded-lg cursor-pointer my-3 gap-2 font-semibold'>
                <IoAddCircleOutline size={18} /> Add new card
            </Link>
            <div>
                <h2 className='text-2xl font-semibold'>Visit Recently</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center mt-3 '>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
                            <ProductCard key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default page;