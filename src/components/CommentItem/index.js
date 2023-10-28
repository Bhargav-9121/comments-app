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

  const doLike = () => {
    togLike(id)
  }

  const doDel = () => {
    delThing(id)
  }

  return (
    <li>
      <button type="button" className={dpClass}>
        {dp}
      </button>
      <p>{postedTime}</p>
      <p>{name}</p>
      <p>{para}</p>
      <button onClick={doLike} type="button">
        <img src={imgUrl} alt="likeThing" />
      </button>
      <button onClick={doDel} data-testid="delete" type="button">
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </button>
    </li>
  )
}

export default Listing
