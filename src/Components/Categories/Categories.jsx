import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {
  const categories = [
    {
      title: "Wing Chair",
      products: "3,584 Products",
      image: "/src/assets/Categories/categories_1.png",
    },
    {
      title: "Wooden chair",
      products: "157 Products",
      image: "/src/assets/Categories/categories_2.png",
    },
    {
      title: "desk chair",
      products: "154 Products",
      image: "/src/assets/Categories/categories_3.png",
    },
       {
      title: "Park Bench",
      products: "154 Products",
      image: "/src/assets/Categories/categories_4.png",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <div className="container xl:max-w-screen-xl mx-auto">
        <SectionTitle title="Top Categories" mb="mb-11"></SectionTitle>

        <div className="slider-container features_slider w-full h-full">
          <Slider {...settings}>
            {categories?.map((category, index) => (
              <div key={index} className="p-4 h-[424px]">
                <div className="feature_image mb-4 relative">
                  <img
                    className="w-full h-[424px] rounded-lg object-cover"
                    src={category?.image}
                    alt={category?.title}
                  />

                  <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-4">
                    <h4 className="text-xl text-white font-semibold font-inter mb-2 capitalize"> {category?.title} </h4>
                    <p className="text-sm text-white capitalize font-inter font-normal"> {category?.products} </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
