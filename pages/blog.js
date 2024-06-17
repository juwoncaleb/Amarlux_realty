import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "contentful";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchEntries } from "../lib/contentful";

export default function Blog({ entries }) {
  console.log(entries);
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/jz1dh0ty1g.jsonp";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup to remove scripts when component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/bv8p16rsnu.jsonp";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup to remove scripts when component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/kkv8m4suwu.jsonp";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup to remove scripts when component is unmounted
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="frame_div">
        <p className="exclusive_listings text-center">MEDIA & BLOGS</p>
        <div className="frame_div">
          <p className=" blog_head mb-10">VIDEO GALLERY</p>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-20 gap-10 ">
            <div className="">
              <div
                className="wistia_responsive_padding"
                style={{ padding: "177.78% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "90%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="wistia_embed wistia_async_kkv8m4suwu seo=true videoFoam=true"
                    style={{
                      height: "50%",
                      position: "relative",
                      width: "50%",
                    }}
                  >
                    <div
                      className="wistia_swatch"
                      style={{
                        height: "50%",
                        left: 0,
                        opacity: 0,
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        transition: "opacity 200ms",
                        width: "50%",
                      }}
                    >
                      <img
                        src="https://fast.wistia.com/embed/medias/kkv8m4suwu/swatch"
                        style={{
                          filter: "blur(5px)",
                          height: "50%",
                          objectFit: "contain",
                          width: "50%",
                        }}
                        alt=""
                        aria-hidden="true"
                        onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="wistia_responsive_padding"
                style={{ padding: "177.78% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="wistia_embed wistia_async_bv8p16rsnu seo=true videoFoam=true"
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      className="wistia_swatch"
                      style={{
                        height: "100%",
                        left: 0,
                        opacity: 0,
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        transition: "opacity 200ms",
                        width: "100%",
                      }}
                    >
                      <img
                        src="https://fast.wistia.com/embed/medias/bv8p16rsnu/swatch"
                        style={{
                          filter: "blur(5px)",
                          height: "100%",
                          objectFit: "contain",
                          width: "100%",
                        }}
                        alt=""
                        aria-hidden="true"
                        onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div
                className="wistia_responsive_padding"
                style={{ padding: "177.78% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <div
                    className="wistia_embed wistia_async_jz1dh0ty1g seo=true videoFoam=true"
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      className="wistia_swatch"
                      style={{
                        height: "100%",
                        left: 0,
                        opacity: 0,
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        transition: "opacity 200ms",
                        width: "100%",
                      }}
                    >
                      <img
                        src="https://fast.wistia.com/embed/medias/jz1dh0ty1g/swatch"
                        style={{
                          filter: "blur(5px)",
                          height: "100%",
                          objectFit: "contain",
                          width: "100%",
                        }}
                        alt=""
                        aria-hidden="true"
                        onLoad={(e) => (e.target.parentNode.style.opacity = 1)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <Link href="../../contact">
            <button className="inq_btn mt-20">View More</button>
          </Link>
        </center>
        <div className="frame_div">
          <p
            className="  blog_head
 mb-10 mt-20"
          >
            BLOG POST
          </p>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {entries.map((entry) => {
                const { title, thumbnail } = entry.fields;
                const entryId = entry.sys.id; // Get the entry ID
                return (
                  <div key={entryId} className="">
                    <Link href={`/blog/${entryId}`}>
                      <div>
                        {" "}
                        {/* Use a div wrapper instead of <a> */}
                        {thumbnail && (
                          <img
                            src={thumbnail.fields.file.url}
                            alt={title}
                            className="blog_thumbnail"
                          />
                        )}
                        <h3 className="blog_title text-xl font-bold">
                          {title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const entries = await fetchEntries();
  return {
    props: {
      entries,
    },
  };
}
