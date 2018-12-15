import mongoose, {Schema} from 'mongoose'
import BaseModel from './BaseModel'

let productSchema: Schema = new Schema({
  // extend the base model
  ...BaseModel,

  code: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: ''
  },

  prices: [
    {
      ...BaseModel,
      value: {
        type: Number,
        default: 0,
        required: true
      },
      currency: {
        type: mongoose.Types.ObjectId,
        ref: 'currencies',
        required: true
      },
      validRange: [
        {
          start: {
            type: Date,
            required: true,
            default: Date.now
          },
          end: {
            type: Date
          }
        }
      ]
    }
  ]
})

export default mongoose.model('products', productSchema)