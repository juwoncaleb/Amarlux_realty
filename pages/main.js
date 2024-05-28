import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googleOneTap from "google-one-tap";
import jwt_decode from "jwt-decode";
import Header from "./components/Header";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Main() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const options = {
      client_id:
        "1024401846799-jvgpcseppebhsm1gv3o8ahecssgbj5gi.apps.googleusercontent.com", // required
      auto_select: false, // optional
      cancel_on_tap_outside: false, // optional
      context: "signin", // optional
    };

    googleOneTap(options, (response) => {
      // Log the response for debugging
      console.log(
        "Response from Google One Tap:",
        response,
        response.credential
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="discover_div">
          <div className="flex  hero_tex">
            <p className="head_text"> DISCOVER YOUR DREAM HOME</p>

            <div className="header_div mt-10 ">
              <div className="header_div_sub">
                <p className="hero_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <button className="prop_btn">VIEW PROPERTIES</button>
              </div>
            </div>
          </div>
          {/* <center>
            <img className="hero_img_" src="./land.jpg" />
          </center> */}
          <div className="hero_img flex justify-between">
            <img className="sky" src="./top.jpg" />
            <img className="pool" src="./poop.jpg" />
          </div>
          <div>
            <p className="head_text hero_subliminary">
              LUXURIOUS HOMES AWAIT- EXPLORE AN ARRAY OF EXQUISITE PROPERTIES
              FOR THE ULTIMATE LIVING EXPERIENCE
            </p>
          </div>
        </div>

        <div className="bg-black exclusive_listing">
          <p className="text-center exclusive_header mb-20">
            Exclusive Listing
          </p>

          <div className="house_1">
            <Link href= './property/2'>
              <img className="property_one" src="./land.jpg" />
              <div className=" flex justify-end">
                <div className="price_tag">
                  <div className="price_border">
                    <center>
                      <p className="listing_price">N400,000,000</p>
                      <p className="list_des">Megamound Estates</p>
                      <p className="list_des">Ikota Lekki</p>
                      <p className="list_des_sub">View</p>
                    </center>
                  </div>
                </div>{" "}
              </div>
            </Link>
          </div>

         <Link href= './property/1'>
         <div className="house_2">
            <img className="property_two"  src="./chev.jpg" />
            <div className=" flex justify-start">
              <div className="price_tag_2">
                <div className="price_border">
                  <center>
                    <p className="listing_price lek">N400,000,00</p>
                    <p className="list_des">Chevron Lekki</p>
                    <p className="list_des_sub">View</p>
                  </center>
                </div>
              </div>{" "}
            </div>
          </div>

         </Link>
         <Link href='./property/5'>
           <div className="house_1">
            <img className="property_three" src="./fine.jpg" />
            <div className=" flex justify-end">
              <div className="price_tag">
                <div className="price_border">
                  <center>
                    <p className="listing_price chevron_text">N220,000,000</p>
                    <p className="list_des">Chevron Lekki</p>
                    <p className="list_des_sub">View</p>
                  </center>
                </div>
              </div>{" "}
            </div>
          </div>
         </Link>
        
        </div>

        <div className="frame_div">
          <iframe
            className="iframeEmbed"
            src="https://killerplayer.com/watch/video/50811580-7bb0-46fa-b690-c263e7035a70"
            frameborder="0"
            allow="autoplay; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>
        <div className="landingpage_about flex justify-around gap-10">
          <img className="amarlux" src="./pro.jpg" />
          <div className="abt_amara">
            <p className="amarachi_header">Amarachi Odife</p>
            <p>
              Amarachi connections to the top 1% of the industry afford her
              access to the most coveted properties, many of which are never
              listed in the highly competitive Lagos luxury market.
            </p>
            <p className="mt-8">
              Amarachi attributes her success to her effective working
              relationships with her clients. Her first priority is always open,
              honest communication about her client’s particular needs and
              lifestyle. Finding the right property, or selling a home has its
              rewards, but for Amarachi, a life-long relationship with a client
              brings her genuine personal satisfaction
            </p>
            <button className="contact">Let's Talk</button>
          </div>
        </div>
        <div>
          <p className="article text-center">Article</p>
          <div className="grid md:flex frame_div gap-10 mt-20">
            <div>
              <img className="blog_img" src="./p1.jpg" />
              <p className="date_shade">July 18</p>
              <p className="blog_header">
                Real Estate Developers Announce Plans for Innovative Mixed-Use
                Project
              </p>
            </div>

            <div>
              <img className="blog_img" src="./p2.jpg" />
              <p className="date_shade">Aug 20</p>
              <p className="blog_header">
                Real Estate Developers Announce Plans for Innovative Mixed-Use
                Project
              </p>
            </div>

            <div>
              <img className="blog_img" src="./p2.jpg" />
              <p className="date_shade">Nov 9</p>
              <p className="blog_header">
                Real Estate Developers Announce Plans for Innovative Mixed-Use
                Project
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
