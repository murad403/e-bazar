import Image from "next/image";
import productImage from "../../../public/products/product.jpg";

const Details = () => {
    const isLoading = false;
    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full md:w-[70%]">
                <div className="w-full md:w-[50%] border border-gray-300 p-3 rounded-lg">
                    <Image className="h-[300px] w-full" src={productImage} alt="Product" width={400} height={400} />
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Size</h3>
                            <p className="text-gray-600 text-lg">Size Guide</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            {
                                sizes.map((size) => (
                                    <button key={size} className="border border-gray-400 px-3 py-2 cursor-pointer bg-gray-300 rounded-lg">
                                        {size}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] md:space-y-5 space-y-2">
                    <h3 className="text-lg text-gray-700">Men's Printed Pullover Hoodie</h3>
                    <h2 className="text-xl font-semibold">Nike Club Fleece</h2>
                    <p className="text-xl font-bold">$3843</p>
                    <p><span className="font-medium">Description:</span> The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with Read More..</p>
                    <button
                        type="submit"
                        className="text-white w-full bg-basic px-4 py-2 rounded-lg cursor-pointer flex justify-center items-center"
                    >
                        {isLoading ? <span className="loading loading-spinner loading-sm text-white"></span> : <span>Add to Cart</span>}
                    </button>
                </div>
            </div>
        </div>
    );
};

const sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

export default Details;