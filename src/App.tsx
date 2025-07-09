      published: true
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "Marketing Automation",
      readTime: "18 dk okuma",
      date: "Ocak 5, 2025",
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