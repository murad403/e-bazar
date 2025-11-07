import Link from 'next/link';
import NavigateButton from '../components/ui/NavigateButton';
import ReviewCard from '../components/ui/ReviewCard';
import { FiEdit } from "react-icons/fi";

const page = () => {
    return (
        <div className='py-10 md:px-52'>
            <div className='flex justify-between'>
                <NavigateButton></NavigateButton>
                <h2 className='text-2xl font-semibold'>Reviews</h2>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-gray-800 font-medium'>234 Reviews</h2>
                </div>
                <Link href="/add-review" className='flex bg-orange-500 px-3 py-2 text-white flex items-center justify-between gap-3 rounded-lg'><FiEdit />Add Review</Link>
            </div>

            <div className='space-y-5'>

                {
                    [1, 2, 3]?.map((review: any, index: number) => <ReviewCard key={index}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default page;