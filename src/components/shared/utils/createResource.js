export function createResource(promise) {
  let status = 'pending'
  let result = promise.then(
    (resolved) => {
      status = 'success'
      result = resolved
    },
    (error) => {
      status = 'error'
      result = error
    }
  )

  return {
    read() {
      if (status === 'pending') throw result
      if (status === 'error') throw result
      if (status === 'success') return result
    }
  }
}
