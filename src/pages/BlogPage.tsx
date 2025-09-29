import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../tina/__generated__/client";
import { tinaField } from "tinacms/dist/react";
import { Blog, BlogConnectionQuery } from "../../tina/__generated__/types";

const BlogPage = () => {
  const [posts, setPosts] = useState<(Blog)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response: { data: BlogConnectionQuery } =
          await client.queries.blogConnection();
        const postData =
          response.data.blogConnection.edges
            ?.map((edge) => edge?.node)
            .filter((p): p is Blog => !!p) || [];
        // Sort posts by date in descending order
        postData.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading posts...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl mb-8 text-yellow-400">Blog</h1>
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._sys.filename} data-tina-field={tinaField(post)}>
              <Link to={`/blog/${post._sys.filename.replace('.mdx', '')}`}>
                <h2
                  data-tina-field={tinaField(post, "title")}
                  className="text-3xl font-bold text-yellow-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 mt-2">
                <span data-tina-field={tinaField(post, "author")}>
                  By {post.author}
                </span>{" "}
                |{" "}
                <span data-tina-field={tinaField(post, "date")}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;