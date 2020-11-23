
const bodyCont = document.querySelector('body')
const mainCont = bodyCont.querySelector('main').remove()
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Israel is the champion'
bodyCont.append(newHeader)


