
class ApplicationContext {

  private static implementations: {[type: string]: any} = {}

  static register (impl: any, name: string) {
    ApplicationContext.implementations[name] = impl
  }

  static getImpl (name: string): any {
    let impl: any = null

    for (let key in ApplicationContext.implementations) {
      if (key === name) {
        impl = ApplicationContext.implementations[key]
        break
      }
    }

    if (!impl) {
      console.warn(`Could not find implementation for name ${name}`)
    }

    return impl
  }
}

export default ApplicationContext