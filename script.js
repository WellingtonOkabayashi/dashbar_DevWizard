const container = document.querySelector('.container')
const navigation = document.querySelector('.navigation')
const menu = document.querySelector('.menu')

menu.onclick = function () {
  navigation.classList.toggle('active'), container.classList.toggle('active')
}

/*======---Menu ativo---=======*/
const li = document.querySelectorAll('.link')
const sec = document.querySelectorAll('section')

function menuAtivo() {
  let len = sec.length
  while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
  li.forEach(ltx => ltx.classList.remove('ativo'))
  li[len].classList.add('ativo')
}
menuAtivo()
window.addEventListener('scroll', menuAtivo)
