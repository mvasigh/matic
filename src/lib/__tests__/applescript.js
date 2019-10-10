const applescript = require('../applescript');

const LINE_REGEX = /-e "([^"]|\\")*"/g;

describe('applescript tagged template literal', () => {
  it('should return a string', () => {
    const application = 'Google Chrome';
    const script = applescript`
    tell application "${application}"
    activate
    end tell
    `;
    expect(typeof script).toEqual('string');
  });

  it('should split by line', () => {
    const script = applescript`
      abc
      1234
    `;
    expect(script.match(LINE_REGEX).length).toEqual(2);
  });
});
