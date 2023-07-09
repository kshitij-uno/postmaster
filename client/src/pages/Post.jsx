import { useState } from 'react'
import fetch from 'node-fetch'
const Post = () => {

    const [ value, setValue ] = useState(null)

  const [ Message, setMessage ] = useState(null)
  const [ twMessage, setTwMessage ] = useState(null)
  const [ inMessage, setInMessage ] = useState(null)
  
  
  

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:10000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message.content)
    } 
    catch (error) {
      console.error(error)
    }
  }

  const getTwMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:10000/completionstw', options)
      const data = await response.json()
      console.log(data)
      setTwMessage(data.choices[0].message.content)
    } 
    catch (error) {
      console.error(error)
    }
  }



  const getInMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:10000/completionsIn', options)
      const data = await response.json()
      console.log(data)
      setInMessage(data.choices[0].message.content)
    } 
    catch (error) {
      console.error(error)
    }
  }

  console.log(Message)
  console.log(inMessage)
  console.log(twMessage)
  return (
    <div className="post-outer">
      <div className="post-wrapper">
      
        
        <h1 className="heroHeading">Easiest Way to Grow your Social Media <br />
          <span><h1></h1></span>
          <p></p>
        </h1>
        
        <div className="answer">
          <div className="post"> 
            <h2 className="title">LinkedIn</h2>
            
            <p className="desc">{Message}</p>
            <div className="generate" onClick={getMessages}>Generate</div>
            </div>
            
            <div className="post"> 
            <h2 className="title">Twitter
              
            </h2>
            <p className="desc">{twMessage} </p>
            <div className="generate" onClick={getTwMessages}>Generate</div>
            </div>

            <div className="post"> 
            <h2 className="title">Instagram
              
            </h2>
            <p className="desc">{inMessage} </p>
            <div className="generate" onClick={getInMessages}>Generate</div>
            </div>
        </div>
        <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}  placeholder="How inspiring and awesome trees are" />
        </div>

      </div>
         
      
    </div>
    
  )
}

export default Post