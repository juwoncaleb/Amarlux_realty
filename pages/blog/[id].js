import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

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


export default function blogPosts() {
  // GETTING THE ID FOR THE DYNAMIC RENDERING OF THE PAGE
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  const blogid = id - 1
  useEffect(() => {
    async function getData() {
      const data = await fetchdata(blogid);
      console.log("Fetched data:", data);
      setBlog(data);
    }
    getData();
  }, []);

  if (!blog || !blog.data) {
    return <div>Loading...</div>;
  }

  const blogPosts = blog.data[blogid];
  console.log(blogPosts)
  console.log(blogPosts)
  return (
    <div>
   HELLO
   <p>{blogPosts.attributes.Title}</p>
   {blogPosts.map((post, index) => (
          <div key={index}>
          
            {/* Render each blog post content here */}
            <BlocksRenderer content={post.attributes.blogContent} />
          </div>
        ))}

    </div>
  );
}
