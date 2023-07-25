import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import { router } from './Routes/Routes';

const app = express()

app.use(cors({
    origin: 'https://localhost.com/' + process.env.PORT,
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());
app.use(router)

app.listen(process.env.PORT, () => {
    console.log('Server rolando')
})