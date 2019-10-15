const ui = {
  toggle: document.querySelector('.js-toggle')
}

let isDark = false

ui.toggle.addEventListener('click', toggleDarkMode)

if (localStorage.isDark) toggleDarkMode()

function toggleDarkMode () {
  const classes = document.body.classList
  classes.toggle('dark')
  ui.toggle.textContent = isDark ? '🌙 dark mode' : '☀️ light mode'
  isDark = !isDark

  localStorage.isDark = classes
}