import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as React from "react";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OffersCard from "./offerCard";

const SliderComponent = ({ colorStyle, textColor }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div style={{ backgroundColor: "red" }}>
      <img src={LeftArrow} alt="prevArrow" {...props} />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "3%" ,marginBottom:"5%"}}>
      <Box sx={{ flexGrow: 1, backgroundColor: colorStyle}}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding="6px"
        >
          <Grid item xs={4}>
            <div
              style={{
                textAlign: "left",
                paddingLeft: "2%",
                fontWeight: "bold",
                color: textColor,
              }}
            >
              Flash Sales Every day
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "25px",
                color: textColor,
              }}
            >
              Time Left: 08h : 36m : 50s{" "}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                textAlign: "right",
                paddingRight: "2%",
                color: textColor,
              }}
            >
              {"SEE All >"}{" "}
            </div>
          </Grid>
        </Grid>
      </Box>

      <Slider {...settings}>
        <div>
          <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
        <div>
        <OffersCard 
          productName="Tooth Paste"
          maxNumOfProducts={20}
          numOfProductsThatReduced={10}
          priceBefore={100.00}
          discountPersentatge={5}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
