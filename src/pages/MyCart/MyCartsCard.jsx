
const MyCartsCard = ({ mycarts }) => {
    const { productImg, productName, productBrand, productPrice } = mycarts

    return (
        <div>
            <div className="card bg-gray-900 shadow-xl text-white">
                <figure className='p-2'><img className='w-full h-[300px] rounded-t-xl' src={productImg} alt="{productName}" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p><span className='font-medium text-[#f16022]'>Brand :</span> {productBrand}</p>
                    <p><span className='font-medium text-[#f16022]'>Type :</span> {productPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default MyCartsCard;