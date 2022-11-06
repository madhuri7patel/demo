import React from "react";
import Navbartop from "../Components/Navbartop";
import "../CSS/Home.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Navbartop />
      {/* ///////////////////////carousel//////////////////////// */}
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.akshayapatra.org/apadmin/uploads/banners/midday_meals.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.akshayapatra.org/apadmin/uploads/banners/1583x55022.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.akshayapatra.org/includefiles/images/apdiwali20201583.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ///////////////////////carousel down////////////////////////// */}
      <div className="carouseldown">
        <div className="carouseldown1">
          <img
            className="carimg1"
            src="https://icon2.cleanpng.com/20180419/fwq/kisspng-midday-meal-scheme-school-government-of-india-prim-school-education-5ad87d34d3dbd5.7193787715241372688678.jpg"
            alt="one"
          />
          <p>MID-DAY MEALS</p>
          <p>Nourishing 2 Million childrens everyday</p>
          <button>SUPPORT US</button>
        </div>
        <div className="carouseldown2">
          <img
            className="carimg1"
            src="https://icon2.cleanpng.com/20180419/fwq/kisspng-midday-meal-scheme-school-government-of-india-prim-school-education-5ad87d34d3dbd5.7193787715241372688678.jpg"
            alt="one"
          />
          <p>FAMILY HAPPINESS KITS</p>
          <p>Provided food assistance to 2.13 lakh marginalised families</p>
          <button>SUPPORT US</button>
        </div>
        <div className="carouseldown3">
          <img
            className="carimg1"
            src="https://icon2.cleanpng.com/20180419/fwq/kisspng-midday-meal-scheme-school-government-of-india-prim-school-education-5ad87d34d3dbd5.7193787715241372688678.jpg"
            alt="one"
          />
          <p>ANGANWADI KIT PROGRAMME</p>
          <p>Care for would-be and new mothers, and children.</p>
          <button>SUPPORT US</button>
        </div>
        <div className="carouseldown4">
          <img
            className="carimg1"
            src="https://icon2.cleanpng.com/20180419/fwq/kisspng-midday-meal-scheme-school-government-of-india-prim-school-education-5ad87d34d3dbd5.7193787715241372688678.jpg"
            alt="one"
          />
          <p>SCHOOL REOPEN SANITISATION PROJECT</p>
          <p>Ensure safe return of children to school.</p>
          <button>SUPPORT US</button>
        </div>
      </div>
      {/* //////////////////////Impact Story/////////////////////// */}
      <div className="impact">
        <div>
          <img
            src="https://www.akshayapatra.org/apadmin/uploads/hopestories/Widget_for_org_340x2285.jpg"
            alt="impactimg"
          />
        </div>
        <div>
          <h4 style={{ color: "blue" }}>IMPACT STORY</h4>
          <p style={{ color: "green", fontWeight: "600", fontSize: "15px" }}>
            Krish’s Financial situation doesn’t dampen his spirit of becoming a
            Scientist
          </p>
          <p style={{ fontSize: "8px" }}>
            12-year-old Krish from Ahmedabad wants to be a Scientist
          </p>
          <button className="impbtn">READ MORE</button>
        </div>
      </div>
      {/* /////////////////////////////Circular divs///////////////////////// */}
      <div className="circulardivs">
        <div className="circu1">
          <img
            src="https://www.akshayapatra.org/includefiles/images/Covid-19%20relief%20meals_100x100.png"
            alt="onei"
          />
          <h5>23.81-Crore</h5>
          <h6>COVID-19 Relief Meals</h6>
        </div>
        <div className="circu2">
          <img
            src="https://www.akshayapatra.org/includefiles/images/Happiness%20kits_100x100.png"
            alt="two"
          />
          <h5>23.81-Crore</h5>
          <h6>COVID-19 Relief Meals</h6>
        </div>
        <div className="circu3">
          <img
            src="https://www.akshayapatra.org/includefiles/images/familyhappinesskit-home.png"
            alt="three"
          />
          <h5>23.81-Crore</h5>
          <h6>COVID-19 Relief Meals</h6>
        </div>
        <div className="circu4">
          <img
            src="https://www.akshayapatra.org/includefiles/images/Mid%20day%20meals_100x100.png"
            alt="four"
          />
          <h5>23.81-Crore</h5>
          <h6>COVID-19 Relief Meals</h6>
        </div>
        <div className="circu5">
          <img
            src="https://www.akshayapatra.org/includefiles/images/Anganwadi%20kits_100x100.png"
            alt="five"
          />
          <h5>23.81-Crore</h5>
          <h6>COVID-19 Relief Meals</h6>
        </div>
      </div>
      {/* ///////////////////////campain////////////////////// */}
      <div className="campaigns">
        <h4
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "blue",
            margin: "2rem",
          }}
        >
          Campaigns
        </h4>
        <div className="campdivs">
          <div>
            <img
              className="midimg"
              src="https://www.akshayapatra.org/apadmin/uploads/fundraisingcampaigns/tumb_details_page/Fundriasers-Page-Banners-451X299-B.jpg"
              alt="imgone"
            />
            <div style={{ display: "flex" }}>
              <p>RAISED: ₹ 13854595.71</p>
              <p>GOAL: ₹ 20000000.00</p>
            </div>
            <p>Akshaya Patra's First Crowd-funded Kitchen</p>
            <button className="cardbtn">DONATE NOW</button>
          </div>
          <div>
            <img
              className="midimg"
              src="https://www.akshayapatra.org/apadmin/uploads/fundraisingcampaigns/tumb_details_page/active-fundraiser.jpg"
              alt="imgtwo"
            />
            <div style={{ display: "flex" }}>
              <p>RAISED: ₹ 353723.00</p>
              <p>GOAL: ₹ 100000.00</p>
            </div>
            <p>Vandana's Art for Cause</p>
            <button className="cardbtn">DONATE NOW</button>
          </div>
          <div>
            <img
              className="midimg"
              src="https://www.akshayapatra.org/apadmin/uploads/fundraisingcampaigns/tumb_details_page/img8.jpg"
              alt="imgthree"
            />
            <div style={{ display: "flex" }}>
              <p>RAISED: ₹ 1980812.00</p>
              <p> GOAL: ₹ 1100000.00</p>
            </div>
            <p>1000 Hunger free children</p>
            <button className="cardbtn">DONATE NOW</button>
          </div>
        </div>
        <div className="bluecamp">
          <h5>CREATE A CAMPAIGNS TO SUPPORT AKSHAYA PATRA'S PROGRAMMS </h5>
        </div>
      </div>
      {/* //////////////////////////////greendiv//////////////////// */}
      <div className="greendiv">
        <div>
          <h4>THE AKSHAYA PATRA FOUNDATION</h4>
          <p style={{ color: "white" }}>
            The Akshaya Patra Foundation is a not-for-profit organisation
            headquartered in Bengaluru, India. The Foundation strives to
            eliminate classroom hunger by implementing the Mid-Day Meal
            Programme. It provides nutritious meals to children studying in
            Government schools and Government-aided schools. Akshaya Patra also
            aims to counter malnutrition and support right to education of
            children hailing from socio-economically challenging backgrounds.
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                backgroundColor: "white",
                paddingLeft: "1rem",
                width: "400px",
              }}
            >
              <h4>OUR VISION</h4>
              <p>
                NO CHILD IN INDIA SHALL BE DEPRIVED OF EDUCATION BECAUSE OF
                HUNGER.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "400px",
                padding: "10px",
              }}
            >
              <h4>OUR MISSION</h4>
              <p>TO FEED 3 MILLION CHILDREN EVERYDAY BY 2025</p>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////Our Latest News//////////////////////// */}
      <div className="newsdiv">
        <h1
          style={{ margin: "2rem", color: "blue", textDecoration: "underline" }}
        >
          Our Lastest News
        </h1>
        <div className="newscard">
          <div>
            <img
              src="https://www.akshayapatra.org/apadmin/uploads/news/thumbs/widget2.jpg"
              alt="card1"
            />
            <p>
              Narayana Murthy family contributes ₹10-crore towards Akshaya
              Patra’s COVID-19 Food Relief Service
            </p>
            <p style={{ color: "green" }}>Read More</p>
          </div>
          <div>
            <img
              src="https://www.akshayapatra.org/apadmin/uploads/news/thumbs/widget-org-340x228-115.jpg"
              alt="card2"
            />
            <p>TN Guv, CM lay foundation stone for kitchen in Chennai</p>
            <p style={{ color: "green" }}>Read More</p>
          </div>
          <div>
            <img
              src="https://www.akshayapatra.org/apadmin/uploads/news/thumbs/widget-org-340x228-113.jpg"
              alt="card3"
            />
            <p>
              The National Health Authority signs MoU with Akshaya Patra, Bharti
              Foundation and HelpAge India
            </p>
            <p style={{ color: "green" }}>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
