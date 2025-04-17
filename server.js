const { configDotenv } = require('dotenv');
const express = require('express');
const dBConnect = require('./middlewares/dB');
const resultRoutes = require('./routes/result');

const app = express();
app.use(express.json())
configDotenv()
dBConnect()

app.use('/api', resultRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
})