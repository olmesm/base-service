const fs = require('fs');
const rfs = require('rotating-file-stream');

function createLogstream({ logPath, interval, isSaveEnabled }) {
  if (isSaveEnabled === 'true') {
    if (!fs.existsSync(logPath)) fs.mkdirSync(logPath);

    return rfs('access.log', {
      interval,
      path: logPath,
    });
  }

  return null;
}

module.exports = createLogstream;
