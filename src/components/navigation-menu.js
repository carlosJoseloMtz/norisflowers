import {customComponent} from '../components.utils.js'

const template = document.createElement('template')
template.innerHTML = `
<nav>
  <ul>
  </ul>
</nav>
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
