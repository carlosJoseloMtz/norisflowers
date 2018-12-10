import './components/navigation-menu.js'
import {setupRoutes} from './routes.js'

const applicationTemplate = document.createElement('div')
applicationTemplate.innerHTML = `
  <navigation-menu></navigation-menu>
  <div class="page-wrapper"></div>
`

class Application extends HTMLElement {

  constructor () {
    super()
  }

  connectedCallback () {
    this.appendChild(applicationTemplate.cloneNode(true))
    const pageWrapper = this.querySelector('.page-wrapper')
    setupRoutes(pageWrapper)
  }
}

customElements.define('ecommerce-app', Application)
