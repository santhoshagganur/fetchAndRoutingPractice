// Write your JS code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const results = await fetch('https://apis.ccbp.in/blogs')
    const resultantBlogs = await results.json()
    const updatedBlogs = resultantBlogs.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      author: each.author,
    }))

    this.setState({blogList: updatedBlogs, isLoading: false})
  }

  render() {
    const {isLoading, blogList} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogList.map(item => <BlogItem key={item.id} eachBlog={item} />)
        )}
      </div>
    )
  }
}

export default BlogList
