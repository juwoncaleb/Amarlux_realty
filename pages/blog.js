import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

async function fetchdata() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",
      options
    );
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      return null;
    }
    const response = await res.json();
    console.log(response);
    return response;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
export default function Blog() {
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
 const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchdata();
      console.log("Fetched data:", data);
      setBlog(data);
    }
    getData();
  }, []);

  if (!blog || !blog.data) {
    return <div>Loading...</div>;
  }
  const blogPosts = blog.data;

  return (
    <div className="frame_div">
      <p className="exclusive_listings text-center">MEDIA & BLOGS</p>
      <div className="frame_div">
        <p className=" blog_head mb-10">VIDEO GALLERY</p>

        <div className="grid grid-cols-3 mb-20 gap-2 ">
          <div className="vidj">
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
                  style={{ height: "50%", position: "relative", width: "50%" }}
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
          <div className="vidj">
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
          <div className="vidj">
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
        {blogPosts.map((post, index) => (
          <div key={index}>
            {/* Render each blog post content here */}
          </div>
        ))}
         <div className="grid frame_div grid-cols-1 gap-20 lg:grid-cols-3 ">
          {blogPosts.map((post) => {
            const { Title, blogContent, blogImages, Thumbnail, createdAt } =
              post.attributes;
            const thumbnailUrl = Thumbnail?.data?.attributes?.url
              ? `http://127.0.0.1:1337${Thumbnail.data.attributes.url}`
              : "";

            return (
              <div key={post.id}>
                
                <div>
                    <Link href={`/blog/${post.id}`}>
                      {thumbnailUrl && (
                        <img
                          preload="true"
                          className="blog_thumbnail"
                          src={thumbnailUrl}
                          alt={Title}
                        />
                      )}
                      <h3 className="blog_title">{Title}</h3>
                      <p className="blog_date">
                        {new Date(createdAt).toLocaleDateString()}
                      </p>
                    </Link>
                  </div>
              </div>
            );
          })}
        </div> 
      </div>
    </div>
  );
}
