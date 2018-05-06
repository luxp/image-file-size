# image-file-size

A module for browser to get dimensions of any image file, autodetect the orientation of the image file

[online demo](https://luxp.github.io/image-file-size/demo/dist/)

## Usage
- npm install --save image-file-size

```js
import {getImageSize} from 'image-file-size'

document.getElementById('fileInput').onchange = function (event) {
  let file = event.target.files[0]
  if (file) {
    getImageSize(file)
      .then((result) => {
        document.getElementById('result').innerText = JSON.stringify(result, null, 2)
      })
  }
}
```

the `getImageSize` will return an object like `{width: 100, height: 300}`

## LICENCE
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Xianpo (Alan) Lu