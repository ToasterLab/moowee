import React from 'react'
import classnames from 'classnames'
import './Actors.css'

const placeholderProfilePicture = 'http://4.bp.blogspot.com/-jj13PvJtPqY/Totq30ND_KI/AAAAAAAABHI/ZnUWkQKO22Q/s1600/batman-for-facebook.jpg'

const Actor = ({ actor, className }) => (
  <div className={classnames('actor', className)}>
    <img src={actor.image || placeholderProfilePicture} alt={actor.name} />
    <strong>{actor.name}</strong>
  </div>
)

const Actors = ({ actors, className }) => (
  <div className={classnames('actors', className)}>
    <strong>Actors</strong>
    <div className="actors-list">
      {
        actors.map(actor => (
          <Actor actor={actor} key={actor.name} />
        ))
      }
    </div>
  </div>
)

export default Actors