import React, { useState, useEffect } from "react";

async function fetchdata() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export default function Blog() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchdata();
      setBlog(data);
    }
    getData();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }
  console.log(blog);

  return (
    <div>
     jj
    </div>
  );
}
