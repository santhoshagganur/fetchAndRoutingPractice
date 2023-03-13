// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = eachBlog

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} className="blog-image" alt={`item${id}`} />
        <div className="blog-content">
          <p className="blog-topic"> {topic} </p>
          <h1 className="blog-title"> {title} </h1>
          <div className="author-content">
            <img src={avatarUrl} alt={`avatar${id}`} className="img-author" />
            <p className="blog-topic"> {author} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
