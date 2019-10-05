on run
  tell application "Google Chrome"
    make new window
    activate
    open location "https://www.google.com"
  end tell

  tell application "System Events"
    key code 123 using {command down, option down}
  end tell

  tell application "iTerm"
    create window with default profile
    delay 2.0
    select
    split vertically with default profile
  end tell

  tell application "System Events"
    key code 124 using {command down, option down}
  end tell
end run
