
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
                    {features?.map(feature=><li >{feature}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default BestDealCard;
