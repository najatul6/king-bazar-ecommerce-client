import Banner from "../../common/Banner/Banner";
import { Faq } from "../../common/Faq/Faq";
import BestDeal from "../BestDeal/BestDeal";
// import BestDeal from "../BestDeal/BestDeal";
import Brands from "../Brands/Brands";
// import Categorys from "../Categorys/Categorys";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <div className="my-10">
        <BestDeal />
      </div>
      <hr />
      <Faq></Faq>
      {/* <BestDeal></BestDeal> */}
      {/* <Categorys ></Categorys> */}
    </div>
  );
};

export default Home;
