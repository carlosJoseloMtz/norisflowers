import {Router} from '@vaadin/router'

const lazyLoadChunk = (context, commands) => {
  // load only if the definition doe not exist
  if (!customElements.get(context.route.component)) {
    const jsModule = document.createElement('script')
    jsModule.src = `/build/${context.route.component}.js`
    jsModule.type = 'text/javascript'
    jsModule.onload = function () {
      return commands.component(context.route.component)
    }
    document.querySelector('body')
      .appendChild(jsModule)
  } else {
    return commands.component(context.route.component)
  }
}

const setupRoutes = (contentNode) => {
  const router = new Router(contentNode)
  router.setRoutes([
    {
      path: '/',
      component: 'home-page',
      action: lazyLoadChunk
    },
    {
      path: '/products',
      component: 'products-page',
      action: lazyLoadChunk
    }
  ])
}

export {setupRoutes}
