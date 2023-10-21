import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrinterCard = ({ products }) => {
    const { _id, productImg, productName, productBrand, productPrice, productRating } = products
    return (
        <div className="card bg-gray-900 text-white shadow-xl">
            <figure className='p-2'><img className='w-full h-[300px] rounded-t-xl' src={productImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p><span className='font-medium text-[#f16022]'>Brand :</span> {productBrand}</p>
                <p><span className='font-medium text-[#f16022]'>Type :</span> {productPrice}</p>
                <p className='flex items-center gap-2'><span className='font-medium text-[#f16022]'> Price :</span><BsCurrencyDollar />  {productPrice}</p>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={productRating}
                    readOnly
                />
                <div className="card-actions justify-end">
                    <Link to={`/printer/${_id}`}>
                        <button className="btn hover:text-white border-[#f16022] bg-transparent border-2 text-[#f16022] hover:bg-[#f16022]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


PrinterCard.propTypes ={
    products:PropTypes.object
}

export default PrinterCard;