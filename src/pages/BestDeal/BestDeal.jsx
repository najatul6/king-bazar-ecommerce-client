import BestDealCard from "./BestDealCard/BestDealCard";

const BestDeal = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10 text-[#f16022]">Best Deals</h2>
            <hr  className="h-1 w-1/2 bg-[#f16022] border-none rounded-xl mx-auto mb-7"/>
            <BestDealCard></BestDealCard>
        </div>
    );
};

export default BestDeal;