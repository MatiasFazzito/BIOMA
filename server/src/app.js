import express from "express"

const app = express()

//.env
process.loadEnvFile()
const PORT = process.env.PORT
const URLConection = process.env.URLMONGO
const PRIVATE_KEY = process.env.PRIVATE_KEY

//Server config
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})