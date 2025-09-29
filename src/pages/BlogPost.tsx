import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '~tina/__generated__/client';
import { Blog } from '~tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';

const components = {
  Heading: (props: any) => <h2 className="text-3xl font-bold my-4 text-yellow-300">{props.h}</h2>,
  TextBlock: (props: any) => <p className="text-lg my-4">{props.text}</p>,
  Blockquote: (props: any) => (
    <blockquote className="border-l-4 border-yellow-400 pl-4 my-4">
      <div className="prose prose-invert">
        <TinaMarkdown content={props.children} />
      </div>
      {props.author && <cite className="block text-right mt-2 not-italic text-gray-400">- {props.author}</cite>}
    </blockquote>
  ),
  Image: (props: any) => (
    <img src={props.src} alt={props.alt} className="my-4 rounded-lg" />
  ),
  p: (props: any) => <p className="text-lg my-4">{props.children}</p>,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        setLoading(true);
        try {
          const response = await client.queries.blog({
            relativePath: `${slug}.mdx`,
          });
          setPost(response.data.blog);
        } catch (error) {
          console.error(`Error fetching post: ${slug}`, error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center p-8">Post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 data-tina-field={tinaField(post, 'title')} className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">{post.title}</h1>
      <div className="text-gray-400 mb-8">
        <span data-tina-field={tinaField(post, 'author')}>By {post.author}</span> | <span data-tina-field={tinaField(post, 'date')}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div data-tina-field={tinaField(post, 'body')} className="prose prose-invert max-w-none">
        <TinaMarkdown content={post.body} components={components} />
      </div>
    </div>
  );
};

export default BlogPost;