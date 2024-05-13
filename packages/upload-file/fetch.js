// function http(url, params) {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: 'post',
//       body: params,
//     }).then(res => res.json())
//     .catch(res=> {
//       reject(res)
//     })
//     .then(res => {
//       resolve(res)
//     })
//   })
// }
function http(url, params, callback) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('post', url)
    request.upload.onprogress = function(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      callback(e)
    }
    request.send(params)
    request.onreadystatechange = function() {
      if(request.readyState == 4) {
        if(request.status === 200) {
          resolve(JSON.parse(request.responseText))
        }else {
          reject(request)
        }
      }
    }
  })
}
export default http