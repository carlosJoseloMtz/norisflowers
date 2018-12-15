import {Document} from 'mongoose'

interface ProductService {

  /**
   * Creates a new product.
   * 
   * @param product Product to be created.
   */
  create(product: Object): Promise<Document>

  /**
   * Removes a product based on the id.
   * @param id Id of the model to be removed.
   */
  delete(id: String): Promise<Document>

  /**
   * Lists the products with a pagination.
   * 
   * @param pageNumber Total number of elements for the page.
   * @param pageSize Page index, should start with zero.
   */
  paginate(pageNumber: number, pageSize: number): Promise<Array<Document>>
}

export default ProductService