import {customComponent} from '../components.utils.js'

class SearchBox extends HTMLElement {

  constructor () {
    super()
  }

  connectedCallback () {
    this.innerHTML = `
    <div class="search-box">
      <input placeholder="Search" value="" />
    </div>
    `
  }
}

customComponent({
  name: 'search-box',
  definition: SearchBox
})
