import express from 'express'
import router from './routes/index.js'

import bodyParser from 'body-parser';
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use('/todo', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})