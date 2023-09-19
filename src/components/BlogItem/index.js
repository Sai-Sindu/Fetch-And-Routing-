// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-Link-card">
      <div className="blog-card">
        <img src={imageUrl} alt={`imageUrl${id}`} className="blog-list-image" />
        <div className="blog-info-card">
          <p className="blog-info-topic">{topic}</p>
          <h1 className="blog-info-title">{title}</h1>
          <div className="blog-profile-card">
            <img
              src={avatarUrl}
              alt={`avatarUrl${id}`}
              className="blog-profile-img"
            />
            <p className="blog-profile-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
