import {customComponent} from '../components.utils.js'
import {paginate as paginateProducts} from '../services/products.service.js'

import '../components/product-form.js'

const productPageTemplate = document.createElement('template')
productPageTemplate.innerHTML = `
<div>
  <h1>Products</h1>
  All the products
  <div>
    <h2>Create product</h2>
    <product-form></product-form>
  </div>
  <div class="products-container">
  </div>
</div>
`

class ProductsPage extends HTMLElement {

  constructor () {
    super()

    this.products = []
  }

  async fetchProducts () {
    paginateProducts({ offset: 0 })
      .then(({data}) => {
        this.products = data
      })
  }

  connectedCallback () {
    this.appendChild(productPageTemplate.content.cloneNode(true))
    this.fetchProducts()
  }
}

customComponent({
  name: 'products-page',
  definition: ProductsPage
})