// Write your code here.
import './index.css'

const Banners = props => {
  const {bannerCardsList} = props
  const {className, headerText, description} = bannerCardsList
  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button className="card-btn" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banners
