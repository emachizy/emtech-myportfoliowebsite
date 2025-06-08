import React, { useEffect, useState } from "react";
import client from "./utils/contentful";
import { Link } from "react-router-dom";
import LazyImage from "./LazyLoading";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: "blogPost" });
      setPosts(entries.items);
    };

    fetchPosts();
  }, []);

  if (!posts)
    return (
      <div className="flex justify-center items-center">
        <p className="text-center border-t-4 border-t-primary rounded-full h-10 w-10 animate-spin py-20"></p>
      </div>
    );

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto px-4 py-12 my-5 bg-gray-50"
    >
      <div className="mb-12">
        <h2 className="text-start text-3xl font-bold text-gray-800">Blog</h2>
        <div className="bg-gray-200 w-15 h-0.5 rounded-full mt-2">
          <div className="bg-primary h-0.5 w-4 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div
            key={post.sys.id}
            className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-700  rounded-md"
          >
            {post.fields.featuredImage?.[0]?.fields?.file?.url && (
              <LazyImage
                src={post.fields.featuredImage[0].fields.file.url}
                alt={post.fields.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <Link to={`/blog/${post.fields.slug}`}>
                <h2 className="text-xl font-semibold text-primary hover:underline pb-4">
                  {post.fields.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm">
                {new Date(post.fields.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`px-3 py-1 text-sm rounded-full ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </motion.section>
  );
};

export default Blog;
