import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "./utils/contentful";
import LazyImage from "./LazyLoading";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { motion, AnimatePresence } from "framer-motion";
import AffiliateSidebar from "./AffiliateSidebar";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);

  // Enhanced rich text rendering options
  const richTextOptions = useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: (text) => (
          <strong className="font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {text}
          </strong>
        ),
        [MARKS.ITALIC]: (text) => (
          <em className="italic text-gray-700">{text}</em>
        ),
        [MARKS.UNDERLINE]: (text) => (
          <span className="underline decoration-blue-500 underline-offset-2 text-blue-700">
            {text}
          </span>
        ),
        [MARKS.CODE]: (text) => (
          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border">
            {text}
          </code>
        ),
      },
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => (
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
            {children}
          </h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 pb-2 border-b border-gray-200">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 mt-8">
            {children}
          </h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
          <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
            {children}
          </h4>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="text-lg leading-relaxed text-gray-700 mb-6 first:mt-0">
            {children}
          </p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul className="list-none space-y-2 mb-6 ml-6">
            {React.Children.map(children, (child, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></span>
                <div>{child}</div>
              </motion.li>
            ))}
          </ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 ml-6 text-gray-700">
            {children}
          </ol>
        ),
        [BLOCKS.QUOTE]: (node, children) => (
          <blockquote className="relative border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-transparent pl-6 pr-6 py-4 my-8 italic text-gray-700 rounded-r-lg">
            <div className="absolute top-2 left-2 text-blue-400 text-4xl font-serif">
              "
            </div>
            <div className="relative z-10">{children}</div>
          </blockquote>
        ),
        [BLOCKS.HR]: () => (
          <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { file, title } = node.data.target.fields;
          if (file.contentType.startsWith("image/")) {
            return (
              <div className="my-8">
                <LazyImage
                  src={file.url}
                  alt={title || "Embedded image"}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {title && (
                  <p className="text-center text-sm text-gray-500 mt-2 italic">
                    {title}
                  </p>
                )}
              </div>
            );
          }
          return null;
        },
        [INLINES.HYPERLINK]: (node, children) => (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline decoration-blue-400 underline-offset-2 transition-colors duration-300"
          >
            {children}
          </a>
        ),
      },
    }),
    []
  );

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");
      if (!article) return;

      const scrollTop = window.scrollY;
      const docHeight = article.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);

      setReadingProgress(Math.min(100, Math.max(0, scrollPercentRounded)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const entries = await client.getEntries({
          content_type: "blogPost",
          "fields.slug": slug,
        });

        if (entries.items.length === 0) {
          setError("Post not found");
          return;
        }

        setPost(entries.items[0]);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      const fetchRelatedPosts = async () => {
        try {
          const relatedEntries = await client.getEntries({
            content_type: "blogPost",
            "fields.tags[in]": post.fields.tags,
            "sys.id[ne]": post.sys.id,
            limit: 3,
            order: "-fields.publishedDate",
          });
          setRelatedPosts(relatedEntries.items);
        } catch (err) {
          console.error("Error fetching related posts:", err);
        }
      };
      fetchRelatedPosts();
    }
  }, [post]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-ping"></div>
        </div>
        <p className="text-gray-600 animate-pulse">Loading article...</p>
      </motion.div>
    );
  }

  if (error || !post) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="text-center">
          <svg
            className="w-24 h-24 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.651"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Article not found
          </h2>
          <p className="text-gray-500 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </motion.div>
    );
  }

  const { title, featuredImage, content, publishedDate, tags, excerpt } =
    post.fields;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link
          to="/blog"
          className="group flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 border border-white/20"
        >
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back</span>
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            id="article-content"
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden"
          >
            {/* Article Header */}
            <div className="relative">
              {featuredImage?.[0]?.fields?.file?.url ? (
                <div className="relative h-96 overflow-hidden">
                  <LazyImage
                    src={featuredImage[0].fields.file.url}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100"></div>
              )}

              {/* Article Meta Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* Title and Meta */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {title}
                </h1>

                {excerpt && (
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {excerpt}
                  </p>
                )}

                <div className="flex items-center gap-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
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
                    <time dateTime={publishedDate}>
                      {new Date(publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      {Math.ceil(
                        content.content.reduce((acc, node) => {
                          if (node.nodeType === "paragraph") {
                            return (
                              acc +
                              (node.content?.[0]?.value?.split(" ").length || 0)
                            );
                          }
                          return acc;
                        }, 0) / 200
                      )}{" "}
                      min read
                    </span>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg prose-gray max-w-none">
                {documentToReactComponents(content, richTextOptions)}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Share this article
                </h3>
                <div className="flex gap-3">
                  {[
                    {
                      name: "Twitter",
                      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                      color: "hover:bg-blue-500",
                    },
                    {
                      name: "Facebook",
                      icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                      color: "hover:bg-blue-600",
                    },
                    {
                      name: "LinkedIn",
                      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z",
                      color: "hover:bg-blue-700",
                    },
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`p-3 bg-gray-100 text-gray-600 rounded-full transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                      title={`Share on ${social.name}`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Affiliate Sidebar */}
            <div className="sticky top-6">
              <AffiliateSidebar
                title="🚀 Level Up Your Skills"
                productName="Premium Tech Courses"
                description="Master modern web development with hands-on projects and expert guidance. Join thousands of successful developers!"
                image="https://images.seeklogo.com/logo-png/49/1/altschool-africa-logo-png_seeklogo-491918.png"
                link="https://portal.altschoolafrica.com/auth/signup?ref=1purnt"
                buttonText="Start Learning"
              />
            </div>
          </motion.aside>
        </div>

        {/* Related Posts */}
        <AnimatePresence>
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-20"
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.sys.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/20"
                  >
                    <div className="relative overflow-hidden">
                      {relatedPost.fields.featuredImage?.[0]?.fields?.file
                        ?.url ? (
                        <LazyImage
                          src={
                            relatedPost.fields.featuredImage[0].fields.file.url
                          }
                          alt={relatedPost.fields.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

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
                        {new Date(
                          relatedPost.fields.publishedDate
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                      <Link to={`/blog/${relatedPost.fields.slug}`}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                          {relatedPost.fields.title}
                        </h3>
                      </Link>

                      {relatedPost.fields.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedPost.fields.excerpt}
                        </p>
                      )}

                      <Link
                        to={`/blog/${relatedPost.fields.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                      >
                        Read more
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
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BlogPost;
