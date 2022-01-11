window.browser = window.browser || window.chrome

function getMessage (tag) {
  return tag.replace(/__MSG_(\w+)__/g, function (_match, v1) {
    return v1 ? browser.i18n.getMessage(v1) : null
  })
}

function localisePage () {
  const elements = document.querySelectorAll('[data-localise]')

  for (const i in elements) {
    if (elements.hasOwnProperty(i)) {
      const obj = elements[i]
      const tag = obj.getAttribute('data-localise').toString()

      const msg = getMessage(tag)

      if (msg && msg !== tag) obj.textContent = msg
    }
  }

  const placeholders = document.querySelectorAll('[data-localise-placeholder]')

  for (const i in placeholders) {
    if (placeholders.hasOwnProperty(i)) {
      const obj = placeholders[i]
      const tag = obj.getAttribute('data-localise-placeholder').toString()

      const msg = getMessage(tag)

      if (msg && msg !== tag) obj.placeholder = msg
    }
  }
}

localisePage()
