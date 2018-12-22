import ApplicationContext from "../../app-context/ApplicationContext";
import ProductService from '../../services/ProductService'
import {Request, Response} from 'express'
import {SuccessResponse, ErrorResponse} from '../responses'

const getService = (): ProductService => {
  return ApplicationContext.getImpl('productService')
}

const listProducts = (req: Request, res: Response) => {
  getService().paginate(req.params.offset, 10)
    .then(data => {
      res.json(new SuccessResponse(data))
    })
    .catch(err => {
      console.error('Error while getting products', err)
      res.status(500)
        .json(new ErrorResponse('Error while getting products'))
    })
}

const createProduct = (req: Request, res: Response) => {
  getService().create(req.body)
    .then(data => {
      res.json(new SuccessResponse({
        id: data._id
      }))
    })
    .catch(err => {
      console.error('Error while trying to get a product', err)
      res.status(500).json(new ErrorResponse('Error while creating product'))
    })
}

export {listProducts, createProduct}