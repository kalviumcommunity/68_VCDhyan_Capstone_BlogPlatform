import React from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import BlogCard from '../components/BlogCard'
import './HomePage.css'

const HomePage = () => {
  // Sample data for features
  const features = [
    {
      id: 1,
      title: 'Feature One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Feature Two',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      title: 'Feature Three',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]
  
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
    }
  ]

  return (
    <div className="home-page">
      <Hero />
      
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Features</h2>
            <p className="section-description">
              Discover what makes our platform unique and how it can benefit you.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map(feature => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Blog Posts</h2>
            <p className="section-description">
              Stay updated with our latest news, tips, and insights.
            </p>
          </div>
          
          <div className="blog-grid">
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
        </div>
      </section>
    </div>
  )
}

export default HomePage
