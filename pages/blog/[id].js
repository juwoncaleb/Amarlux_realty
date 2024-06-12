import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Header from "../components/Header";
import Footer from "../components/Footer";

// FETCHING DATA FROM STRAPI
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

export default function BlogPosts() {
  // GETTING THE ID FOR THE DYNAMIC RENDERING OF THE PAGE
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchdata();
      console.log("Fetched data:", data);
      setBlog(data);
    }
    if (id) {
      getData();
    }
  }, [id]);

  if (!blog || !blog.data) {
    return <div className="loading_image">
    <center>
      <img className="logo_height" src="../../lg.png" alt="logo" />
    </center></div>
  }

  const blogid = id - 1;
  let blogPosts;
  if (blog.data[blogid]) {
    blogPosts = blog.data[blogid].attributes;
  } else {
    console.error("Blog data or blog ID is not defined properly");
    return <div>Blog not found</div>; // Handle the error case, maybe redirect or show a user-friendly message
  }
  console.log("This is the blog you need:", blogPosts);
  const { Thumbnail, Title } = blog.data[blogid].attributes;
  const blogHeader= Title
  const thumbnailUrl = Thumbnail?.data?.attributes?.url
    ? `http://127.0.0.1:1337${Thumbnail.data.attributes.url}`
    : "";

  return (
    <div>
      <Header />
      <div className="prose mx-auto my-10 mt-20">
        <p className="text-center blogHeader">{blogHeader}</p>
        <img src={thumbnailUrl} />
        {blogPosts && blogPosts.blogContent ? (
          <BlocksRenderer content={blogPosts.blogContent} />
        ) : (
          <div>No content available</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
