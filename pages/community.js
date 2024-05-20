import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";

export default function Community() {
  return (
    <div>
      <Header />
      <div className="community">
        <center>
          <div>
            <p className="about_header text-left">AUSTIN COMMUNITIES </p>
            <div className="">
              <p className="austin_number_sub text-left">
                Searching for Austin real estate? Realtor & agent, Kumara
                Wilcoxon, finds property, houses, condos & homes for sale in
                Lake Austin, Westlake & Tarrytown, TX.
              </p>
            </div>
          </div>
        </center>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 blogposts">
        <Link href="./../community/lake">
          <div>
            <img src="./fore.png" />
            <p className="blog_header">LAKE AUSTIN</p>
            <p className="read_more">Read More</p>
          </div>
        </Link>
        <Link href="./../community/oldtown">
          <div>
            <img src="./old.png" />

            <p className="blog_header">OLD WEST AUSTIN</p>

            <p className="read_more">Read More</p>
          </div>
        </Link>
        <Link href="./../community/downtown">
          <div>
            <img src="./city.png" />

            <p className="blog_header">DOWNTOWN AUSTIN</p>

            <p className="read_more">Read More</p>
          </div>
        </Link>

        <Link href='./../community/west'>
          <div>
            <img src="./west.png" />

            <p className="blog_header">WEST LAKE HILLS</p>

            <p className="read_more">Read More</p>
          </div>
        </Link>
        <Link href="./../community/tarry">
          <div>
            <img src="./tarry.png" />

            <p className="blog_header">TARRY TOWN</p>

            <p className="read_more">Read More</p>
          </div>
        </Link>
        <Link href="./../community/Travis">
          <div>
            <img src="./height.png" />

            <p className="blog_header">TRAVIS HEIGHTS</p>
            <p className="read_more">Read More</p>
          </div>
        </Link>
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
