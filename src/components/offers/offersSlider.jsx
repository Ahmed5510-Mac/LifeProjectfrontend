import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as React from "react";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import OffersCard from "./offerCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDiscountId } from "../../store/offers/offersSlice";
import { getProducts } from "../../store/product/productSlice";

const SliderComponent = ({ colorStyle, textColor, discountId }) => {
  const { products } = useSelector((state) => state.products);
  const [sliderProducts, setSliderProducts] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


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

  const cardsInSlider =
    products &&
    products
      .filter((item) => {
        return item.discount._id === discountId;
      })
      .map((item, index) => {
        return (
          <div key={index}>
            <OffersCard
              product={item}
              productName={item.productName}
              maxNumOfProducts={item.quantity}
              numOfProductsThatReduced={2}
              priceBefore={item.price}
              image={item.image}
              discountPersentatge={item.discount.discountAmount}
              productId={item._id}
              description={item.description}
            />
          </div>
        );
      });

  return (
    <div style={{ marginTop: "3%", marginBottom: "5%" }}>
      <Box sx={{ flexGrow: 1, backgroundColor: colorStyle }}>
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
              <Link
                onClick={() => dispatch(setDiscountId(discountId))}
                style={{ color: `${textColor}` }}
                to="/offers"
              >
                See All <ArrowForwardIosOutlinedIcon fontSize="3%" />{" "}
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Slider {...settings}>{cardsInSlider}</Slider>
    </div>
  );
};

export default SliderComponent;
