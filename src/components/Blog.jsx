import React, { useEffect, useState } from "react";
import client from "./utils/contentful";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: "blogPost" });
      setPosts(entries.items);
      //   console.log(
      //     "Fetched posts:",
      //     entries.items[0].fields.featuredImage[0].fields.file.url
      //   );
    };

    fetchPosts();
  }, []);

  if (!posts) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 my-5">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <div key={post.sys.id} className="bg-white shadow p-6 rounded-md">
            <Link to={`/blog/${post.fields.slug}`}>
              <h2 className="text-xl font-semibold text-primary hover:underline">
                {post.fields.title}
              </h2>
            </Link>
            <p className="text-[#6edf34]">{post.fields.slug}</p>
            {post.fields.featuredImage[0]?.fields?.file?.url && (
              <img
                src={post.fields.featuredImage[0].fields.file.url}
                alt={post.fields.title}
                className="w-full h-64 object-cover mt-4"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
