"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from "../../public/banner/banner1.jpg";
import slider2 from "../../public/banner/banner2.jpg";
import slider3 from "../../public/banner/banner3.jpg";
import slider4 from "../../public/banner/banner4.jpg";
import Link from 'next/link';
import Image from 'next/image';

const imageGroup: any[] = [
    slider1, slider2, slider3, slider4
]

const Banner = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="">
            {
                imageGroup.map((image, index) =>
                    <SwiperSlide key={index}>
                        <div className='relative'>
                            <Image className='h-[500px] w-full object-cover' src={image} alt='slider'></Image>
                            <div className='absolute top-1/2 left-3 md:left-12 lg:left-16 -translate-y-1/2 md:w-[55%] space-y-3 md:space-y-5'>
                                <h1 className='lg:text-5xl md:text-4xl text-3xl font-extrabold text-gray-700'>Empowering <span className='md:text-2xl text-xl'>Healthcare with the Right Equipment,</span> Right Where It Matters Most</h1>
                                <p className='text-sm md:text-[16px] lg:text-xl text-gray-500'>Trusted platform for hospitals, labs, and individuals to trade medical devices securely.</p>
                                <Link href={'/shop'} className='bg-basic text-white font-semibold text-sm py-2 px-4 rounded-lg'>See All Equipment</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Banner;