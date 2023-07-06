import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../supabase'

const Home = () => {
  const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])
  return (
    <div className="home-outer">
    <div className="home-wrapper">
      <h1 className="head_text">
        Write Posts for <br />
        <span className="blue_gradient">LinkedIn, Twitter, & Instagram</span>
      </h1>
      <h2 className="desc">WITH JUST 1 PROMPT</h2>
      {! session ? (
      <Link className="button" to="login">Log In to Get Started</Link>
      ) : (
        <Link className="button" to="post">Get Started</Link>
      )
      }
    </div>
    </div>
  )
}

export default Home