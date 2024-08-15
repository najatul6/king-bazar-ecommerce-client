import Banner from "../../common/Banner/Banner";
import { Faq } from "../../common/Faq/Faq";
// import BestDeal from "../BestDeal/BestDeal";
import Brands from "../Brands/Brands";
// import Categorys from "../Categorys/Categorys";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <hr />
            <Faq></Faq>
            {/* <BestDeal></BestDeal> */}
            {/* <Categorys ></Categorys> */}
        </div>
    );
};

export default Home;