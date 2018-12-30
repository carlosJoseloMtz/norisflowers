import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {setup as v1} from './routes/v1'
import {wireImplementations} from './app-context/setup'
import { runInNewContext } from 'vm';

const app: express.Application = express()

mongoose.connect('mongodb://localhost:27017/norisflowers', {
    useNewUrlParser: true
})

wireImplementations()

// TODO: add configuration for allowed domains
app.use('*', cors())
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