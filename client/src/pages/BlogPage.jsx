import React from 'react'
import BlogCard from '../components/BlogCard'
import './BlogPage.css'

const BlogPage = () => {
  // Sample data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Our Platform',
      excerpt: 'Learn how to get started with our platform and make the most of its features.',
      date: 'June 15, 2023'
    },
    {
      id: 2,
      title: 'Tips and Tricks for Beginners',
      excerpt: 'Discover useful tips and tricks to enhance your experience as a beginner.',
      date: 'June 10, 2023'
    },
    {
      id: 3,
      title: 'Advanced Techniques for Experts',
      excerpt: 'Explore advanced techniques that will take your skills to the next level.',
      date: 'June 5, 2023'
    },
    {
      id: 4,
      title: 'The Future of Our Industry',
      excerpt: 'Get insights into the future trends and developments in our industry.',
      date: 'May 28, 2023'
    },
    {
      id: 5,
      title: 'Case Study: Success Stories',
      excerpt: 'Read about success stories from users who have benefited from our platform.',
      date: 'May 20, 2023'
    },
    {
      id: 6,
      title: 'Behind the Scenes: Our Development Process',
      excerpt: 'Take a peek behind the curtain and learn about our development process.',
      date: 'May 15, 2023'
    }
  ]

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">Latest news, updates, and insights</p>
        </div>
      </section>
      
      <section className="blog-content">
        <div className="container">
          <div className="blog-filters">
            <div className="search-bar">
              <input type="text" placeholder="Search blog posts..." />
              <button className="search-btn">Search</button>
            </div>
            
            <div className="category-filter">
              <select>
                <option value="">All Categories</option>
                <option value="tutorials">Tutorials</option>
                <option value="news">News</option>
                <option value="case-studies">Case Studies</option>
                <option value="tips">Tips & Tricks</option>
              </select>
            </div>
          </div>
          
          <div className="blog-posts-grid">
            {blogPosts.map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn next">Next</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
