
const transform = (res) => {
  return res.json()
}

const headers = _ => {
  return {
    'Content-Type': 'application/json',
  }
}

const get = ({ url }) => {
  return fetch(url, {
    method: 'GET',
    headers: headers(),
    mode: 'no-cors',
    credentials: 'include'
  }).then(transform)
}

const post = ({ url, payload }) => {
  return fetch(url, {
    body: payload,
    headers: headers(),
    credentials: 'include'
  }).then(transform)
}

export {get, post}
