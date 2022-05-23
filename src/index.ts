import express from 'express'
import router from './routes/user.route'
const app = express()
app.use(express.json())

app.use('/', router)
app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)