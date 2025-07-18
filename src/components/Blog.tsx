import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

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

interface BlogProps {
  blogPosts: BlogPost[];
  onReadMore: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ blogPosts, onReadMore }) => {
  const publishedPosts = blogPosts.filter(post => post.published);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', ...Array.from(new Set(publishedPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'all' 
    ? publishedPosts 
    : publishedPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest digital marketing trends, strategies, and insights specifically for European businesses.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.slice(0, 6).map((post) => (
            <article 
              key={post.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-orange-500/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => onReadMore(post)}
                  className="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        {filteredPosts.length > 6 && (
          <div className="text-center mb-16">
            <button
              onClick={() => {
                // Show all posts logic can be implemented here
                console.log('Show more posts');
              }}
              className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-700 hover:border-orange-500/50"
            >
              View More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}

        {/* Blog Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="text-3xl font-bold text-orange-500 mb-2">{publishedPosts.length}</div>
            <div className="text-gray-300">Total Articles</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="text-3xl font-bold text-blue-500 mb-2">{categories.length - 1}</div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <div className="text-3xl font-bold text-green-500 mb-2">50K+</div>
            <div className="text-gray-300">Monthly Readers</div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-700 hover:border-orange-500/50"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;