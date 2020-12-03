import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}

// export function getModulesBySearchAPI () {
//   return request.get(rootUrl)
//     .then(res => res.body)
// }

export function getSavedModulesAPI () {
  return request.get('/api/modules/saved')
    .then(res => res.body)
}

export function createModuleAPI (module) {
  module.number_of_elements = module.elements.length

  return request.post('/api/modules').send(module)
    .then(res => res.body)
}