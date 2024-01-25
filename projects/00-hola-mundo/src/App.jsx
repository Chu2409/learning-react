import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

const users = [
  {
    userName: 'chu_er_',
    name: 'Daniel Zhu',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
