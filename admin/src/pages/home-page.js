import {customComponent} from '../components.utils.js'

const homePageTemplate = document.createElement('template')
homePageTemplate.innerHTML = `
<div>
  <h1>hi</h1>
  this is the dashboard
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
