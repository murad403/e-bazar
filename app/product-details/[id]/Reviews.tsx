"use client";
import ReviewCard from '@/app/components/ui/ReviewCard';
import { useRouter } from 'next/navigation';
import React from 'react';

const Reviews = () => {
    const router = useRouter()
    return (
        <div className='md:px-52 py-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-gray-800 font-semibold text-2xl'>Reviews</h2>
                <button className='cursor-pointer hover:underline' onClick={() => router.push('/reviews')}>view all</button>
            </div>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;