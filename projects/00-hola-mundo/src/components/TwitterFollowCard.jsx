import { useState } from 'react'

export function TwitterFollowCard ({ userName, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img
          className='tw-follow-card-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='Avatar ChuEr'
        />
        <div className='tw-follow-card-info'>
          <strong>{children}</strong>
          <span className='tw-follow-card-info-user'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-follow-card-text'>{text}</span>
          <span className='tw-follow-card-stop-follow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
