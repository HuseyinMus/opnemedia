import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LoadingSpinner from './components/LoadingSpinner';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import ToastContainer from './components/ToastNotification';
import NewsletterPopup from './components/NewsletterPopup';
import SearchModal from './components/SearchModal';
import { useToast } from './hooks/useToast';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { toasts, removeToast, success, error } = useToast();
  
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "5 Common Digital Marketing Mistakes in Europe",
      excerpt: "Learn about the most frequent pitfalls European businesses face in digital marketing and how to avoid them for better results.",
      content: `Digital marketing in Europe presents unique challenges that many businesses struggle with. From GDPR compliance to cultural nuances across different countries, here are the five most common mistakes we see and how to avoid them.

## 1. Ignoring GDPR Compliance

The General Data Protection Regulation (GDPR) isn't just a legal requirement—it's a trust-building opportunity. Many businesses treat it as an afterthought, but smart marketers use GDPR compliance as a competitive advantage.

## 2. One-Size-Fits-All Approach

Europe isn't a single market. What works in Germany might fail in Italy. Cultural sensitivity and localization are crucial for success.

## 3. Neglecting Local Search Optimization

Each European country has its own search behaviors and preferences. Local SEO strategies must be adapted accordingly.

## 4. Poor Mobile Experience

With mobile usage varying significantly across European countries, optimizing for mobile is essential but often overlooked.

## 5. Inadequate Social Media Strategy

Different European countries prefer different social platforms. A successful strategy requires platform-specific approaches.

By avoiding these common pitfalls, your European digital marketing campaigns will be more effective and compliant.`,
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      published: true
    },
    {
      id: 2,
      title: "Meta Ads vs Google Ads: Which is Better in 2025?",
      excerpt: "A comprehensive comparison of Meta and Google advertising platforms to help you choose the right strategy for your business.",
      content: `The eternal debate between Meta Ads and Google Ads continues in 2025. Both platforms have evolved significantly, offering unique advantages for different business types.

## Meta Ads: The Social Powerhouse

Meta's advertising platform excels in visual storytelling and social engagement. With advanced targeting options and creative formats, it's perfect for:

- Brand awareness campaigns
- Visual product showcases
- Community building
- Retargeting strategies

## Google Ads: The Intent-Driven Giant

Google Ads captures users at the moment of intent, making it incredibly powerful for:

- Lead generation
- E-commerce sales
- Local business promotion
- B2B marketing

## The Verdict for 2025

The best approach isn't choosing one over the other—it's understanding how to use both platforms strategically. Most successful businesses use a multi-platform approach that leverages the strengths of each platform.

## Key Recommendations

1. Use Google Ads for high-intent keywords
2. Use Meta Ads for brand building and retargeting
3. Ensure consistent messaging across platforms
4. Track cross-platform attribution
5. Optimize budgets based on performance data

The future belongs to marketers who can orchestrate campaigns across multiple platforms effectively.`,
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Advertising",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      published: true
    },
    {
      id: 3,
      title: "LinkedIn B2B Strategies That Actually Work",
      excerpt: "Discover proven LinkedIn marketing tactics that drive real results for B2B companies in the European market.",
      content: `LinkedIn has become the go-to platform for B2B marketing in Europe. With over 200 million European users, the platform offers unprecedented opportunities for business growth.

## The European B2B Landscape

European B2B buyers are more relationship-focused than their American counterparts. Building trust and demonstrating expertise are crucial for success.

## Proven Strategies for 2025

### 1. Thought Leadership Content
Position your executives as industry experts through regular, valuable content sharing.

### 2. Employee Advocacy
Leverage your team's networks to amplify your message authentically.

### 3. LinkedIn Events
Host virtual events to build community and generate leads.

### 4. Advanced Targeting
Use LinkedIn's sophisticated targeting options to reach decision-makers.

### 5. Video Content
Video posts receive 5x more engagement than text-only posts.

## Measuring Success

Track these key metrics:
- Connection acceptance rate
- Content engagement rate
- Lead quality score
- Pipeline contribution
- Cost per qualified lead

## Common Mistakes to Avoid

1. Being too sales-focused too quickly
2. Neglecting company page optimization
3. Inconsistent posting schedule
4. Ignoring LinkedIn analytics
5. Not engaging with your network's content

Success on LinkedIn requires patience, consistency, and genuine value creation. Focus on building relationships first, and sales will follow naturally.`,
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "B2B Marketing",
      image: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      published: true
    }
  ]);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Newsletter popup timer
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');
        if (!hasSeenNewsletter) {
          setShowNewsletter(true);
          localStorage.setItem('hasSeenNewsletter', 'true');
        }
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Check for admin access
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'k') {
          e.preventDefault();
          setShowSearch(true);
        }
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
        setShowNewsletter(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (showAdmin) {
    return <AdminPanel blogPosts={blogPosts} setBlogPosts={setBlogPosts} onExit={() => setShowAdmin(false)} />;
  }

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (post) {
      return <BlogPost post={post} onBack={() => setSelectedPost(null)} />;
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar onSearchClick={() => setShowSearch(true)} />
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Blog blogPosts={blogPosts} onReadMore={setSelectedPost} />
        <Contact onSubmitSuccess={() => success('Message sent successfully!')} />
        <Footer />
      </motion.div>

      <ToastContainer toasts={toasts} onClose={removeToast} />
      
      <AnimatePresence>
        {showNewsletter && (
          <NewsletterPopup onClose={() => setShowNewsletter(false)} />
        )}
      </AnimatePresence>

      <SearchModal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        blogPosts={blogPosts}
        onSelectPost={setSelectedPost}
      />
    </div>
  );
}

export default App;