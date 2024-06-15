import './Blog.css';
import React from 'react';
import teaLaptopImage from '../../../../../assets/blogs_home/tea_laptop.jpg';
import marketImage from '../../../../../assets/blogs_home/market.jpg';
import chickenPhotoImage from '../../../../../assets/thoughts_home/vr_photo.jpg';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: teaLaptopImage,
      date: 'May 25, 2024',
      description: 'Strategies for the Modern Business',
    },
    {
      id: 2,
      image: marketImage,
      date: 'June 2, 2024',
      description: 'Maximizing Profits in a Competitive Market',
    },
    {
      id: 3,
      image: chickenPhotoImage,
      date: 'march 24, 2024',
      description: 'The Role of Data Analytics in Strategic-Decision Making',
    },
    {
      id: 4,
      image: teaLaptopImage,
      date: 'May 25, 2024',
      description: 'Strategies for the Modern Business',
    },
    {
      id: 5,
      image: marketImage,
      date: 'April 17, 2024',
      description: 'Maximizing Profits in a Competitive Market',
    },
  ];

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <div className="blog-showcase">
        <div className="side-blogs">
          {blogs.slice(0, 2).map(blog => (
            <div key={blog.id} className="blog-item">
              <img src={blog.image} alt={`Blog ${blog.id}`} />
              <div className="blog-info">
                <p className="blog-date">{blog.date}</p>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-item blog-item-large">
          <img src={blogs[2].image} alt={`Blog ${blogs[2].id}`} />
          <div className="blog-info">
            <p className="blog-date">{blogs[2].date}</p>
            <p className="blog-description">{blogs[2].description}</p>
          </div>
        </div>
        <div className="side-blogs">
          {blogs.slice(3, 5).map(blog => (
            <div key={blog.id} className="blog-item">
              <img src={blog.image} alt={`Blog ${blog.id}`} />
              <div className="blog-info">
                <p className="blog-date">{blog.date}</p>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
