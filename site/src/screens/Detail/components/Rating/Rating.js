import React from 'react'
import classnames from 'classnames'
import './Rating.css'

const Rating = ({ rating, className }) => (
  <div className={classnames('rating', className)}>
    <div className="label-row">
      <strong>WORST</strong>
      <strong>AVERAGE</strong>
      <strong>BEST</strong>
      <strong>REVIEWS</strong>
    </div>
    <div className="rating-row">
      <div className="worst">
        {rating.worstRating}%
      </div>
      <div className="average">
        <strong>{rating.ratingValue}%</strong>
      </div>
      <div className="best">
        {rating.bestRating}%
      </div>
      <div className="reviews">
        {rating.reviewCount}
      </div>
    </div>
  </div>
)

export default Rating
