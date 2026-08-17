import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

const BlogCard = ({ title, excerpt, date, image, id }) => {
  return (
    <article className="blog-card">
      <div className="blog-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">Blog Image</div>
        )}
      </div>
      <div className="blog-content">
        <div className="blog-date">{date}</div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
        <Link to={`/blog/${id}`} className="blog-link">Read More</Link>
      </div>
    </article>
  )
}

export default BlogCard
