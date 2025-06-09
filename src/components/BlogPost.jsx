import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import client from "../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "./utils/contentful";
import LazyImage from "./LazyLoading";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import AffiliateSidebar from "./AffiliateSidebar";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="text-primary">{text}</strong>,
      [MARKS.BOLD]: (text) => <strong className="text-primary">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em className="text-secondary">{text}</em>,
      [MARKS.UNDERLINE]: (text) => (
        <span className="underline text-blue-600">{text}</span>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-4xl font-extrabold text-secondary mb-6">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{children}</h3>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-bold text-primary mb-4">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
          {children}
        </blockquote>
      ),
    },
  };

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

  useEffect(() => {
    if (post) {
      const fetchRelatedPosts = async () => {
        const relatedEntries = await client.getEntries({
          content_type: "blogPost",
          "fields.tags[in]": post.fields.tags,
          "sys.id[ne]": post.sys.id,
          limit: 2, // Optional: Limit to 3 related posts
        });
        setRelatedPosts(relatedEntries.items);
      };
      fetchRelatedPosts();
    }
  }, [post]);

  if (!post)
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex justify-center items-center my-36"
      >
        <div class="spinner"></div>
      </motion.div>
    );

  const { title, featuredImage, content, publishedDate } = post.fields;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto px-4 py-16 bg-gray-50 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 h-full"
    >
      <div>
        <Link
          to="/blog"
          className="bg-primary text-white text-xl p-2 relative top-8 left-2 rounded hover:bg-white hover:text-primary"
        >
          Back ⬅️
        </Link>
        <article>
          <div className="max-w-3xl mx-auto px-4 py-16 bg-gray-50">
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
            <div className="prose prose-lg prose-slate max-w-none">
              {documentToReactComponents(content, options)}
            </div>
          </div>
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="max-w-3xl mx-auto px-4 py-16">
              <div className="mb-12">
                <h2 className="text-start text-3xl font-bold text-gray-800">
                  Related Post
                </h2>
                <div className="bg-gray-200 w-44 h-0.5 rounded-full mt-2">
                  <div className="bg-primary h-0.5 w-14 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.sys.id} className="shadow-xl">
                    <Link to={`/blog/${relatedPost.fields.slug}`}>
                      <h3 className="text-xl font-semibold">
                        {relatedPost.fields.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-sm">
                      {new Date(
                        relatedPost.fields.publishedDate
                      ).toLocaleDateString()}
                    </p>
                    {relatedPost.fields.featuredImage?.[0]?.fields?.file
                      ?.url && (
                      <LazyImage
                        src={
                          relatedPost.fields.featuredImage[0].fields.file.url
                        }
                        alt={relatedPost.fields.title}
                        className="w-full h-32 object-cover rounded mt-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
      <div className="flex flex-col">
        <AffiliateSidebar
          title="Limited Offer 🎯"
          productName="Wireless Smart Earbuds"
          description="start your Tech journey today with a 10% discount and 100% scholarship available"
          image="https://images.seeklogo.com/logo-png/49/1/altschool-africa-logo-png_seeklogo-491918.png"
          link="https://portal.altschoolafrica.com/auth/signup?ref=1purnt"
          buttonText="Start Now"
        />
      </div>
    </motion.section>
  );
};

export default BlogPost;
