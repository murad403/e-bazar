import Image from "next/image";
import productImage from "../../../public/products/product.jpg";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCard = () => {
    return (
        <Link href={`/product-details/${21}`} className="p-2 bg-white rounded-lg shadow-md relative">
            <Image className="w-full " src={productImage} alt="Product"  width={200} height={200} />
            <h3 className="text-[16px] font-semibold">Nike Sportswear Club Fleece</h3>
            <p className="font-bold text-lg">$88</p>
            <button className="absolute top-5 right-5 cursor-pointer">
                <IoMdHeartEmpty size={25}/>
            </button>
        </Link>
    );
};

export default ProductCard;