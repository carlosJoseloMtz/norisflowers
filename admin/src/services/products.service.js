import {get} from './http.client.js'

const paginate = ({ offset=0 }) => {
  return get({
    url: `http://localhost:8080/api/v1/admin/products/${offset}`
  })
}

export {paginate}