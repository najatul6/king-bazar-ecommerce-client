import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Swal from "sweetalert2";

const DataStorageDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    const products = useLoaderData()

    useEffect(() => {
        const findProduct = products?.find((product) => product._id === id);
        setProduct(findProduct)
    }, [id, products])

    const {_id, productImg, productName, productBrand, productDescription, productPrice, productRating } = product

    const handleAddToCart = () => {
        const addToCart = [];
        const cartsItem = JSON.parse(localStorage.getItem('carts'))
        if (!cartsItem) {
            addToCart.push(product)
            localStorage.setItem('carts', JSON.stringify(addToCart))

            Swal.fire(
                'Success !',
                'Product Added',
                'success'
            )
        } else {
            const isItem = cartsItem.find(item => product.id === _id)
            if (!isItem) {
                addToCart.push(...cartsItem, product)
                localStorage.setItem('carts', JSON.stringify(addToCart))
                Swal.fire(
                    'Success !',
                    'Product Added',
                    'success'
                )
            }
            else {
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
                        <Link to={`/scanner/update/${_id}`}>
                            <button className="btn m-2  bg-[#f16022] text-white">Update Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataStorageDetails;