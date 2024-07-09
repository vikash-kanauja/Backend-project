import exprese from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = exprese()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(exprese.json({limit:"16kb"}))
app.use(exprese.urlencoded({extended:true,limit:"16kb"}))
app.use(exprese.static("public"))
app.use(cookieParser())


export {app}