const fs = require('fs');
const rfs = require('rotating-file-stream');

function createLogstream({ path, interval, isSaveEnabled }) {
  if (isSaveEnabled === 'true') {
    if (fs.existsSync(path)) fs.mkdirSync(path);

    return rfs('access.log', {
      interval,
      path,
    });
  }

  return null;
}

module.exports = createLogstream;
