import express from 'express'
import cors from 'cors'
import Api from './api'

const app = express()

app.use(cors())

app.get('/CommonSenseMedia', Api.CommonSenseMedia)
app.get('/RottenTomatoes', Api.RottenTomatoes)
app.get('/OMDb', Api.OMDb)
app.get('/Moowee', Api.Moowee)

app.listen(8000, () => {
  console.log('Listening on port 8000')
})
