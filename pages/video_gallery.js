import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Videogallery() {
  return (
    <div>
      <Header />
      <div className="gallery">
        <center>
          <div>
            <p className="about_header text-left">VIDEO GALLERY </p>
            <div className="">
              <p className="austin_number_sub text-left">
                Join Kumara for Exclusive Property Tours Throughout Austin.
              </p>
            </div>
          </div>
        </center>
      </div>
      <div className="grid video_grid gap-6 mt-20 grid-cols-3">
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/UJ1Z6g0HW8U?si=cLuqXOW1Ln1V7_uz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/6BX9pm0Ryew?si=DBbrlYHcLu4tZ8BK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/j0HCk5K505w?si=11eHH9vDowA52sR4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/AdrC3W2wucY?si=KmysVdsSGm25xGZH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/SJ_nwcCAUKQ?si=HABhbz7eS-jwtN-O"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid">
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/7aWWbOzqsIg?si=JyGnN37a3yCSFGi1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
