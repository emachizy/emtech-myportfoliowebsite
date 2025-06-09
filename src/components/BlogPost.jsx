import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import client from "../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "./utils/contentful";
import LazyImage from "./LazyLoading";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

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
        <div className="prose prose-lg prose-slate max-w-none">
          {documentToReactComponents(content, options)}
        </div>
      </section>
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-start text-3xl font-bold text-gray-800">
              Related Post
            </h2>
            <div className="bg-gray-200 w-44 h-0.5 rounded-full mt-2">
              <div className="bg-primary h-0.5 w-14 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.sys.id}>
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
                {relatedPost.fields.featuredImage?.[0]?.fields?.file?.url && (
                  <LazyImage
                    src={relatedPost.fields.featuredImage[0].fields.file.url}
                    alt={relatedPost.fields.title}
                    className="w-full h-32 object-cover rounded mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;
