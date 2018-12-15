import BaseModel from './BaseModel'
import mongoose, {Schema} from 'mongoose'

let currencySchema = new Schema({
  ...BaseModel,
  isoCode: {
    type: String,
    default: 'mxn',
    required: true
  }
})

export default mongoose.model('currencies', currencySchema)