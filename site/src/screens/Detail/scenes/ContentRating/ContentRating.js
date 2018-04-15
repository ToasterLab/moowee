import React, { PureComponent } from 'react'
import './ContentRating.css'

class ContentRating extends PureComponent {
  render () {
    const { csm } = this.props
    return (
      <div className="content-rating">
        <div className="appropriate-ages">
          <div className="age">
            <span>{csm.kidsSay.substr(4)}</span><br />
            <label>kids say</label>
          </div>
          <div className="age">
            <strong>{csm.age.substr(4)}</strong><br />
            <label>recommended</label>
          </div>
          <div className="age">
            <span>{csm.parentsSay.substr(4)}</span><br />
            <label>parents say</label>
          </div>
        </div>
        <p className="one-liner">
          {csm.oneLiner}
        </p>
        <div className="description">
          <strong>Description</strong>
          <p>{csm.parentsNeedToKnow}</p>
        </div>
      </div>
    )
  }
}

export default ContentRating
