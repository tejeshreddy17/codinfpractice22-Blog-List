// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachblog} = props
  const {id, title, description, publishedDate} = eachblog
  return (
    <li className="blog-item">
      <div className="title-container">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default BlogItem
