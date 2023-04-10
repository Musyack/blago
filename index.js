const express = require('express')
const cors = require('cors')
const router = require('./router.js')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)

const PORT = 5001

const start = async () => {


    try {

        app.listen(PORT, () => {
            console.log(`started on ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }

}

start()