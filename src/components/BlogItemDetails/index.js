// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogData

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item-details-container">
            <h1 className="blog-item-details-title">{title}</h1>
            <div className="blog-item-profile-card">
              <img
                src={avatarUrl}
                alt={`avatarUrl${id}`}
                className="blog-item-profile-img"
              />
              <p className="blog-item-profile-author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-item-details-img" />
            <p className="blog-item-details-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
