import {customComponent} from '../components.utils.js'
import './search-box.js'

const template = document.createElement('template')
template.innerHTML = `
<div class="top-navigation">
  <div class="top-section">
    <div class="link">
      <a href="/">
        <img src="/build/images/baseline-menu-24px.svg"/>
      </a>
    </div>
    <div class="logo-section">
      <img src="/build/images/logo.png"/>
    </div>
    <div class="link">
      <a href="/cart">
        <img src="/build/images/baseline-shopping_cart-24px.svg"/>
      </a>
    </div>
  </div>
  <search-box></search-box>
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

    const list = this.querySelector('ul')

    this.links.forEach(link => {
      const listElement = document.createElement('li')

      const anchor = document.createElement('a')
      anchor.href = link.link
      anchor.textContent = link.text
      listElement.appendChild(anchor)

      list.appendChild(listElement)
    })
  }

  get links () {
    return [
      {
        link: '/categories/category1',
        text: 'Categoría 1'
      },
      {
        link: '/categories/category2',
        text: 'Categoría 2'
      }
    ]
  }
}

customComponent({
  name: 'navigation-menu',
  definition: NavigationMenu
})
