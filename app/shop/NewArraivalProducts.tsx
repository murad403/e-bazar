import ProductCard from '../components/ui/ProductCard';

const NewArraivalProducts = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold m-2'>New Arrivals</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
                        <ProductCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default NewArraivalProducts;