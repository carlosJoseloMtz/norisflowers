import ProductService from '../services/ProductService'
import DefaultProductService from '../services/impl/DefaultProductService'

import ApplicationContext from './ApplicationContext'


const wireImplementations = () => {
  const productService: ProductService = new DefaultProductService()
  ApplicationContext.register(productService, "productService")
}

export {wireImplementations}