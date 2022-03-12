import { getBackButton } from './helpers/common'
import './styles/main.scss'
import './styles/articles.scss'

 const initArticles = () => {
    const backButton = getBackButton()
    document.querySelector('#back-button').appendChild(backButton)
}

initArticles() 

