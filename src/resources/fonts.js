/* eslint-disable */
const fonts = () => {
  var WebFontConfig = {
    google: { families: [ 'Open+Sans:400,600' ] }
  }

  var wf = document.createElement('script')
  wf.src = (document.location.protocol === 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  wf.type = 'text/javascript'
  wf.async = 'true'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(wf, s)
}

export default fonts()
/* eslint-enable */
