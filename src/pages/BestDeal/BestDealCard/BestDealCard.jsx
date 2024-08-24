
const BestDealCard = ({item}) => {
    const {brand,product_name,category,discount_price,price,features,rating,stock_availability,image_url}=item;
    return (
        <div>
            <div>
                <img src={image_url} alt={product_name} className="w-full" />
            </div>
            <div>
                <h2>
                    {product_name}
                </h2>
                <ul>
                    {features?.map((feature,idx)=><li key={idx}>{feature}</li>)}
                </ul>
                <p>Price: {price}</p>
                <p>Discount Price: {discount_price}</p>
            </div>
        </div>
    );
};

export default BestDealCard;
