import {getImageSize} from '../src/index'

document.getElementById('fileInput').onchange = function (event) {
  let file = event.target.files[0]
  if (file) {
    getImageSize(file)
      .then((result) => {
        document.getElementById('result').innerText = JSON.stringify(result, null, 2)
      })
  }
}