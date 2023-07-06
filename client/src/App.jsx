
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import supabase from './supabase'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import Footer from './components/Footer';


const App = () => {
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
    <BrowserRouter>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login"  element={session ? <Navigate to="/post" /> : <Login /> } />
            <Route path="/post" element={session ? <Post /> : <Navigate to="/login" /> } />
            
          </Routes>
          <Footer />
        </div>
        </main>
    </BrowserRouter>
  )
}

export default App