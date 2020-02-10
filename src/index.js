import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { port } from "./config"

dotenv.config()

const app = express()
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', port)
})