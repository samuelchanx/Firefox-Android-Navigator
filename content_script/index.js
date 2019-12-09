async function onClickNavigator(event) {
  console.log('Send to background')
  browser.runtime.sendMessage("Do something")
}

let image = document.createElement('img')
image.setAttribute('src', 'https://icon-library.net/images/icon-circle-png/icon-circle-png-29.jpg')
image.style.cssText = 'width: 30px; height: 30px; opacity: 0.3'
image.setAttribute('draggable', 'true')

let navigationDiv = document.createElement('div')
navigationDiv.style.cssText = 'top:35%; right:0px; position: fixed; z-index: 10000;'
navigationDiv.classList = ['tab-navigator']
navigationDiv.appendChild(image)

document.querySelector('body').appendChild(navigationDiv)

document.querySelector('.tab-navigator img').addEventListener('click', onClickNavigator)