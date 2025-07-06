import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogPosts: Array<{
    id: number;
    title: string;
    excerpt: string;
    category: string;
    published: boolean;
  }>;
  onSelectPost: (id: number) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, blogPosts, onSelectPost }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof blogPosts>([]);

  useEffect(() => {
    if (query.trim()) {
      const filtered = blogPosts.filter(post => 
        post.published && (
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.category.toLowerCase().includes(query.toLowerCase())
        )
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, blogPosts]);

  const handleSelect = (id: number) => {
    onSelectPost(id);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-2xl w-full max-w-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-800">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => handleSelect(post.id)}
                      className="w-full text-left p-4 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{post.title}</h3>
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                    </button>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center text-gray-400">
                  No articles found for "{query}"
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  Start typing to search articles...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;