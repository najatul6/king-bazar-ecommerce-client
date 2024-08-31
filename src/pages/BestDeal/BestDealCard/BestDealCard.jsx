import PropTypes from "prop-types";
const BestDealCard = ({item}) => {
    const {product_name,discount_price,price,features,image_url}=item;
    return (
        <div>
            <div>
                <img src={image_url} alt={product_name} className="w-full h-[317px]" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-white py-2">
                    {product_name}
                </h2>
                <ul>
                    <p className="font-bold underline">Features :</p>
                    {features?.map((feature,idx)=><li key={idx}> &#x2609; {feature}</li>)}
                </ul>
                <p>Price: $<strike className="text-red-500">{price}</strike></p>
                {/* <p>Discount Price: ${discount_price}</p> */}
            </div>
        </div>
    );
};

BestDealCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default BestDealCard;
