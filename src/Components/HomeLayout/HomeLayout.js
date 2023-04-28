import FeaturedProducts from "../Products/FeaturedProducts/FeaturedProducts";
import Categories from "./Categories/Categories";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import Newsletter from "./Newsletter/Newsletter";

const HomeLayout = () => {
  return (
    <>
      <Categories />
      <Banner />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default HomeLayout;
