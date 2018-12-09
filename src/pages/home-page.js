import '../components/navigation-menu.js'
import {customComponent} from '../components.utils.js'

const homePageTemplate = document.createElement('template')
homePageTemplate.innerHTML = `
<div>
  <navigation-menu></navigation-menu>
  <h1>hi</h1>
</div>
`

class HomePage extends HTMLElement {

  constructor () {
    super()
  }

  connectedCallback () {
    this.appendChild(homePageTemplate.content.cloneNode(true))
  }
}

customComponent({
  name: 'home-page',
  definition: HomePage
})
