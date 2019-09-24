const ui = {
  toggle: document.querySelector('.js-toggle')
}

let isDark = false

ui.toggle.addEventListener('click', toggleDarkMode)

if (localStorage.isDark) toggleDarkMode()

function toggleDarkMode () {
  const classes = document.body.classList
  classes.toggle('dark')
  ui.toggle.textContent = isDark ? 'Dark Mode' : 'Light Mode'
  isDark = !isDark

  localStorage.isDark = isDark
}