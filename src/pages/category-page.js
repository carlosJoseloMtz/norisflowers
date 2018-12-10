import '../components/navigation-menu.js'
import {customComponent} from '../components.utils.js'

class CategoryPage extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
      hola :V category ${this.location.params.categoryId}
    `
  }
}

customComponent({
  name: 'category-page',
  definition: CategoryPage
})
