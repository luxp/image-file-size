!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("exif-js")):"function"==typeof define&&define.amd?define(["exports","exif-js"],t):t(e.imageFileSize={},e.exif)}(this,function(e,t){t=t&&t.hasOwnProperty("default")?t.default:t,e.getImageSize=function(e){return e.type.match(/image/)?new Promise(function(i,r){var n=new FileReader;n.onload=function(e){var n=e.target.result,o=new Image;o.onload=function(){var e;(e=o,new Promise(function(i){t.getData(e,function(){i(t.getAllTags(this))})})).then(function(e){var t=e.Orientation,r={};6===t||8===t||5===t||7===t?(r.width=o.height,r.height=o.width):(r.width=o.width,r.height=o.height),i(r)})},o.onerror=function(){r({error:"image load error"})},o.src=n},n.onerror=function(){r({error:"fileReader error"})},n.readAsDataURL(e)}):Promise.reject({error:"not a image file"})}});
