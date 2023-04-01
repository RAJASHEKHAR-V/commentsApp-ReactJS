import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

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
  state = {commentList: [], name: '', comment: ''}

  onAddCommentButton = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newCommentObject = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      initialClassName,
      commentTime: new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newCommentObject],
      name: '',
      comment: '',
    }))
  }

  onChangeOfUserName = event => {
    this.setState({name: event.target.value})
  }

  onChangeOfUserComment = event => {
    this.setState({comment: event.target.value})
  }

  onLikeButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {commentList, name, comment} = this.state
    const countOfComment = commentList.length

    return (
      <div className="bg-Container">
        <h1 className="comments-heading">Comments</h1>
        <div className="comment-container">
          <form className="form-el" onSubmit={this.onAddCommentButton}>
            <p className="user-label">Say Something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              type="text"
              className="user-name-input"
              value={name}
              onChange={this.onChangeOfUserName}
            />
            <textarea
              placeholder="Your Comment"
              type="text"
              className="user-comment-input"
              value={comment}
              onChange={this.onChangeOfUserComment}
            />
            <div>
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comment-image"
            alt="comments"
          />
        </div>
        <hr className="horizontal-rule" />
        <div className="comment-body">
          <div className="comment-count">
            <p className="count">{countOfComment}</p>
            <p className="comments-para">Comments</p>
          </div>
          <ul className="comment-card">
            {commentList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                commentObject={eachItem}
                onLikeButton={this.onLikeButton}
                onDeleteButton={this.onDeleteButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
