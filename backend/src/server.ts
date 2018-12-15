import express from 'express'
import mongoose from 'mongoose'
import {setup as v1} from './routes/v1'
import {wireImplementations} from './app-context/setup'

const app: express.Application = express()

mongoose.connect('mongodb://localhost:27017/norisflowers', {
    useNewUrlParser: true
})

wireImplementations()

app.use(v1())

const port: Number = 8080

console.log('wiring the implementations')


app.listen(port, (err: Object) => {
    if (err) {
        console.error('Error while initializing the application')
    } else {
        console.log('application listening in port ' + port)
    }
})