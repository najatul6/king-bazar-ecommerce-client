import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const BrandCard = ({brand}) => {
    const {title, logo, id} = brand;
    return (
        <Link to={`/brands/${id}`}>
        <div className='p-2 bg-gray-300 dark:bg-gray-600'>
            <img className='h-48 w-full' src={logo} alt="" />
            <h4 className='font-bold text-black dark:text-white text-3xl text-center my-2'>{title}</h4>
        </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
}

export default BrandCard;