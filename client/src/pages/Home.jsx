import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-outer">
    <div className="home-wrapper">
      <h1 className="head_text">
        Write Posts for <br />
        <span className="blue_gradient">LinkedIn, Twitter, & Instagram</span>
      </h1>
      <h2 className="desc">WITH JUST 1 PROMPT</h2>
      <Link className="button" to="login">Get Started</Link>
    </div>
    </div>
  )
}

export default Home