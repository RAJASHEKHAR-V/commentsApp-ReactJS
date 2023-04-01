import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentObject, onLikeButton, onDeleteButton} = props
  const {
    id,
    name,
    comment,
    isLiked,
    initialClassName,
    commentTime,
  } = commentObject
  const firstLetter = name.slice(0, 1)
  const previousTime = formatDistanceToNow(commentTime)
  const applyLikeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const applyLike = isLiked ? 'apply-like' : ''
  const onLikeImage = () => {
    onLikeButton(id)
  }
  const onDeleteIcon = () => {
    onDeleteButton(id)
  }

  return (
    <li className="comment-item">
      <div className="user-status-card">
        <div className={`radius ${initialClassName}`}>
          <p className="first-letter">{firstLetter}</p>
        </div>
        <div className="user-details-card">
          <div className="user-details">
            <p className="user-name">{name}</p>
            <p className="comment-time">{previousTime}</p>
          </div>
          <p className="user-comment">{comment}</p>
        </div>
      </div>
      <div className="button-card">
        <button
          className={`image-button ${applyLike}`}
          type="submit"
          onClick={onLikeImage}
        >
          <img src={applyLikeImage} className="like-image" alt="like" />
          Like
        </button>
        <button
          className="delete-button"
          type="submit"
          data-testid="delete"
          onClick={onDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
      <hr className="li-rule" />
    </li>
  )
}

export default CommentItem
