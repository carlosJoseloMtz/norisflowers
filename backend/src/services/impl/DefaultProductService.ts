import {Document} from 'mongoose'
import productSchema from '../../models/ProductSchema'

import ProductService from '../ProductService'

class DefaultProductService implements ProductService {

  create(product: Object): Promise<Document> {
    return productSchema.create({ ...product })
  }

  delete(id: String): Promise<Document> {
    return productSchema.remove({ __id: id }).exec()
  }

  paginate(pageNumber: number, pageSize: number): Promise<Array<Document>> {
    return productSchema.find()
      .limit(pageSize)
      .skip(pageNumber * pageSize)
      .exec()
  }
}

export default DefaultProductService