import React, { useState, useEffect } from "react";

async function fetchdata() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/blogs`, options);
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`);
      return null;
    }
    const response = await res.json();
    console.log(response)
    return response;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default function Blog() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await fetchdata();
      console.log("Fetched data:", data); // Log the data
      setBlog(data);
    }
    getData();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     jkj
    </div>
  );
}
