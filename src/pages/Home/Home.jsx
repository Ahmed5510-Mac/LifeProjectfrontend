import Container from "@mui/material/Container";
import Slider from "../../components/Slider/Slider";

import Draft from "../../components/Draft/draft";
import SliderComponent from "../../components/offers/offers";
import OffersDraft from "../../components/offers/offersSingleDraftGrid";
import Deatails2 from "../details/details";
import SeeAllOffers from "../offers/offers"

const Home = () => {
  return (
    <>
      <Slider />
        
   <Container sx={{ marginY: 5 }}>
        <Draft
        imageSrc={"https://picsum.photos/1120/300"}
        />
      </Container>

      <Container>
        <OffersDraft colorStyle={"#e61601"} textColor={"white"} />
      </Container>
      <Container>
        <SliderComponent colorStyle={"#e61601"} textColor={"white"} />
      </Container>
      <Container>
        <OffersDraft colorStyle={"#FEE2CC"} textColor={"black"} />
      </Container>
      <Container>
        <SliderComponent colorStyle={"#FEE2CC"} textColor={"black"} />
      </Container>
      <Container>
        <OffersDraft colorStyle={"#00b4d8"} textColor={"white"} />
      </Container>
      <Container>
        <SliderComponent colorStyle={"#00b4d8"} textColor={"white"} />
      </Container>

      <Container>
        <Deatails2 />
      </Container>

      <Container sx={{ marginY: 5 }}>
        <SeeAllOffers />
      </Container>
    </>
  );
};

export default Home;
