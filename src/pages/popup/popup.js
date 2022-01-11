'use strict'

const disableNitter = document.querySelector('#disable-nitter')
const disableInvidious = document.querySelector('#disable-invidious')
const disableBibliogram = document.querySelector('#disable-bibliogram')
const disableOsm = document.querySelector('#disable-osm')
const disableReddit = document.querySelector('#disable-reddit')
const disableSearchEngine = document.querySelector('#disable-searchEngine')
const disableSimplyTranslate = document.querySelector('#disable-simplyTranslate')
const disableWikipedia = document.querySelector('#disable-wikipedia')
const version = document.querySelector('#version')

window.browser = window.browser || window.chrome

browser.storage.sync.get(
  [
    'disableNitter',
    'disableInvidious',
    'disableBibliogram',
    'disableOsm',
    'disableReddit',
    'disableSearchEngine',
    'disableSimplyTranslate',
    'disableWikipedia',
    'theme'
  ],
  (result) => {
    if (result.theme) document.body.classList.add(result.theme)
    disableNitter.checked = !result.disableNitter
    disableInvidious.checked = !result.disableInvidious
    disableBibliogram.checked = !result.disableBibliogram
    disableOsm.checked = !result.disableOsm
    disableReddit.checked = !result.disableReddit
    disableSearchEngine.checked = !result.disableSearchEngine
    disableSimplyTranslate.checked = !result.disableSimplyTranslate
    disableWikipedia.checked = !result.disableWikipedia
  }
)

version.textContent = browser.runtime.getManifest().version

disableNitter.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableNitter: !event.target.checked })
})

disableInvidious.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableInvidious: !event.target.checked })
})

disableBibliogram.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableBibliogram: !event.target.checked })
})

disableOsm.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableOsm: !event.target.checked })
})

disableReddit.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableReddit: !event.target.checked })
})

disableSearchEngine.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableSearchEngine: !event.target.checked })
})

disableSimplyTranslate.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableSimplyTranslate: !event.target.checked })
})

disableWikipedia.addEventListener('change', (event) => {
  browser.storage.sync.set({ disableWikipedia: !event.target.checked })
})

document.querySelector('#more-options').addEventListener('click', () => {
  browser.runtime.openOptionsPage()
})
