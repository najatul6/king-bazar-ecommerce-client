
const BestDealCard = ({item}) => {
    const {brand,product_name,category,discount_price,price,features,rating,stock_availability,image_url}=item;
    return (
        <div>
            <div>
                <img src={image_url} alt={product_name} className="w-full" />
            </div>
        </div>
    );
};

export default BestDealCard;
