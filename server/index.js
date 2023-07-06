
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'


const PORT = 8000

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
            messages: [{ role: "user", content: 'Generate a LinkedIn Post for ' + req.body.message}],
            max_tokens: 20,
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
            messages: [{ role: "user", content: 'Generate a Tweet for ' + req.body.message }],
            max_tokens: 20,
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
            messages: [{ role: "user", content: 'Generate an Instagram Post for ' + req.body.message}],
            max_tokens: 20,
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