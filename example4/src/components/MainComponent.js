import './MainComponent.scss'
import {clickOnImage} from '../helpers/mobile'

const MainComponent = () => {

  const box = document.createElement('div')
  box.className = 'main-component-box'
  box.style.border = "1px solid #CCC"


  box.addEventListener('click', clickOnImage)

  box.textContent = 'Take a photo'

  fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(response => response.json())
    .then(json => {
      const remoteBlock = document.createElement('div')
      remoteBlock.className = 'image-block'
      remoteBlock.id = 'image-block'

      const image = document.createElement('img')
      image.className = 'remote-image'
      image.src = json.thumbnailUrl

      remoteBlock.appendChild(image)
      document.querySelector('body').appendChild(remoteBlock)
    })
    .catch(error => console.log(error))

  return box
}

export default MainComponent

