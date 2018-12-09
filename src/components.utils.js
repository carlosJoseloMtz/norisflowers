
const customComponent = ({ name, definition }) => {
  if (!customElements.get(name)) {
    customElements.define(name, definition)
  }
}

export {customComponent}
