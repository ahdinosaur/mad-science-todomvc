const el = require('vdux/element').default

module.exports = {
  render
}

function render ({ props }) {
  return el('div', {
    textContent: "404"
  })
}
