import { useEffect, useState } from "react";
import NoDataPage from "../NoDataPage/NoDataPage";
import MyCartsCard from "./MyCartsCard";

const MyCart = () => {
    const [mycart, setMyCart] = useState([]);
    const [nodatafound, setnodatafound] = useState(false)

    useEffect(() => {
        const cartsItem = JSON.parse(localStorage.getItem('carts'));

        if (cartsItem) {
            setMyCart(cartsItem)
        }
        else {
            setnodatafound('No data found')
        }
    }, [])

    const handleDelete = () => {
        localStorage.clear()
        setMyCart([])
        setnodatafound('No data found')
    }

    return (
        <div>
            {
                nodatafound ? <NoDataPage></NoDataPage>
                    :
                    <div className="my-4">
                        <div className="flex justify-center items-center">
                            <button onClick={handleDelete} className="btn bg-[#f16022] text-white">
                                Delete All product
                            </button>
                        </div>
                        <h2 className="my-4 text-4xl font-semibold">Total Product : {mycart?.length}</h2>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {
                                mycart?.map(cart => <MyCartsCard key={mycart?._id} mycarts={cart}></MyCartsCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyCart;