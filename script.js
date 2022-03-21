function AltTheme() {
  const body = document.getElementById('body')
  if (body.classList == 'theme3') {
    body.classList.remove('theme3')
    body.classList.add('theme1')
  } else if (body.classList == 'theme1') {
    body.classList.remove('theme1')
    body.classList.add('theme2')
  } else {
    body.classList.remove('theme2')
    body.classList.add('theme3')
  }
}

function writeScreen(number) {
  const screen = document.getElementById('screen')
  screen.textContent += number
}

function clearScreen() {
  const screen = document.getElementById('screen')
  screen.textContent = ''
}

function Del() {
  let screen = document.getElementById('screen')
  screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1)
}

function calc() {
  let screen = document.getElementById('screen').textContent
  if(screen){
    document.getElementById('screen').textContent = eval(screen)
  }
}
