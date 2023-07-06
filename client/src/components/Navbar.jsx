import { Link } from 'react-router-dom'
import  logo  from '../assets/logo.png'

import { useState, useEffect } from 'react'
import supabase from '../supabase'


const Navbar = () => {
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
    <div className="navbar">
        <span className="logo">
            <Link className="link" to="/">
            <img src={logo} alt="Post_Master_Logo" className="logo" />
            </Link>
            
        </span>
        {
          !session ? (
            <Link className="link signin" to="login">Login</Link>
          ) : (
            <div className="link signin"
              onClick={async () => {
              const {error} = await supabase.auth.signOut()
              if(error)
              console.log('Error logging out: ', error.message)
            }}> Sign Out</div>
          )
        }
            
    </div>
  )
}

export default Navbar