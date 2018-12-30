import {customComponent} from '../components.utils.js'

const productFormTemplate = document.createElement('template')
productFormTemplate.innerHTML = `
<form>
  <input placeholder="code" />
  <input placeholder="name" />
  <textarea placeholder="description"></textarea>
</form>
`

class ProductForm extends HTMLElement {

  connectedCallback () {
    this.appendChild(
      productFormTemplate.content.cloneNode(true))
    
    this.querySelector('form')
      .addEventListener('submit', this.onSubmit.bind(this))
  }

  onSubmit (ev) {
    const event = new CustomEvent('product-saved', {
      detail: {
        some: 'element',
        stuff: 'stuff'
      }
    })
    this.dispatchEvent(event)
  }
}

customComponent({
  name: 'product-form',
  definition: ProductForm
})