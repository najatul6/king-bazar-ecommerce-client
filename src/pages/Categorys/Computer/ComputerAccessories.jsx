import { FiChevronsRight } from "react-icons/fi";
import ComputerAccessoryCard from "./ComputerAccessoryCard";
import { useEffect, useState } from "react";

const ComputerAccessories = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch(' http://localhost:5000/computeraccessories')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <hr className="h-1 mt-10 bg-[#f16022] border-none rounded-xl" />
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-[#f16022] flex justify-center gap-2 items-center">Computer Accessories <FiChevronsRight></FiChevronsRight> </h2>
            <hr className="h-1 mt-2 bg-[#f16022] border-none rounded-xl mb-7" />
            
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    products?.map(product => <ComputerAccessoryCard key={product?._id} products={product}></ComputerAccessoryCard>)
                }
            </div>
        </div>
    );
};

export default ComputerAccessories;