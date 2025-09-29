import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '~tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import { Blog, BlogQuery } from '../../tina/__generated__/types';

const components = {
  // eslint-disable-next-line
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  // eslint-disable-next-line
  h2: (props: any) => <h2 className="text-3xl font-bold my-4" {...props} />,
  // eslint-disable-next-line
  h3: (props: any) => <h3 className="text-2xl font-bold my-4" {...props} />,
  p: (props: any) => <p className="text-lg my-4" {...props} />,
  // eslint-disable-next-line
  blockquote: (props: any) => <blockquote className="border-l-4 border-gray-500 pl-4 italic" {...props} />,
  // eslint-disable-next-line
  code: (props: any) => <code className="bg-gray-200 p-1 rounded-md" {...props} />,
  // eslint-disable-next-line
  pre: (props: any) => <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto"><code {...props} /></pre>,
  ul: (props: any) => <ul className="list-disc list-inside" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
  img: (props: any) => (
    <img src={props.url} alt={props.alt} className="my-4 rounded-lg" />
  ),
  Image: (props: any) => (
    <img src={props.src} alt={props.alt} className="my-4 rounded-lg" />
  ),
  TextBlock: (props: any) => <p className="text-lg my-4">{props.text}</p>,
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
          const response: { data: BlogQuery } = await client.queries.blog({
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