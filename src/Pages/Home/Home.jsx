import { Ban } from "lucide-react";
import Banner from "../../Components/Banner/Banner";
import Delivery from "../../Components/Delivery/Delivery";
import Brand from "../../Components/Brand/Brand";
import Features from "../../Components/Features/Features";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import Client from "../../Components/Client/Client";
import Recent from "../../Components/Recent/Recent";

const Home = () => {
  return (
    <div>
      {/* Banner Component */}
      <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
        <Banner />
      </div>

      {/* Delivery Component */}
      <div className="delivery_component w-full min-h-[#150px]  ">
        <Delivery />
      </div>

      {/* Brand Component */}
      <div className="brand flex items-center h-[171px] justify-center w-full bg-white ">
        <Brand />
      </div>

      {/* Features Component */}
      <div className="w-full flex items-center justify-center bg-white mb-[80px]">
        <Features />
      </div>

      {/* Categories component */}
      <div className="w-full flex items-center justify-center bg-white mb-[80px]">
        <Categories />
      </div>

      {/* Product Component */}
      <div className="w-full flex items-center justify-center pb-[80px]">
        <Product />
      </div>

      {/* Client say component */}
      <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px]  pb-[80px] pt-[80px]">
        <Client />
      </div>

      {/* Recent Component */}
      <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
        <Recent />
      </div>
    </div>




  );
};

export default Home;
