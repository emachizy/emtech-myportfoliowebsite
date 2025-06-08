import React, { useEffect, useState } from "react";
import client from "./utils/contentful";
import { Link } from "react-router-dom";
import LazyImage from "./LazyLoading";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: "blogPost" });
      setPosts(entries.items);
      //   console.log("Fetched posts:", entries.items);
    };

    fetchPosts();
  }, []);
  //   const { publishedDate } = posts.fields;

  if (!posts) return <p className="text-center">Loading...</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 my-5 bg-gray-50">
      <div className="mb-12">
        <h2 className="text-start text-3xl font-bold text-gray-800">Blog</h2>
        <div className="bg-gray-200 w-15 h-0.5 rounded-full mt-2">
          <div className="bg-primary h-0.5 w-4 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.sys.id} className="bg-white shadow p-6 rounded-md">
            {post.fields.featuredImage[0]?.fields?.file?.url && (
              <LazyImage
                src={post.fields.featuredImage[0].fields.file.url}
                alt={post.fields.title}
                className="w-full h-64 object-cover mt-4"
              />
            )}
            <Link to={`/blog/${post.fields.slug}`}>
              <h2 className="text-xl font-semibold text-primary hover:underline pb-4">
                {post.fields.title}
              </h2>
            </Link>
            {/* <p className="text-[#6edf34] py-4">{post.fields.slug}</p> */}
            <p className="text-gray-500 text-sm">
              {new Date(post.fields.publishedDate).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
