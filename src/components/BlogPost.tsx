import React from 'react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published: boolean;
}

interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </button>
          
          <div className="mb-4">
            <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-400 space-x-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>openMedia Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="text-gray-200 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-300">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d+\./)) {
                const listItems = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-gray-300">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              } else {
                return (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Digital Marketing?</h3>
          <p className="text-orange-100 mb-6">
            Get expert advice tailored to your business needs. Let's discuss how we can help you achieve similar results.
          </p>
          <button
            onClick={() => {
              onBack();
              setTimeout(() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;