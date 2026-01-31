import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API Hunter rodando...')
})

app.listen(3333, () => {
  console.log('Server rodando na porta 3333')
})
