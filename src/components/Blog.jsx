import React, { useEffect, useState } from "react";
import client from "./utils/contentful";
import { Link } from "react-router-dom";
import LazyImage from "./LazyLoading";
import { motion } from "framer-motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: "blogPost" });
      setPosts(entries.items);

      // Collect unique tags
      const allTags = entries.items
        .flatMap((post) => post.fields.tags || [])
        .filter((v, i, a) => a.indexOf(v) === i);

      setTags(["All", ...allTags]);
    };

    fetchPosts();
  }, []);

  // Filter posts by tag
  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.fields.tags?.includes(selectedTag));

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset pagination on tag change
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  if (!posts)
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex justify-center items-center"
      >
        <div class="spinner"></div>
      </motion.div>
    );

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

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagChange(tag)}
            className={`px-4 py-0.5 rounded-lg border text-sm ${
              selectedTag === tag
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
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
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className=" text-md bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            {"<<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-2.5 py-0.5 text-md rounded-lg cursor-pointer ${
                currentPage === index + 1
                  ? "text-primary font-extrabold"
                  : "bg-white text-gray-700 "
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="rounded text-md bg-white hover:bg-gray-100 disabled:opacity-50"
          >
            {">>"}
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Blog;
