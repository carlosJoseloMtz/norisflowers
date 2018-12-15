import ApplicationContext from "../../app-context/ApplicationContext";
import ProductService from '../../services/ProductService'
import {Request, Response} from 'express'

const getService = (): ProductService => {
  return ApplicationContext.getImpl('productService')
}

const listProducts = (req: Request, res: Response) => {
  getService().paginate(req.params.offset, 10)
    .then(data => {
      res.json(data)
    })
    .catch()
}

export {listProducts}