
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { DataRout } from './Data/Route'
import { OdarRout } from './Data/order/Route'
const app : Application = express()
const port = 5000
app.use(express.json())
app.use(cors())


app.use('/api/products',DataRout)
app.use('/api/orders',OdarRout)


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app