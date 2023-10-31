import express from 'express'
import { userCreate } from './routes/user/userRoutes'
import { swaggerSpec } from './services/swagger'
import swaggerUI from 'swagger-ui-express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use([express.json(), userCreate])
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
