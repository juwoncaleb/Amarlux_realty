import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googleOneTap from "google-one-tap";
import jwt_decode from "jwt-decode";
import Header from "./components/Header";
import Link from "next/link";
import Footer from "./components/Footer";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Main() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const options = {
      client_id:
        "711392695392-53glhbgfacnh3a5tatq5978oolannhk5.apps.googleusercontent.com", // required
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
          }}
          className="language"
        >
          <div className="discover_div">
            <div className="flex  hero_tex">
              <p className="head_text"> DISCOVER YOUR DREAM HOME</p>

              <div className="header_div mt-10 ">
                <div className="header_div_sub">
                  <p className="hero_text">
                    Helping you find the perfect home — whether you’re buying, selling, or just exploring your options. 
                  </p>
                  <Link href="./listings">
                  <button className="contact_prop">VIEW PROPERTIES</button>

                  </Link>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.6,
                delay: 0.2,
              }}
              className=""
            >
              {" "}
              <div>
                <p className="head_text hero_subliminary">
                  LUXURIOUS HOMES AWAIT- EXPLORE AN ARRAY OF EXQUISITE
                  PROPERTIES FOR THE ULTIMATE LIVING EXPERIENCE
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className=" exclusive_listing">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <p className="text-center exclusive_header mb-20">
              Exclusive Listing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <div className="house_1">
              <Link >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <Link >
              <div className="house_2">
                <img className="property_two" src="./chev.jpg" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <Link >
              <div className="house_1">
                <img className="property_three" src="./fine.jpg" />
                <div className=" flex justify-end">
                  <div className="price_tag">
                    <div className="price_border">
                      <center>
                        <p className="listing_price chevron_text">
                          N220,000,000
                        </p>
                        <p className="list_des">Chevron Lekki</p>
                        <p className="list_des_sub">View</p>
                      </center>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="frame_div">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            <iframe
              className="iframeEmbed"
              src="https://killerplayer.com/watch/video/50811580-7bb0-46fa-b690-c263e7035a70"
              frameborder="0"
              allow="autoplay; gyroscope; picture-in-picture;"
              allowfullscreen
            ></iframe>
          </motion.div>
        </div>
        <div className="landingpage_about flex justify-around gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            {" "}
            <img className="amarlux" src="./pro.jpg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
            className=""
          >
            {" "}
            <div className="abt_amara">
              <p className="amarachi_header">Amarachi Odife</p>
              <p>
                Amarachi connections to the top 1% of the industry afford her
                access to the most coveted properties, many of which are never
                listed in the highly competitive Lagos luxury market.
              </p>
              <p className="mt-8">
                Amarachi attributes her success to her effective working
                relationships with her clients. Her first priority is always
                open, honest communication about her clients particular needs
                and lifestyle. Finding the right property, or selling a home has
                its rewards, but for Amarachi, a life-long relationship with a
                client brings her genuine personal satisfaction
              </p>
              <button className="contact">Let us Talk</button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
          className=""
        >
          {" "}
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
