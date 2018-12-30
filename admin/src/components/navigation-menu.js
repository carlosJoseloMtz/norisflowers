import {customComponent} from '../components.utils.js'
import './search-box.js'

const template = document.createElement('template')
template.innerHTML = `
<div class="top-navigation">
  <div class="top-section">
    <div class="link">
      <img class="hb-button" src="/build/images/baseline-menu-24px.svg"/>
    </div>
    <div class="logo-section">
      <img src="/build/images/logo.png"/>
    </div>
  </div>
  <nav>
    <ul>
    </ul>
  </nav>
</div>
`

class NavigationMenu extends HTMLElement {

  constructor () {
    super()

  }

  connectedCallback () {
    this.appendChild(template.content.cloneNode(true))
    this.querySelector('.hb-button')
      .addEventListener('click', this.onHamburgerButton.bind(this))
  }

  onHamburgerButton () {
    this.listNodes && this.listNodes.classList.toggle('toggle')
  }
}

customComponent({
  name: 'navigation-menu',
  definition: NavigationMenu
})
