import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  if (!post) return <p className="text-center py-20">Loading...</p>;

  const { title, featuredImage, content, publishedDate } = post.fields;

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
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
  );
};

export default BlogPost;
