function escapeCmd(cmd) {
  return cmd.replace(/(["'$`\\])/g, '\\$1');
}

function applescript(segments, ...args) {
  let str = '';
  for (let i = 0; i < segments.length; i++) {
    str += segments[i] + (args[i] || '');
  }
  return str
    .trim()
    .split('\n')
    .filter(s => s.length)
    .map(s => `-e "${escapeCmd(s.trim())}"`)
    .join(' ');
}

module.exports = applescript;
