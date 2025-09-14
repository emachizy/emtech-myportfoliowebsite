import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "./utils/contentful";
import LazyImage from "./LazyLoading";
import { motion } from "framer-motion";

const LatestBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "blogPost",
          order: "-fields.publishedDate",
          limit: 3, // 👈 Only 3 posts
        });
        setPosts(entries.items);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className=" pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="w-[90%] mx-auto">
        {/* Section Heading */}

        <div className="max-w-4xl mx-auto mb-6">
          <p className="p text-primary text-center">Popular Blogs</p>
          <h2 className="h2 text-gray-800 md:max-w-4xl mx-auto">Latest Blog</h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="bg-primary w-14 h-0.5"></div>
            <div className="bg-primary w-2 h-0.5"></div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {post.fields.featuredImage?.[0]?.fields?.file?.url ? (
                  <LazyImage
                    src={post.fields.featuredImage[0].fields.file.url}
                    alt={post.fields.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-52 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(post.fields.publishedDate).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "short", day: "numeric" }
                  )}
                </div>

                <Link to={`/blog/${post.fields.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.fields.title}
                  </h3>
                </Link>

                {post.fields.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.fields.excerpt}
                  </p>
                )}

                <Link
                  to={`/blog/${post.fields.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-secondaryfont-medium transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="px-6 py-3 bg-gradient-to-r from-black to-yellow-600 hover:from-yellow-700 hover:to-black text-white rounded-full font-medium hover:bg-secondary transition-colors duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
