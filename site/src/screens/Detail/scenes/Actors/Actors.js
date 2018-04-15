import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './Actors.css'

const placeholderProfilePicture = 'http://4.bp.blogspot.com/-jj13PvJtPqY/Totq30ND_KI/AAAAAAAABHI/ZnUWkQKO22Q/s1600/batman-for-facebook.jpg'

class Actor extends PureComponent {
  render () {
    const { actor, className } = this.props
    return (
      <div className={classnames('actor', className)} onClick={this.viewActor}>
        <img src={actor.image || placeholderProfilePicture} alt={actor.name} />
        <strong>{actor.name}</strong>
      </div>
    )
  }
  viewActor = () => {
    const { actor } = this.props
    window.open(actor.url, '_blank')
  }
}

const Actors = ({ actors, className }) => (
  <div className={classnames('actors', className)}>
    <div className="actors-list">
      {
        actors.map(actor => (
          <Actor
            actor={actor}
            key={actor.name}
          />
        ))
      }
    </div>
  </div>
)

export default Actors
