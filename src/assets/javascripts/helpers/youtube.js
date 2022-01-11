const targets = [
  'm.youtube.com',
  'youtube.com',
  'img.youtube.com',
  'www.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
  's.ytimg.com',
  'music.youtube.com'
]
/*
    Please remember to also update the manifest.json file
    (content_scripts > matches, 'persist-invidious-prefs.js')
    when updating this list:
  */
const redirects = [
  'https://piped-material.১.net',
  'https://piped-staging.ftp.sh'
]

export default {
  targets,
  redirects
}
