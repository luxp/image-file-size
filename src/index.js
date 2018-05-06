import exif from 'exif-js'


function getExifTags (image) {
  return new Promise((resolve) => {
    exif.getData(image, function () {
      resolve(exif.getAllTags(this))
    });
  })
}

export function getImageSize (file) {
  if (!file.type.match(/image/)) {
    return Promise.reject({
      error: 'not a image file'
    })
  }

  return new Promise((resolve, reject) => {
    let fileReader = new FileReader()
    fileReader.onload = (event) => {
      let base64 = event.target.result
      let img = new Image()
      img.onload = () => {
        getExifTags(img)
          .then((exif) => {
            const { Orientation } = exif
            let result = {}
            if (Orientation === 6 || Orientation === 8 || Orientation === 5 || Orientation === 7) {
              // noinspection JSSuspiciousNameCombination
              result.width = img.height
              // noinspection JSSuspiciousNameCombination
              result.height = img.width
            } else {
              result.width = img.width
              result.height = img.height
            }
            resolve(result)
          })
      }
      img.onerror = () => {
        reject({
          error: 'image load error'
        })
      }
      img.src = base64
    }

    fileReader.onerror = () => {
      reject({
        error: 'fileReader error'
      })

    }
    fileReader.readAsDataURL(file)
  })
}