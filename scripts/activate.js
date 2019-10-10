function activate(appName) {
  return `say "hello world"
tell appliation "${appName}"
  reopen
  activate
end tell`;
}

module.exports = activate;
