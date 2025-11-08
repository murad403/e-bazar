import Image from 'next/image';
import userImage from '../../../public/products/product.jpg';
import { IoMdTime } from "react-icons/io";
import { Rating } from '@smastrom/react-rating';

const ReviewCard = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-start gap-4 py-4'>
                    <Image src={userImage} alt='User' className='h-12 w-12 rounded-full' />
                    <div>
                        <h4 className='font-semibold text-lg'>John Doe</h4>
                        <p className='text-sm text-gray-600 flex items-center gap-2'><IoMdTime></IoMdTime> 13 Sep, 2020</p>
                    </div>

                </div>
                <div>
                    <p className='text-gray-600'><span className='font-semibold text-lg'>4.5</span> rating</p>  
                </div>
            </div>
            <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit voluptates enim esse autem a voluptatum dolorum quod voluptatem iusto.</p>
        </div>
    );
};

export default ReviewCard;
