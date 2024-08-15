import { FiChevronsRight } from "react-icons/fi";
import PowerStripCard from "./PowerStripCard";
import { useEffect, useState } from "react";

const PowerStrip = () => {
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch(' http://localhost:5000/strip')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <hr className="h-1 mt-10 bg-[#f16022] border-none rounded-xl " />
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-[#f16022] flex gap-2 justify-center items-center">Power Strip <FiChevronsRight></FiChevronsRight> </h2>
            <hr className="h-1 mt-2 bg-[#f16022] border-none rounded-xl mb-7" />
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    product?.map(products => <PowerStripCard key={products._id} products={products}></PowerStripCard>)
                }
            </div>
        </div>
    );
};

export default PowerStrip;