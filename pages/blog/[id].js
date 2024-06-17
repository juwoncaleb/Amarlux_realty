import { useEffect, useState } from "react";
import { fetchEntries } from "../../lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RichText from "../components/Richtext";

export default function Blog({ entry }) {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    if (entry) {
      setIsLoading(false); // Set loading to false once entry is loaded
    }
  }, [entry]);

  if (isLoading) {
    return (
      <div className="loading_image">
        <center>
          <img className="logo_height" src="../../lg.png" alt="logo" />
        </center>
      </div>
    );
  }

  // Once isLoading is false and entry is available, render the blog content
  const { title, thumbnail, content } = entry.fields;
  const renderedContent = documentToReactComponents(content);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full p-8 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          {thumbnail && (
            <img
              src={thumbnail.fields.file.url}
              alt={title}
              className="w-full h-auto rounded-lg"
            />
          )}
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="prose">
          <RichText content={content} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const entries = await fetchEntries();
  const paths = entries.map((entry) => ({
    params: { id: entry.sys.id },
  }));

  return {
    paths,
    fallback: false, // Set to false to return a 404 if the ID is not found
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const entries = await fetchEntries();
  const entry = entries.find((entry) => entry.sys.id === id);

  return {
    props: {
      entry,
    },
  };
}
