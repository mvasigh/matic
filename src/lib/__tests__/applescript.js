const applescript = require('../applescript')

test('it should return a string', () => {
  const application = 'Google Chrome'
  const script = applescript`
    tell application "${application}"
      activate
    end tell
  `
  expect(typeof script).toEqual('string')
});
