
const get = ({ url }) => {
  return fetch(url, {
    method: 'GET',
    credentials: 'include'
  })
}

const post = ({ url, payload }) => {
  return fetch(url, {
    body: payload,
    credentials: 'include'
  })
}

export {get, post}
