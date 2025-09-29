import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, description, image }) => {
  return (
    <div className="bg-[#1a1a1a] border-4 border-brand-border rounded-pixel shadow-pixel transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0_#444] flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full h-64 bg-[#111111] overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl text-brand-accent font-medium mb-2">{title}</h3>

          {/* Author pill */}
          <Link to={'/'} className="inline-block text-xs bg-brand-border text-brand-accent-alt px-3 py-1 rounded-pixel mb-4 border border-brand-accent hover:bg-brand-accent transition shadow-pixel">
            by {author}
          </Link>

          <p className="text-sm text-brand-muted mb-6">{description}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t-4 border-brand-border">
          <span className="text-sm text-brand-accent-alt font-semibold">{date}</span>
          <div className="flex space-x-4 text-brand-accent-alt">
            <button className="hover:text-brand-accent" aria-label="Read">
              <i className="fas fa-book-open"></i>
            </button>
            <button className="hover:text-brand-accent" aria-label="Like">
              <i className="fas fa-heart"></i>
            </button>
            <button className="hover:text-brand-accent" aria-label="Share">
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
