import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import client from "../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "./utils/contentful";
import LazyImage from "./LazyLoading";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const entries = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug,
      });
      setPost(entries.items[0]);
    };

    fetchPost();
  }, [slug]);

  if (!post)
    return (
      <div className="flex justify-center items-center">
        <p className="text-center border-t-4 border-t-primary rounded-full h-10 w-10 animate-spin py-20"></p>
      </div>
    );

  const { title, featuredImage, content, publishedDate } = post.fields;

  return (
    <>
      <Link
        to="/blog"
        className="bg-primary text-white text-xl p-2 relative top-8 left-2 rounded hover:bg-white hover:text-primary"
      >
        Back ⬅️
      </Link>
      <section className="max-w-3xl mx-auto px-4 py-16 bg-gray-50">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          {new Date(publishedDate).toLocaleDateString()}
        </p>
        {featuredImage && (
          <LazyImage
            src={featuredImage[0]?.fields?.file?.url}
            alt={title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}
        <div className="prose">{documentToReactComponents(content)}</div>
      </section>
    </>
  );
};

export default BlogPost;
