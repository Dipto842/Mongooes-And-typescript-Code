
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { DataRout } from './Data/Route'
const app : Application = express()
const port = 5000
app.use(express.json())
app.use(cors())

app.use('/api/products',DataRout)



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app