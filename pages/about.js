import React from "react";
import Header from "./components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";


export default function About() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    
  };
  return (
    <div>
    <Header />
      <div className="about_bg">
        <div>
          <p className="about_header">REPRESENTING AUSTIN FINEST</p>
          <div className="">
            <p className="austin_number_sub">
              Consistently Honored Among Austin’s Select Multi-million Dollar
              Producers.
            </p>
          </div>
        </div>
      </div>
      <div className="flex kim_bio gap-10">
        <img className="kim_ful" src="./kum_ful.jpg" />
        <div>
          <p className="about_head">KUMARA WILCOXON</p>{" "}
          <p className="kim_information">
            With over 20 years of experience, Kumara Wilcoxon is the face of
            Austin’s luxury real estate market, with unparalleled passion and
            commitment to the Austin Lifestyle. As the #1 agent in Austin, TX,
            #35 agent in the country, and top producer company-wide for Kuper
            Sotheby’s International Realty, Kumara has sold over $1.6 Billion
            throughout her career. Consistently honored among Austin’s select
            multi-million dollar producers, she has been ranked #1 by Austin
            Business Journal for Residential Real Estate Agents for the last
            three consecutive years and is a distinguished member of both
            Austin’s Elite 25 and Luxury League. Her connections to the top 1%
            of the industry affords her access to the most coveted properties,
            many of which are never listed in the highly competitive Austin
            luxury market <br /> <br />
          
          
          </p>
        </div>
      </div>
      <div className=" mt-10 ">
        <div className="spotlight_text">
          <p className="Meet">
            VIDEO <br /> GALLERY <br /> </p>
            <p className="view_more">View More</p>
          
        </div>
        <iframe
          className="video_gallery"
          src="https://killerplayer.com/watch/video/378df4bb-21e7-4d24-b12e-b12ed02aeebe"
          frameborder="0"
          allow="autoplay; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex justify-between kum_communi  mt-16">
        <img className="kim_ful_walk" src="./kum_leg.jpg" />
        <div className="kum_style">
          <p className="about_head">KUMARA WILCOXON</p>{" "}
          <p className="kim_information">
            Kumara attributes her success to her effective working relationships
            with her clients. Her first priority is always open, honest
            communication about her client’s particular needs and lifestyle.
            Finding the right property, or selling a home has its rewards, but
            for Kumara, a life-long relationship with a client brings her
            genuine personal satisfaction. Above all, Kumara is passionate about
            improving the lives of her clients by helping them find properties
            that bring them joy and fulfillment. She understands the value of a
            real estate investment in a way that few can articulate, using her
            uncanny intuition to maximize returns for her clients. When listing
            a client’s home, she evaluates the market opportunities, encouraging
            her clients to be smart and patient to achieve the best outcome.
          </p>
        </div>
      </div>
      <div className="fixed-background">
        <center className="stats">
          <p className="results"> PROVEN RESULTS</p>
          <div className="state_div">
            <p className="results_statment mb-8 mt-8">
              With over 20 years of experience, Kumara Wilcoxon is the face of
              Austin’s luxury real estate market, with unparalleled passion and
              commitment to the Austin Lifestyle. As the #1 Realtor in Austin,
              TX and top producer company-wide for Kuper Sotheby’s for six
              consecutive years, Kumara has sold over $1.3 Billion throughout
              her career.
            </p>
            <div className="flex justify-around mt-14 mb-10">
              <div>
                <p className="stat_header">$2B</p>
                <p className="stat_sub">in Career Sales</p>
              </div>
              <div>
                <p className="stat_header">$389M</p>
                <p className="stat_sub">Total Sales in 2023</p>
              </div>
              <div>
                <p className="stat_header">#1</p>
                <p className="stat_sub">Realtor in Austin</p>
              </div>
            </div>
          </div>
        </center>
      </div>
      <div className="carousel_inventory">
        <p className="Meet mb-6">
          <br /> KUMARAS CURRENT <br /> INVENTORY
        </p>{" "}
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img className="inventory" src="./green.jpg" />
            </div>
            <div>
              <img className="inventory" src="./austin_text.jpg" />
            </div>
            <div>
              <img className="inventory" src="./pap.jpg" />
            </div>
            <div>
              <img className="inventory" src="./sky.jpg" />
            </div>
            <div>
              <img className="inventory" src="./type.jpg" />
            </div>
            <div>
              <img className="inventory" src="./vt.jpg" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="kumabac">
        <img className="kuma_bana  " src="./lg_white.png" />
        <div className="kuma_bana_text">
          Whether buying or selling, Kumara delivers service beyond comparison.
          Kumara works closely with each of her clients to find their ultimate
          property in the most premier locations, and secures the best deal.
          When listing real estate, Kumara maximizes each property’s market
          value with her unmatched marketing strategy.
        </div>
        <div className="mt-10">
          <button className="work_btn">Work with Kumara</button>
          <button className="search_btn">Home search</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
