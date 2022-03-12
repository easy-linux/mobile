export const onBackClick = (e) => {
    if(e && e.stopPropagation){
        e.stopPropagation()
    }
    window.history.back()
} 

export const getBackButton = () => {
    const btn = document.createElement('button')
    btn.className = 'back-button'
    btn.addEventListener('click', onBackClick)
    btn.textContent = '< Back'
    return btn 
}