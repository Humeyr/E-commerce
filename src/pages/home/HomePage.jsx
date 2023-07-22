import { Splide, SplideSlide } from "@splidejs/react-splide";
import Latest from "../../components/Latest";
import ProductsContainer from "../../components/ProductsContainer";
import Cta from "../../components/Cta";

const HomePage = () => {
  return (
    <>
       <div id="slider-container">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src="assets/images/slider_1.jpg" alt="Image 1" />
            <div className="slide-caption"></div>
          </SplideSlide>
          <SplideSlide>
            <img src="assets/images/slider_2.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="assets/images/slider_3.jpg" alt="Image 3" />
          </SplideSlide>
        </Splide>
      </div>

      <Latest />
      <ProductsContainer />
      <Cta />
    </>
  )
}

export default HomePage
