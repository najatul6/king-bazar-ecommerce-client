import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";

const ComputerComponentsDetails = () => {
    const [computer, setComputer] = useState({});
    const { id } = useParams()
    const computers = useLoaderData()

    useEffect(() => {
        const findComputer = computers?.find((computer) => computer?._id === id);
        setComputer(findComputer)
    }, [id, computers])
    
    const { _id,productImg, productName, productBrand, productDescription, productPrice, productRating } = computer

    const handleAddToCart = () => {
        const addToCart = [];
        const cartsItem = JSON.parse(localStorage.getItem('carts'))
        if (!cartsItem) {
            addToCart.push(computer)
            localStorage.setItem('carts', JSON.stringify(addToCart))

            Swal.fire(
                'Success !',
                'Product Added',
                'success'
            )
        } else {
            const isItem = cartsItem.find(item => computer.id === _id)
            if(!isItem){
                addToCart.push(...cartsItem, computer)
                localStorage.setItem('carts', JSON.stringify(addToCart))
                Swal.fire(
                    'Success !',
                    'Product Added',
                    'success'
                )
            }
            else{
                Swal.fire(
                    'OPPS!',
                    'Product Already Added',
                    'warning'
                )
            }

        }
    }

    return (
        <div className="mt-14">
            <h2 className="text-2xl my-3 flex items-center gap-3 rounded-xl bg-base-600 border-2 hover:border-[#FFF] hover:text-white hover:bg-[#f16022] border-[#f16022] btn font-semibold uppercase text-[#f16022]">
                <BiArrowBack></BiArrowBack>
                <Link to='/'>
                    Go Back
                </Link>
            </h2>
            <div className="hero min-h-screen text-white bg-gray-900">
                <div className="hero-content flex-col gap-5">
                    <img src={productImg} className="w-full mb-8 rounded-lg shadow-2xl" />
                    <div className="space-y-5">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{productName}</h1>
                        <p className="py-6 text-justify">{productDescription}</p>
                        <p><span className='font-medium text-[#f16022]'>Brand :</span> {productBrand}</p>
                        <p><span className='font-medium text-[#f16022]'>Type :</span> {productPrice}</p>
                        <p className='flex items-center gap-2'><span className='font-medium text-[#f16022]'> Price :</span><BsCurrencyDollar />  {productPrice}</p>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={productRating}
                            readOnly
                        />
                        <button onClick={handleAddToCart} className="btn  bg-[#f16022] text-white">Add to Cart</button>
                       <button className="btn m-2  bg-[#f16022] text-white">Update Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerComponentsDetails;