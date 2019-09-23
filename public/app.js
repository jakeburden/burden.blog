const ui = {
  toggle: document.querySelector('.js-toggle')
}

let isDark = false

ui.toggle.addEventListener('click', toggleDarkMode)

function toggleDarkMode () {
  const classes = document.body.classList
  if (!isDark) {
    classes.toggle('dark')
  }
}