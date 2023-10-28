import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import Listing from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    paraInput: '',
  }

  nameThing = event => {
    this.setState({nameInput: event.target.value})
  }

  paraThing = event => {
    this.setState({paraInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {nameInput, paraInput} = this.state

    const cla =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      para: paraInput,
      isLiked: false,
      dpClass: cla,
      time: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      paraInput: '',
    }))
  }

  togLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachC => {
        if (id === eachC.id) {
          return {...eachC, isLiked: !eachC.isLiked}
        }
        return eachC
      }),
    }))
  }

  delThing = id => {
    const {commentsList} = this.state
    this.setState({commentsList: commentsList.filter(each => each.id !== id)})
  }

  render() {
    const {commentsList, nameInput, paraInput} = this.state
    return (
      <div className="total-thing">
        <div className="inner-div">
          <form onSubmit={this.submitForm}>
            <div className="written-div">
              <h1>Comments</h1>
              <p className="say-some">Say Something about 4.0 Technologies</p>
              <input
                value={nameInput}
                onChange={this.nameThing}
                placeholder="Your Name"
              />
              <textarea
                value={paraInput}
                onChange={this.paraThing}
                placeholder="Your Comment"
                rows="8"
                cols="35"
              />
              <button className="sub-btn" type="submit">
                Add Comment
              </button>
            </div>
            <img
              className="main-img"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </form>
          <hr />
          <div className="bottom-thing">
            <p className="span-p">
              <span>{commentsList.length}</span> Comments
            </p>
            <ul>
              {commentsList.map(each => (
                <Listing
                  delThing={this.delThing}
                  togLike={this.togLike}
                  key={each.id}
                  val={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
