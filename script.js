const container = document.querySelector('.container')
const navigation = document.querySelector('.navigation')
const menu = document.querySelector('.menu')

menu.onclick = function () {
  navigation.classList.toggle('active'), container.classList.toggle('active')
}
