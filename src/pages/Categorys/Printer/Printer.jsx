import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import PrinterCard from "./PrinterCard";

const Printer = () => {
    const [product, setProduct] = useState()
    useEffect(() => {
        fetch('https://king-bazar-ecommerce-server-ktqiplm2c-jinkalas-projects.vercel.app/printer')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <hr className="h-1 mt-10 bg-[#f16022] border-none rounded-xl " />
            <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-[#f16022] flex justify-center gap-2 items-center">Printer <FiChevronsRight></FiChevronsRight> </h2>
            <hr className="h-1 mt-2 bg-[#f16022] border-none rounded-xl mb-7" />
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    product?.map(products => <PrinterCard key={products._id} products={products}></PrinterCard>)
                }
            </div>
        </div>
    );
};

export default Printer;