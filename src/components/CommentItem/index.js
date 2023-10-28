import {formatDistanceToNow} from 'date-fns'
import './index.css'

const Listing = props => {
  const {val, togLike, delThing} = props
  const {id, name, para, isLiked, time, dpClass} = val
  const postedTime = formatDistanceToNow(time)
  const dp = name[0].toUpperCase()
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const classN = isLiked ? 'it-is-true' : 'it-is-false'

  const doLike = () => {
    togLike(id)
  }

  const doDel = () => {
    delThing(id)
  }

  return (
    <li>
      <div className="row-lo">
        <button type="button" className={`dp-thing ${dpClass}`}>
          {dp}
        </button>
        <p className="p-name">{name}</p>
        <p className="p-time">{`${postedTime} ago`}</p>
      </div>
      <p className="actual-para">{para}</p>
      <div className="both-btn">
        <button
          className={`${classN} this-spec`}
          onClick={doLike}
          type="button"
        >
          <img src={imgUrl} alt="likeThing" />
          Like
        </button>
        <button
          className="this-spec"
          onClick={doDel}
          data-testid="delete"
          type="button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default Listing
