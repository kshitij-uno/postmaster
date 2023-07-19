
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import fetch from 'node-fetch'

const PORT = 10000

const app = express()

app.use(express.json())
app.use(cors())




dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY



app.post('/completions', async (req, res) =>  {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: 'Generate a LinkedIn Post (using no more than 2980 characters but try to keep it short for better audience engagement) for ' + req.body.message}],
            max_tokens: 750,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    } 
    
})
app.post('/completionstw', async (req, res) =>  {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: 'Generate a Tweet (using no more than 280 characters) for ' + req.body.message }],
            max_tokens: 75,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    } 
    
})

app.post('/completionsIn', async (req, res) =>  {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: 'Generate an Instagram Post (using no more than 2190 characters but try to keep it short for better audience engagement) for ' + req.body.message}],
            max_tokens: 560,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    } 
    
})

const startServer = async () => {
app.listen(PORT, () => console.log('Your server is running on PORT ' +PORT))
}

startServer()