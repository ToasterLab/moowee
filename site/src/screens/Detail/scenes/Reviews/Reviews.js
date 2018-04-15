import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './Reviews.css'

class Review extends PureComponent {
  render () {
    const { review, className } = this.props
    const background = review.reviewRating.ratingValue === 1
      ? 'positive'
      : 'negative'
    return (
      <div className={classnames('review', background, className)} onClick={this.viewReview}>
        <strong>{review.author.name} | {review.publisher.name}</strong>
        <p>{review.body}</p>
        <div className="timestamp">
          <em>{review.dateCreated}</em>
        </div>
      </div>
    )
  }
  viewReview = () => {
    const { review } = this.props
    window.open(review.url, '_blank')
  }
}

class Reviews extends PureComponent {
  render () {
    const { reviews } = this.props
    return (
      <div className="reviews">
        <div className="reviews-list">
          {
            reviews.map((review, index) => (
              <Review
                key={review.url || review.dateCreated}
                review={review}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Reviews
