const express = require('express')
const app = express()
const port = 3000
const reservationRoute = require('./routes/reservation.route');

app.use(express.json())

app.use('/', (req, res) => {
  res.send('Hello how can i help you?')
})

app.use('/api', reservationRoute)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})