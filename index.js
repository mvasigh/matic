const exec = require('child_process').exec
const applescript = require('./src/lib/applescript')

// TODO: set up commander

const app = 'Google Chrome'

const script = applescript`
  say "Hello world"
  tell application "${app}"
    reopen
    activate
  end tell
  delay 0.5
  tell application "iTerm"
    reopen
    activate
  end tell
  delay 0.5
  tell application "System Events"
    key code 123 using {control down}
    delay 0.5
    key code 124 using {control down}
    delay 0.5
  end tell
  say "This was a fun little applescript!"
`

exec(`osascript ${script}`)
