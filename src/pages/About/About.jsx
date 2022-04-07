import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img1 from "../../assets/img1.jpg";
import Card from "../../components/Card/Card";

const About = () => {
  return (
    <>
      <div className="container">


        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    
  </button>
</div>





          <div>
        <h1>Who We Are</h1>
        <p>
          development and production of dental curing light, dental chair
          control system, dental burs, dental led lamp, dental endo products and
          so on of the company. The company has rich experience
          capable sales team and strong manufacturing strength. Since its
          establishment it has been continuously developing new products. In the
          future, we will continue to work hard and innovate constantly. We will
          uphold our mission: Always working for better quality and better life!
        </p>
        </div>
        <div>
          <h2>our team</h2>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Card
                name="Research"
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img5}
              />
            </div>
            <div className="col-md-6 col-sm-12">
             
              <Card
                name=" Development "
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img6}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              
              <Card
                name="Development"
                description=" We have our own engineers for both software and hardware why ODM and OEM service are welcome for us."
                image={img7}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              
              <Card
                image={img1}
                name="Sales department"
                description=" Stable and high efficiency sales group are very 
                 communicating skills and rich experience"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
